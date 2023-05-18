import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/rentlogo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setLogin] = useState("false");
  const navigate = useNavigate();

  function LogHandler() {
    const token = localStorage.getItem("token");

    if (token) {
      setLogin(true);
      navigate("/logout");
    }

    if (!token) {
      setLogin(false);
      navigate("/login");
    }
  }

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      <ul className="header__list">
        <Link to="payment/">
          <li className="header__text--dashboard">My Dashboard</li>
        </Link>

        {isLoggedIn === true ? (
          <button className="header__text" onClick={LogHandler}>
            Login
          </button>
        ) : (
          <button className="header__text" onClick={LogHandler}>
            Logout
          </button>
        )}
      </ul>
    </header>
  );
}

export default Header;
