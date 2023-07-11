// img
import addressIcon from "../../assets/icons/Address.svg";
import emailIcon from "../../assets/icons/email.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import socialIcon from "../../assets/icons/social.svg";
import linkIcon from "../../assets/icons/link.svg";
import timeIcon from "../../assets/icons/time.svg";

const TeamPageLeftEdit = ({ setEditMode, setDataForm, dataForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleChange = (e) => {
    setDataForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className="teamPage__content--left" onSubmit={handleSubmit}>
      <div className="content__wrapper">
        <img src={addressIcon} alt="addressIcon" />
        <textarea
          value={dataForm.address}
          onChange={handleChange}
          className="inputbox"
          name="address"
        ></textarea>
      </div>
      <div className="content__wrapper">
        <img src={emailIcon} alt="emailIcon" />
        <input
          value={dataForm.email}
          onChange={handleChange}
          name="email"
          className="inputbox"
          type="email"
        />
      </div>
      <div className="content__wrapper">
        <img src={phoneIcon} alt="phoneIcon" />
        <input
          value={dataForm.phone}
          onChange={handleChange}
          name="phone"
          className="inputbox"
          type="text"
        />
      </div>
      <div className="content__wrapper">
        <img src={socialIcon} alt="socialIcon" />
        <input
          value={dataForm.social}
          onChange={handleChange}
          name="social"
          className="inputbox"
          type="text"
        />
      </div>
      <div className="content__wrapper">
        <img src={linkIcon} alt="linkIcon" />
        <input
          value={dataForm.link}
          onChange={handleChange}
          name="link"
          className="inputbox"
          type="text"
        />
      </div>
      <div className="content__wrapper">
        <img src={timeIcon} alt="timeicon" />
        <input
          value={dataForm.timing}
          onChange={handleChange}
          className="inputbox"
          type="text"
          name="timing"
        />
      </div>

      <div className="edit__btns">
        <button type="submit" className="btn primary__btn">
          save
        </button>
        <button
          type="button"
          className="btn cancel__btn"
          onClick={() => setEditMode(false)}
        >
          cancel
        </button>
      </div>
    </form>
  );
};

export default TeamPageLeftEdit;
