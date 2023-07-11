// img
import historyIcon from "../../assets/icons/history.svg";
import cancelIcon from "../../assets/icons/cancel.svg";

const HistorySettings = () => {
  return (
    <div className="settings__history">
      <div className="settings__top">
        <div className="settings__top--left">
          <img src={historyIcon} alt="save" />
          <span>search history</span>
        </div>
        <div className="settings__top--right">
          <button type="button">clear history</button>
        </div>
      </div>

      <div className="settings__bottom">
        <div className="settings__single">
          <p>12-16, Female, Manhattan, NY</p>
          <img src={cancelIcon} alt="cancel" />
        </div>
        <div className="settings__single">
          <p>12-16, Male, Brooklyn, NY</p>
          <img src={cancelIcon} alt="cancel" />
        </div>
        <div className="settings__single">
          <p>12-16, Female, Brooklyn, NY</p>
          <img src={cancelIcon} alt="cancel" />
        </div>
        <div className="settings__single">
          <p>12-16, Female, Brooklyn, NY</p>
          <img src={cancelIcon} alt="cancel" />
        </div>
        <div className="settings__single">
          <p>12-16, Female, Brooklyn, NY</p>
          <img src={cancelIcon} alt="cancel" />
        </div>
      </div>
    </div>
  );
};

export default HistorySettings;
