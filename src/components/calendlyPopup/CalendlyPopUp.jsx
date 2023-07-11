// css
import "./calendlyPopUp.css";
// img
import icon from "../../assets/icons/cancel.svg";

const CalendlyPopUp = ({ calendlyPopUp, setCalendlyPopUp }) => {
  return (
    <div className={`calendly ${calendlyPopUp === true ? "show" : null}`}>
      <div
        className="calendly__overlay"
        onClick={() => setCalendlyPopUp(false)}
      ></div>

      <div className="calendly__content">
        <figure onClick={() => setCalendlyPopUp(false)}>
          <img src={icon} alt="icon" />
        </figure>
        <div className="calendly__content--placeholder">
          <h2>calendly embed</h2>
        </div>
      </div>
    </div>
  );
};

export default CalendlyPopUp;
