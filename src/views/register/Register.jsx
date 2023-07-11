// css
import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

// import cnstant file
import { registerInputs } from "../../constants/constant";
import RegisterModal from "./RegisterModal";

const Register = () => {
  // state for holding the registre input value
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    zipCode: "",
    password: "",
  });
  // state for opening and closing modal
  const [registerModal, setRegisterModal] = useState(false);

  // handling the entered input
  const handleChange = (event) => {
    setRegisterForm((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  //
  const handleRegisterForm = (e) => {
    e.preventDefault();
    setRegisterModal((prev) => !prev);
  };

  // generating register input Elements
  const registerElement = registerInputs.map((input) => {
    return (
      <div key={input.id}>
        <label htmlFor={input.htmlFor}>{input.label}</label>
        <input
          value={registerForm[input.name]}
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
      <main className="register">
        <div className="register__container">
          <div className="register__top">
            <h2>Welcome to GameUp</h2>
            <p>We can’t wait to have you join our community!</p>
          </div>

          <div className="register__formBox">
            <form className="register__form" onSubmit={handleRegisterForm}>
              <div className="register__form--inputs">{registerElement}</div>

              <div className="register__form--submit">
                <button type="submit">Let’s go</button>
              </div>
            </form>

            <div className="register__formBox--bottom">
              <h4>Already have an account? </h4>
              <Link to={"/login"}>Login</Link>
            </div>
          </div>
        </div>
      </main>

      <RegisterModal
        registerModal={registerModal}
        setRegisterModal={setRegisterModal}
      />
      <Footer />
    </>
  );
};

export default Register;
