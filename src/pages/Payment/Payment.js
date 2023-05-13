import "./Payment.scss";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";


function Payment () {
 
  const [user,setUser] = useState(null);
  const [failedAuth,setFailedAuth] = useState(false);
  const params = useParams();
  const email = params.tenantemail;
  const [currentTenant, setTenant] = useState(null);

  useEffect(() => { 
    const token = localStorage.getItem("token");
    console.log(token);
   

    if(!token) {
      return setFailedAuth(true);
    }

    axios.get('http://localhost:8000/api/users/current',{
      headers: {
        Authorization: `Bearer ${token}`
      }
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error)=> {
        console.log('Error authenticating',error);
        setFailedAuth(true);
      });

      axios
      .get(`http://localhost:8000/api/tenants/${email}`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
        })

      .then((response) => {
        let currentTenant={};
        currentTenant=response.data[0];
        setTenant(currentTenant);
        console.log(currentTenant);
        
       
      })
      .catch((e) => {
        console.log(e.message);
      });
},[]);
  
    if(!currentTenant) {

      return(
        <section className="nodashboard">
          <p>You are not authorized to see this page.</p>
          <p>
            <Link to="/">Back</Link>
          </p>
        </section>
      )
    }
    
    if(failedAuth) {
      return(
        <section className="nodashboard">
          <p>You must be logged in to see this page.</p>
          <p>
            <Link to="/login">Login</Link>
          </p>
        </section>
      )
    }

    if(user === null){
      return(
        <section className="nodashboard">
          <p>Loading...</p>
        </section>
      )
    }

  
  function createCheckout(e) {
    e.preventDefault();
    axios
    .post('http://localhost:8000/api/create-checkout',{})
    .then((response) => {
      if (response.status ==200) {
        window.location=response.data;
      }
    })
    .catch((e) => console.log(e.message));
  }

  function handleUtilClick () {
    window.location.href="https://buy.stripe.com/test_7sI006dTHcQ2blK7ss";
  }
  

return (
  <main>
  <h1 className="welcome">{`${currentTenant.tenant_name} - Payment Dashboard`}</h1>
  <div className="main">
  <section className="rentdashboard">
    <div className="rentdashboard__container--column">
      <h2 className="rentdashboard__description--bold">RENT</h2>
      <div className="rentdashboard__description">
        <h2>Monthly Rental Rate</h2>
        <div>
        {`${currentTenant.amount}`}
        </div>
      </div>
    <div className="rentdashboard__container--row">
    <form className="rentdashboard__paymentbox" onSubmit={createCheckout}>
        <h2>Make a one-time rent payment</h2>
        <button className="button__submit"type="submit" id="submit-button">
          Pay Now
        </button>
      </form>
      <div className="rentdashboard__optiontext"> OR </div>
    <div className="rentdashboard__paymentbox">
      <h2>Set up a recurring rent payment</h2>
      <button className="button__submit" type="submit">Pay Now</button>
    </div>
    </div>
    </div> 
  </section>

  <section className="utildashboard">
  <h2 className="utildashboard__description--bold">UTILITIES</h2>
  <div className="rentdashboard__description">
  <h2>Average Monthly Utilities</h2>
        <div>
        $60
        </div>
  </div>
  <div className="utildashboard__paymentbox">
        <h2>Pay Utilities Due</h2>
        <div>
        $150.00
        </div>
        <button className="button__submit" type="submit" onClick={handleUtilClick}>
          Pay Now
        </button>
      </div>


  </section>
  </div>
  </main>
);

}

export default Payment;
