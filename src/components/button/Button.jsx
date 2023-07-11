// css
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ varient, text, redirect }) => {
  // const navigateTo =
  //   varient === "login"
  //     ? "/login"
  //     : varient === "home"
  //     ? "/search"
  //     : "/register";

  const classes =
    varient === "login" ? "loginBtn" : varient === "home" ? "home" : "join";

  return (
    <Link to={redirect} className={`button ${classes}`}>
      {text}
    </Link>
  );
};

export default Button;
