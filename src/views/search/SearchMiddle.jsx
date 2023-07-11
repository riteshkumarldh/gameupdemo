import { useState } from "react";
// img
import arrow from "../../assets/icons/arrow.svg";
import { useNavigate } from "react-router-dom";

const SearchMiddle = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searchresult");
  };

  return (
    <div className="search__middle">
      <div className="search__middle--top">
        <h3>Find</h3>
        <div className="query__box">
          <div className="query" onClick={() => setOpen((prev) => !prev)}>
            <h3>TEAM</h3>
            <img src={arrow} alt="arrow" />
          </div>
          <div className={`options ${open === true ? "active" : null}`}>
            <div>
              <h2>Team A</h2>
            </div>
            <div>
              <h2>Team B</h2>
            </div>
            <div>
              <h2>Team C</h2>
            </div>
          </div>
        </div>
      </div>
      <form className="search__middle--bottom" onSubmit={handleSubmit}>
        <div className="search__middle--inputs">
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender">
              <option>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
          </div>
        </div>

        <div className="search__middle--button">
          <button type="submit">start search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchMiddle;
