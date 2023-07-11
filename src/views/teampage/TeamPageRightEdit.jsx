// img
import coach1 from "../../assets/images/coach1.png";
import coach2 from "../../assets/images/coach2.png";
import addIcon from "../../assets/icons/add.svg";

const TeamPageRightEdit = ({ setCoachEdit, teamForm, setTeamForm }) => {
  // handling form onchange of input
  const handleChange = (e) => {
    setTeamForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="teamPage__content--right">
      <div className="teamPage__content--description">
        <textarea
          name="description"
          id="description"
          value={teamForm.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="teamPage__right--details">
        <div>
          <h4>difficulty</h4>
          <select
            name="difficulty"
            id=""
            value={teamForm.difficulty}
            onChange={handleChange}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value="Hard1">Hard1</option>
            <option value="Hard2">Hard2</option>
          </select>
        </div>

        <div>
          <h4>gender:</h4>
          <select
            name="gender"
            id=""
            value={teamForm.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <h4>Age Range:</h4>
          <input
            value={teamForm.age}
            onChange={handleChange}
            type="text"
            name="age"
            id="age"
          />
        </div>
        <div>
          <h4>Team Type:</h4>
          <select
            name="teamtype"
            id=""
            value={teamForm.teamtype}
            onChange={handleChange}
          >
            <option value="AAU Travel Team">AAU Travel Team</option>
            <option value="AAU Travel Team">AAU Travel Team</option>
            <option value="AAU Travel Team">AAU Travel Team</option>
          </select>
        </div>
        <div>
          <h4>League:</h4>
          <input
            value={teamForm.league}
            onChange={handleChange}
            type="text"
            name="league"
            id="league"
          />
        </div>
        <div>
          <h4>BasketBall only:</h4>
          <select
            name="isbasketball"
            value={teamForm.isbasketball}
            onChange={handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <h4>tryouts:</h4>
          <textarea
            value={teamForm.tryouts}
            onChange={handleChange}
            name="tryouts"
          ></textarea>
        </div>

        <div>
          <h4>gym space:</h4>
          <input
            value={teamForm.gymspace}
            onChange={handleChange}
            type="text"
            name="gymspace"
          />
        </div>

        <div>
          <h4>Team cost:</h4>
          <input
            value={teamForm.cost}
            onChange={handleChange}
            type="text"
            name="cost"
          />
        </div>

        <div>
          <h4>coaches:</h4>

          <div className="coaches__container">
            <div className="coaches">
              <div className="coach">
                <figure>
                  <img src={coach1} alt="coach1" />
                </figure>
                <div className="coach__details">
                  <h4>Nick doe</h4>
                  <p>cost of training: $75/hr</p>
                  <p>email@address.com</p>
                  <p>
                    <b>@coah.nick</b>
                  </p>

                  <div>
                    <button className="btn" onClick={() => setCoachEdit(true)}>
                      Edit
                    </button>
                    <button className="btn">Delete</button>
                  </div>
                </div>
              </div>
              <div className="coach">
                <figure>
                  <img src={coach2} alt="coach2" />
                </figure>

                <div className="coach__details">
                  <h4>Nick doe</h4>
                  <p>cost of training: $75/hr</p>
                  <p>email@address.com</p>
                  <p>
                    <b>@coah.nick</b>
                  </p>

                  <div>
                    <button className="btn" onClick={() => setCoachEdit(true)}>
                      Edit
                    </button>
                    <button className="btn">Delete</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="addCoach">
              <figure onClick={() => setCoachEdit(true)}>
                <img src={addIcon} alt="addIcon" />
              </figure>
              <h4>Add a coach</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPageRightEdit;
