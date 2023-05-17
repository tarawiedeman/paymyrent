import "./Login.scss";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import jwt from "jwt-decode";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.email.value === "" || !e.target.password.value === "") {
      window.alert("Please enter all required fields");
      return false;
    }

    axios
      .post("http://localhost:8000/api/users/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setError("");
        const user = jwt(response.data.token);
        console.log(user);
        navigate("/payment");
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  return (
    <section className="login">
      <h2 className="login__header">Login to an existing account</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__form--label">Email</label>
        <input
          className="login__form--input"
          type="text"
          placeholder="name@email.com"
          name="email"
        ></input>

        <label className="login__form--label">Password</label>
        <input
          className="login__form--input"
          type="password"
          name="password"
        ></input>

        <button className="login__form--button"> Login </button>
        {error && <div className="login__message">{error}</div>}
      </form>
      <p>
        Need an account? <Link to="/createaccount">Create Account</Link>
      </p>
    </section>
  );
}

export default Login;
