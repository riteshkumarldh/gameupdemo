// css
import "./logoSymbol.css";
// img
import logo from "../../assets/icons/GU Symbol.svg";

const LogoSymbol = () => {
  return (
    <div className="symbol">
      <figure>
        <img src={logo} alt="logo" />
      </figure>
    </div>
  );
};

export default LogoSymbol;
