// img
import cancelIcon from "../../assets/icons/cancel.svg";
import userIcon from "../../assets/icons/trainerUser.svg";

const CoachEditModal = ({ setCoachEdit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setCoachEdit(false);
  };

  return (
    <div className="edit__modal">
      <div
        className="edit__modal--overlay"
        onClick={() => setCoachEdit(false)}
      ></div>

      <div className="coach__edit">
        <figure className="edit__cancel" onClick={() => setCoachEdit(false)}>
          <img src={cancelIcon} alt="cancel" />
        </figure>

        <div className="coachedit__content teamEdit__popup--content">
          <h2>add a coach</h2>

          <form onSubmit={handleSubmit}>
            <div className="teamEdit__upload">
              <figure>
                <img src={userIcon} alt="teamEdit" />
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

            <div className="coachedit__inputs">
              <div>
                <label htmlFor="teamName" className="inputlabel">
                  Name
                </label>

                <input
                  placeholder="First and Last Name"
                  type="text"
                  name="teamName"
                  id="teamName"
                  className="inputbox"
                  // value={teamName}
                  // onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="teamName" className="inputlabel">
                  Email Addrss
                </label>

                <input
                  placeholder="example@email.com"
                  type="text"
                  name="teamName"
                  id="teamName"
                  className="inputbox"
                  // value={teamName}
                  // onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="teamName" className="inputlabel">
                  Cost of Training
                </label>

                <div className="training__cost">
                  <input
                    type="text"
                    name="teamName"
                    id="teamName"
                    className="inputbox"
                    // value={teamName}
                    // onChange={(e) => setTeamName(e.target.value)}
                  />
                  <p className="before">$</p>
                  <p className="after">/hour</p>
                </div>
              </div>
              <div>
                <label htmlFor="teamName" className="inputlabel">
                  GameUp Username
                </label>

                <div className="gameup__username">
                  <input
                    type="text"
                    name="teamName"
                    id="teamName"
                    className="inputbox"
                    // value={teamName}
                    // onChange={(e) => setTeamName(e.target.value)}
                  />
                  <p className="before">@</p>
                </div>
              </div>
            </div>

            <div className="coachedit__btns">
              <button type="submit" className="btn primary__btn">
                update team
              </button>
              <button
                onClick={() => setCoachEdit(false)}
                type="button"
                className="btn cancel__btn"
                // onClick={() => setTeamEdit(false)}
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

export default CoachEditModal;
