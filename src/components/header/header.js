
import { Link, NavLink} from "react-router-dom";
import "./Header.scss";
import {logo} from "../../assets/logo/rentlogo.jpg";
import {loginicon} from "../../assets/icons/login.png";


function Header() {


  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="header__logo"/>
        <div className="header__login">
          <img src={login} alt="login"></img>
          <h2 className="header__login--text">Login</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
