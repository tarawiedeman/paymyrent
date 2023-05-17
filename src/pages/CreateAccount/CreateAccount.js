import "./CreateAccount.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function CreateAccount() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let first_name = e.target.firstname.value;
    let last_name = e.target.lastname.value;
    let name = first_name.concat(" ", last_name);
    console.log(name);

    if (
      !e.target.firstname.value === "" ||
      !e.target.lastname.value === "" ||
      !e.target.email.value === "" ||
      !e.target.password.value === ""
    ) {
      window.alert("Please enter all required fields");
      return false;
    }

    axios
      .post("http://localhost:8000/api/users/register", {
        email: e.target.email.value,
        password: e.target.password.value,
        name: name,
      })

      .then(() => {
        setSuccess(true);
        setError("");
        e.target.reset();
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.response.data);
      });
  };

  return (
    <section className="newaccount">
      <h2 className="newaccount__header">Create an account</h2>
      <form className="newaccount__form" onSubmit={handleSubmit}>
        <label className="newaccount__form--label">First Name</label>
        <input
          className="newaccount__form--input"
          type="text"
          placeholder="Robert"
          name="firstname"
        ></input>

        <label className="newaccount__form--label">Last Name</label>
        <input
          className="newaccount__form--input"
          type="text"
          placeholder="James"
          name="lastname"
        ></input>

        <label className="newaccount__form--label">Email</label>
        <input
          className="newaccount__form--input"
          type="text"
          placeholder="name@email.com"
          name="email"
        ></input>

        <label className="newaccount__form--label">Password</label>
        <input
          className="newaccount__form--input"
          type="password"
          name="password"
        ></input>

        <button className="newaccount__form--button"> Create Account </button>

        {success && <div className="signup__message">Signed up!</div>}
        {error && <div className="signup__message">{error}</div>}
      </form>
      <p className="newaccount__subheader">
        Have an account? <Link to="/login">Log in</Link>
      </p>
    </section>
  );
}

export default CreateAccount;
