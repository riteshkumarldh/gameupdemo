// icons
import cancel from "../../assets/icons/cancel.svg";
import crown from "../../assets/icons/crown.svg";
// component
import Button from "../../components/button/Button";

const RegisterModal = ({ registerModal, setRegisterModal }) => {
  return (
    <div className={`register-popup ${registerModal === true ? "show" : null}`}>
      <div className="overlay" onClick={() => setRegisterModal(false)}></div>
      <div className="popup">
        <figure
          className="cancel__icon"
          onClick={() => setRegisterModal(false)}
        >
          <img src={cancel} alt="cancel icon" />
        </figure>
        <div className="popup__inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="name">Zip Code</label>
            <input type="number" />
          </div>
          <div>
            <label htmlFor="name">Username</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="name">Password</label>
            <input type="password" />
          </div>
          <div>
            <label htmlFor="name">Re-enter Password</label>
            <input type="password" />
          </div>
          <div>
            <label htmlFor="what">
              What are you looking to get out of GameUp?
            </label>
            <select name="what" id="what">
              <option>-</option>
              <option value="example1">example1</option>
              <option value="example2">example2</option>
              <option value="example3">example3</option>
            </select>
          </div>
          <div>
            <label htmlFor="how">How did you hear about us?</label>
            <select name="how" id="how">
              <option>-</option>
              <option value="example1">example1</option>
              <option value="example2">example2</option>
              <option value="example3">example3</option>
            </select>
          </div>
        </div>

        <div className="plans">
          <div className="plans__top">
            <h4>Select your plan:</h4>
          </div>

          <div className="plans__info">
            <div className="plan__standard plan">
              <div className="plan__type">
                <h4>Standard</h4>
              </div>

              <ul className="features">
                <li>Benefit</li>
                <li>Another benefit Benefit</li>
              </ul>
            </div>
            <div className="plan__premium plan">
              <div className="plan__type">
                <img src={crown} alt="crown" />
                <h4>premium</h4>
              </div>
              <ul className="features">
                <li>Benefit</li>
                <li>Another benefit Benefit</li>
              </ul>
            </div>
          </div>
        </div>

        <Button varient="join" text="let's go" />
      </div>
    </div>
  );
};

export default RegisterModal;
