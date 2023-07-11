// img
import sliderImg from "../../assets/images/sliderImg.png";

const SearchCard = ({ setTeamPopUp }) => {
  return (
    <>
      <div
        className="searchrResult__slider--single"
        onClick={() => setTeamPopUp(true)}
      >
        <div>
          <figure>
            <img src={sliderImg} alt="img" />
          </figure>

          <h5>NAME</h5>

          <p>new york, ny</p>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
