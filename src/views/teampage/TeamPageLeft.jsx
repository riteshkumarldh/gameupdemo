// img
import addressIcon from "../../assets/icons/Address.svg";
import emailIcon from "../../assets/icons/email.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import socialIcon from "../../assets/icons/social.svg";
import linkIcon from "../../assets/icons/link.svg";
import timeIcon from "../../assets/icons/time.svg";
import pencilIcon from "../../assets/icons/pencil.svg";

const TeamPageLeft = ({ setEditMode }) => {
  return (
    <div className="teamPage__content--left">
      <div className="content__wrapper">
        <img src={addressIcon} alt="addressIcon" />
        <p>
          123 Street Name <br /> City, ST 01234
        </p>
      </div>
      <div className="content__wrapper">
        <img src={emailIcon} alt="emailIcon" />
        <p>email@address.com</p>
      </div>
      <div className="content__wrapper">
        <img src={phoneIcon} alt="phoneIcon" />
        <p>(555) 555-555</p>
      </div>
      <div className="content__wrapper">
        <img src={socialIcon} alt="socialIcon" />
        <p>
          Facebook <br /> Instagram
        </p>
      </div>
      <div className="content__wrapper">
        <img src={linkIcon} alt="linkIcon" />
        <p>websiteaddress.com</p>
      </div>
      <div className="content__wrapper">
        <img src={timeIcon} alt="timeicon" />
        <p>Monday - Friday , 5-10pm</p>
      </div>

      <button
        type="button"
        className="btn primary__btn"
        onClick={() => setEditMode(true)}
      >
        <img src={pencilIcon} alt="pencilIcon" />
        <p>edit profile</p>
      </button>
    </div>
  );
};

export default TeamPageLeft;
