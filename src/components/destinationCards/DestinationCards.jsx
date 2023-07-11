import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// css
import "./destinationCards.css";

// img
import cardImg1 from "../../assets/images/cardImg1.png";
import cardImg2 from "../../assets/images/cardImg2.png";
import cardImg3 from "../../assets/images/cardImg3.png";
import cardImg4 from "../../assets/images/cardImg4.png";
import RegisterPopup from "../registerModal/RegisterPopup";
import CalendlyPopUp from "../calendlyPopup/CalendlyPopUp";
import { UserContext } from "../../context/UserContext";

const cardsData = [
  {
    id: 1,
    title: "Get in touch with a basketball concierge",
    description:
      "Get in touch with a basketball concierge for one-on-one access with Game Up's knowledgeable staff!",
    button: "learn more",
    image: cardImg1,
  },
  {
    id: 2,
    title: "Schedule workout with a GameUp trainer",
    description:
      "Book an appointment to have a registered GameUp trainer assess your child’s basketball level.",
    button: "schedule workout",
    image: cardImg2,
  },
  {
    id: 3,
    title: "register here to become a gameup trainer",
    description:
      "Want to appear in the search listing? Register here to become a Game Up trainer.",
    button: "Register now",
    image: cardImg3,
  },
  {
    id: 4,
    title: "Add your team to the GameUp directory",
    description:
      "Get in touch with a basketball concierge for one-on-one access with Game Up's knowledgeable staff.",
    button: "Add a team",
    image: cardImg4,
  },
];

const DestinationCards = ({ page }) => {
  // getting user from context
  const { user } = useContext(UserContext);
  const [registerModal, setRegisterModal] = useState(false);
  const [calendlyPopUp, setCalendlyPopUp] = useState(false);

  // navigate
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id === 1) {
      user === false
        ? navigate("/basketballconcierge")
        : setCalendlyPopUp(true);
    } else if (id === 2) {
      user === false ? setRegisterModal(true) : setCalendlyPopUp(true);
    } else if (id === 3) {
      user === false ? setRegisterModal(true) : navigate("/gymtrainer");
    } else if (id === 4) {
      user === false ? setRegisterModal(true) : navigate("/team");
    }
  };

  // generating cards
  const singleCard = cardsData.map((card) => {
    return (
      <div
        key={card.id}
        className={`card__content ${
          page === "searchresult" ? "searchPage" : null
        }`}
        style={{
          backgroundImage: `url(${card.image})`,
        }}
      >
        <div>
          <h3>{card.title}</h3>

          <p>{card.description}</p>
        </div>

        <button
          type="button"
          className="card__btn"
          onClick={() => handleClick(card.id)}
        >
          {card.button}
        </button>
      </div>
    );
  });

  return (
    <>
      <div
        className={`destination__title ${
          page === "searchresult"
            ? "searchPageTitle"
            : page === "user"
            ? "user"
            : null
        }`}
      >
        <p>gameup:</p>
        <span>your youth basketball destination</span>
      </div>
      <div className="destination__cards">{singleCard}</div>

      <RegisterPopup
        registerModal={registerModal}
        setRegisterModal={setRegisterModal}
      />
      <CalendlyPopUp
        calendlyPopUp={calendlyPopUp}
        setCalendlyPopUp={setCalendlyPopUp}
      />
    </>
  );
};

export default DestinationCards;
