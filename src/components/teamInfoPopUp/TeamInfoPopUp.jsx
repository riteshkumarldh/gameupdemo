import "./teamInfoPopUp.css";

// img
import teamImg from "../../assets/images/team.png";
import cancelIcon from "../../assets/icons/cancel.svg";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const TeamInfoPopUp = ({ setTeamPopUp, teamPopUp }) => {
  return (
    <div className={`teaminfo__popup ${teamPopUp === true ? "show" : null}`}>
      <div
        className="teaminfo__popup--overlay"
        onClick={() => setTeamPopUp(false)}
      ></div>

      <div className="teaminfo__popup--content">
        <div className="cancelIcon" onClick={() => setTeamPopUp(false)}>
          <img src={cancelIcon} alt="cancel" />
        </div>

        <figure>
          <img src={teamImg} alt="teamImage" />
        </figure>

        <div className="teaminfo__content">
          <div className="teaminfo__heading">
            <h3>Team name</h3>
            <p>new york, ny</p>
          </div>

          <div className="teaminfo__details">
            <div>
              <h5>age group:</h5>
              <p>5-12</p>
            </div>
            <div>
              <h5>website:</h5>
              <p>Team Website</p>
            </div>
            <div>
              <h5>level:</h5>
              <p>beginner</p>
            </div>
            <div>
              <h5>contact info:</h5>
              <p>123-567-3123</p>
            </div>
          </div>

          <Link className="btn">view more info</Link>

          <div className="teaminfo__bottom">
            <h4>
              would you like to speak to a <br />
              <span>basketball concierge</span>?
            </h4>

            <Button text="speak to concierge" varient="login" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfoPopUp;
