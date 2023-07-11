// img
import saveIcon from "../../assets/icons/save.svg";
import cancelIcon from "../../assets/icons/cancel.svg";

const SearchSettings = () => {
  return (
    <div className="settings__searches">
      <div className="settings__top">
        <div className="settings__top--left">
          <img src={saveIcon} alt="save" />
          <span>saved searches</span>
        </div>
      </div>

      <div className="settings__bottom">
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

export default SearchSettings;
