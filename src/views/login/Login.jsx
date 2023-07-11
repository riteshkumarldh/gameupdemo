import { useContext, useState } from "react";
import { Link, useHref, useNavigate } from "react-router-dom";
// css
import "./login.css";

// images
import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/gmail.svg";
import Footer from "../../components/footer/Footer";

// import contant
import { loginInputs } from "../../constants/constant";

// context
import { UserContext } from "../../context/UserContext";

const Login = () => {
  // getting user from context
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // state for holding the value of inputs
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const href = useHref();

  // handling the entered input
  const handleChange = (event) => {
    setLoginForm((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  // handling the login form onsubmission
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.username === "" || loginForm.password === "") {
      alert("Please fill both fields");
      return;
    }

    setUser(true);
    navigate("/user");
  };

  // inputs
  const inputElements = loginInputs.map((input) => {
    return (
      <div key={input.id}>
        <label htmlFor={input.htmlFor}>{input.label}</label>
        <input
          value={loginForm.name}
          onChange={handleChange}
          type={input.type}
          name={input.name}
          id={input.htmlFor}
        />
      </div>
    );
  });

  return (
    <>
      <main className="login">
        <div className="login__container">
          <h1>login</h1>

          <div className="login__box">
            <form className="login__form" onSubmit={handleLogin}>
              {inputElements}

              <div className="login__form--forgot">
                <a href="#">forgot password?</a>
              </div>

              <div className="login__btns">
                <button className="login__btn--btn log" type="submit">
                  Let’s go
                </button>
                <p>or</p>
                <button type="button" className="login__btn--btn facebook">
                  <img src={facebook} alt="facebook" />
                  <span>login with facebook</span>
                </button>
                <button type="button" className="login__btn--btn google">
                  <img src={google} alt="google" />
                  <span>login with google</span>
                </button>
              </div>
            </form>

            <div className="login__box--bottom">
              <h3>New to Gameup?</h3>

              <Link to="/register">Register for a new account</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer href={href} />
    </>
  );
};

export default Login;
