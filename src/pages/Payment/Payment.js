import "./Payment.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import utilities from "../../assets/icons/utilities.png";
import rent from "../../assets/icons/rent.png";
import profile from "../../assets/icons/profile.png";

function Payment() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  const [currentTenant, setTenant] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }

    axios
      .get("http://localhost:8000/api/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error authenticating", error);
        setFailedAuth(true);
      });

    axios
      .get("http://localhost:8000/api/tenants/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        let currentTenant = {};
        currentTenant = response.data[0];
        setTenant(currentTenant);
        console.log(currentTenant);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  if (!currentTenant) {
    return (
      <section className="nodashboard">
        <p>You are not authorized to see this page. Please login.</p>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </section>
    );
  }

  if (failedAuth == true) {
    return (
      <section className="nodashboard">
        <p>You must be logged in to see this page.</p>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </section>
    );
  }

  if (user === null) {
    return (
      <section className="nodashboard">
        <p>Loading...</p>
      </section>
    );
  }

  function createCheckout(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/create-checkout", {})
      .then((response) => {
        if (response.status == 200) {
          window.location = response.data;
        }
      })
      .catch((e) => console.log(e.message));
  }

  function handleUtilClick() {
    window.location.href = "https://buy.stripe.com/test_7sI006dTHcQ2blK7ss";
  }

  return (
    <main>
      <div className="profile">
        <img src={profile} alt="profile" className="profile__image"></img>
        <div className="profile__container">
          <h1 className="profile__name">{`${currentTenant.tenant_name}`}</h1>
          <p className="profile__address">
            {" "}
            {`${currentTenant.property_name}, ${currentTenant.suite_name}`}
          </p>
        </div>
      </div>
      <div className="main">
        <section className="rentdashboard">
          <div className="rentdashboard__container--column">
            <div className="rentdashboard__imagecontainer--row">
              <img className="rentdashboard__icon" src={rent} alt="rent"></img>
              <h2 className="rentdashboard__description--bold">Rent</h2>
            </div>
            <div className="rentdashboard__description">
              <h2>Monthly Rental Rate</h2>
              <div>{`${currentTenant.amount}`}</div>
            </div>

            <form
              className="rentdashboard__paymentbox"
              onSubmit={createCheckout}
            >
              <h2>Make a one-time rent payment</h2>
              <button
                className="button__submit"
                type="submit"
                id="submit-button"
              >
                Pay Now
              </button>
            </form>
          </div>
        </section>

        <section className="utildashboard">
          <div className="utildashboard__rowcontainer">
            <img
              className="utildashboard__icon"
              src={utilities}
              alt="wrench"
            ></img>
            <h2 className="utildashboard__description--bold">Utilities</h2>
          </div>
          <div className="utildashboard__description">
            <h2>Average Monthly Utilities</h2>
            <div>$60</div>
          </div>
          <div className="utildashboard__paymentbox">
            <h2>Utilities Due</h2>
            <div>$40</div>
            <button
              className="button__submit"
              type="submit"
              onClick={handleUtilClick}
            >
              Pay Now
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Payment;
