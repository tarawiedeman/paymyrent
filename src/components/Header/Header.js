
import { Link, NavLink} from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/rentlogo.png";
// import creditcard from "../../assets/icons/cc.png";
// import login from "../../assets/icons/login.png";


function Header() {


  return (
    <header className="header">
        <Link to="/"><img src={logo} alt="logo" className="header__logo"/></Link>
        <ul className="header__list"> 
        {/* <img src={creditcard} alt="creditcard" className="header__icon--creditcard"></img> */}
          <Link to="payment/">
          <li className="header__text">My Dashboard</li>
          </Link>
          {/* <img className="header__icon" src={login} alt="login"></img> */}
          
          <Link to="/login"><li className="header__text">Login</li></Link>
          
          <Link to="/logout"><li className="header__text">Logout</li></Link>
          </ul>
        
      
      
    </header>
  );
}

export default Header;
