import { Link, NavLink } from "react-router-dom";
// CSS file
import "./header.css";
// components
import UserAvatar from "./UserAvatar";
import HeaderActionButtons from "./HeaderActionButtons";
// import img
import logo from "../../assets/icons/GU Symbol.svg";
import logoName from "../../assets/icons/Frame.svg";
import menuOpen from "../../assets/icons/menuOpen.svg";
import menuClose from "../../assets/icons/menuClose.svg";
// context
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  // context
  const { user } = useContext(UserContext);
  // menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container container">
        <div>
          <Link to="/" className="header__logo">
            <img src={logo} alt="logo" />
            <img src={logoName} alt="logonName" />
          </Link>

          <div className="mobile__nav">
            {!isMenuOpen ? (
              <figure
                className="menu__open"
                onClick={() => setIsMenuOpen(true)}
              >
                <img src={menuOpen} alt="menuOpen" />
              </figure>
            ) : (
              <figure
                className="menu__close"
                onClick={() => setIsMenuOpen(false)}
              >
                <img src={menuClose} alt="menuClose" />
              </figure>
            )}
          </div>

          <nav className={`nav ${isMenuOpen ? "show" : null}`}>
            <ul className="nav__list">
              <li>
                <NavLink
                  className="nav__list--link"
                  to="/search"
                  onClick={handleClose}
                >
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav__list--link"
                  to="/about"
                  onClick={handleClose}
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav__list--link"
                  to="/basketballconcierge"
                  onClick={handleClose}
                >
                  basketball concierge
                </NavLink>
              </li>
            </ul>

            {!user && <HeaderActionButtons />}
          </nav>
        </div>
        {user === true ? <UserAvatar /> : <HeaderActionButtons />}
      </div>
    </header>
  );
};

export default Header;
