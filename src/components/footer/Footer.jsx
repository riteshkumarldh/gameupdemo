// CSS file
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = ({ varient }) => {
  return (
    <footer
      className={`footer ${
        varient === "home"
          ? "homePage"
          : varient === "search"
          ? "searchPage"
          : varient === "transparent"
          ? "transparent"
          : null
      }`}
    >
      <div className="footer__container container">
        <div className="footer__left">
          <p>© 2023 GameUp. All rights reserved.</p>
        </div>

        <div className="footer__right">
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privact"> Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
