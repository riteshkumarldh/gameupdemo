import { useState } from "react";
import cancelIcon from "../../assets/icons/cancel.svg";

import teamEditImg from "../../assets/images/teamEdit.png";

const TeamEditModal = ({ setTeamEdit }) => {
  const [teamName, setTeamName] = useState("Riverside Hawks");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTeamEdit(false);
  };
  return (
    <div className="edit__modal">
      <div
        className="edit__modal--overlay"
        onClick={() => setTeamEdit(false)}
      ></div>

      <div className="teamEdit__popup">
        <figure className="edit__cancel" onClick={() => setTeamEdit(false)}>
          <img src={cancelIcon} alt="cancel" />
        </figure>

        <div className="teamEdit__popup--content">
          <h2>EDIT TEAM</h2>

          <form onSubmit={handleSubmit}>
            <div className="teamEdit__upload">
              <figure>
                <img src={teamEditImg} alt="teamEdit" />
              </figure>

              <div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="fileInput"
                />
                <label htmlFor="file">upload banner image</label>
                <h4>remove</h4>
              </div>
            </div>

            <div className="teamedit__name">
              <label htmlFor="teamName" className="inputlabel">
                Team Name
              </label>

              <input
                type="text"
                name="teamName"
                id="teamName"
                className="inputbox"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>

            <div className="teamedit__btns">
              <button type="submit" className="btn primary__btn">
                update team
              </button>
              <button
                type="button"
                className="btn cancel__btn"
                onClick={() => setTeamEdit(false)}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeamEditModal;
