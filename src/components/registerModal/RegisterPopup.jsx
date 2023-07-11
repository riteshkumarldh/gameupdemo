// css
import "./registerModal.css";
import cancelIcon from "../../assets/icons/cross.svg";

import { registerInputs } from "../../constants/constant";
import { Link } from "react-router-dom";

const RegisterPopup = ({ setRegisterModal, registerModal }) => {
  // generating register input Elements
  const registerElement = registerInputs.map((input) => {
    return (
      <div key={input.id}>
        <label className="inputlabel" htmlFor={input.htmlFor}>
          {input.label}
        </label>
        <input
          // value={registerForm[input.name]}
          // onChange={handleChange}
          type={input.type}
          name={input.name}
          id={input.htmlFor}
          className="inputbox"
        />
      </div>
    );
  });

  return (
    <div
      className={`register__popup ${registerModal === true ? "show" : null}`}
    >
      <div
        className="overlayRegister"
        onClick={() => setRegisterModal(false)}
      ></div>

      <div className="modal">
        <div className="modal__top">
          <h3>you’ll need to create an account to do that</h3>
          <figure onClick={() => setRegisterModal(false)}>
            <img src={cancelIcon} alt="cancelIcon" />
          </figure>
        </div>

        <div className="modal__form">
          <form>
            <div className="inputs">{registerElement}</div>

            <button type="submit" className="btn primary__btn">
              let`s go
            </button>
          </form>

          <div className="modal__form--info">
            <h4>Already have an account?</h4>
            <Link to="/login">login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopup;
