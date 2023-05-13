
import { Link, NavLink} from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/rentlogo.jpg";
import creditcard from "../../assets/icons/cc.png";
import login from "../../assets/icons/login.png";


function Header() {


  return (
    <header className="header">
        <Link to="/"><img src={logo} alt="logo" className="header__logo"/></Link>
        <div className="header__payment"> 
        <img src={creditcard} alt="creditcard" className="header__icon--creditcard"></img>
          <Link to="payment/">
          <h2 className="header__payment--text">Payment Dashboard</h2>
          </Link>
        </div>
        <div className="header__login">
          <img className="header__icon" src={login} alt="login"></img>
          <div className="header__container">
          <Link to="/login"><h2 className="header__login--text">Login</h2></Link>
          <div className="header__login--text"> / </div>
          <Link to="/logout"><h2 className="header__login--text">Logout</h2></Link>
          </div>
        </div>
      
      
    </header>
  );
}

export default Header;
