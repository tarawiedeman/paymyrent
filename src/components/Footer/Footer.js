
import { Link, NavLink} from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/logo/rentlogo.jpg";



function Footer() {

  return (
   <footer className="footer">
    <ul className="footer__list">
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
    </ul>
    <p>PayMyRent., Inc 2023</p>
    
    <img src={logo} alt="logo" className="footer__logo"></img>

    <div className="footer__container">
        <p className="header__support--text">Contact Support</p>
        <p className="header__support--text">500-788-6463</p>
        <p className="header__support--text">paymyrent@outlook.com</p>
    </div>



   </footer>
  );
}

export default Footer;