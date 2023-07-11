// img
import bgImg from "../../assets/images/bgimg.png";
import pencilIcon from "../../assets/icons/pencil.svg";

const TeamPageHeader = ({ editMode, setTeamEdit }) => {
  return (
    <div className="teamPage__header">
      <figure>
        <img src={bgImg} alt="img" />
      </figure>

      <div className="overlay">
        <h2>Riverside Hawks</h2>

        {editMode && (
          <div
            className="teamPage__header--edit"
            onClick={() => setTeamEdit(true)}
          >
            <figure>
              <img src={pencilIcon} alt="icon" />
            </figure>
            <p>edit team name and banner</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPageHeader;
