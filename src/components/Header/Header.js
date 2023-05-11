
import { Link, NavLink} from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/rentlogo.jpg";
import login from "../../assets/icons/login.png";


function Header() {


  return (
    <header className="header">
        <Link to="/"><img src={logo} alt="logo" className="header__logo"/></Link>
        <Link to="/login"><div className="header__login">
          <img className="header__icon" src={login} alt="login"></img>
          <h2 className="header__login--text">Login</h2>
        </div>
        </Link>
      
    </header>
  );
}

export default Header;
