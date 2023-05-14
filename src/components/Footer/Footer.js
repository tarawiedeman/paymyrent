
import { Link, NavLink} from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/logo/rentlogo.png";



function Footer() {

  return (
   <footer className="footer">
    
    <ul className="footer__list">
        <li className="footer__list--item">Terms of Use</li>
        <li className="footer__list--item">Privacy Policy</li>
        <li className="footer__list--itembold"> PayMyRent., Inc 2023 </li>
    </ul>
    

    {/* <img src={logo} alt="logo" className="footer__logo"></img> */}

    <ul className="footer__list">
        <li className="footer__list--itembold">Contact Support</li>
        <li className="footer__list--item">500-788-6463</li>
        <li className="footer__list--item">paymyrent@outlook.com</li>
    </ul>
    



   </footer>
  );
}

export default Footer;