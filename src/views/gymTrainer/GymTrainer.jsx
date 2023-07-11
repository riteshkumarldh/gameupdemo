// component
import ChatBot from "../../components/chatbot/ChatBot";
import Footer from "../../components/footer/Footer";
// css
import "./gymTrainer.css";
// img
import trainerUser from "../../assets/icons/trainerUser.svg";
import { useNavigate } from "react-router-dom";

const GymTrainer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user");
  };

  return (
    <>
      <section className="gymTrainer">
        <div className="gymTrainer__top">
          <h1>Register here to become a Gameup trainer</h1>
        </div>

        <form className="trainer__form" onSubmit={handleSubmit}>
          <div className="form">
            <div className="input__wrapper uploader">
              <figure>
                <img src={trainerUser} alt="gymTRainer" />
              </figure>

              <div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="fileInput"
                />
                <label htmlFor="file">upload profile image</label>
                <h4>remove</h4>
              </div>
            </div>

            <div className="input__wrapper">
              <label className="inputlabel" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="inputbox"
                placeholder="First and Last Name"
              />
            </div>
            <div className="input__wrapper">
              <label className="inputlabel" htmlFor="name">
                Your Location
              </label>
              <input
                type="text"
                id="name"
                className="inputbox"
                placeholder="San Antonio, TX"
              />
            </div>
            <div className="input__wrapper">
              <label className="inputlabel" htmlFor="name">
                Your email
              </label>
              <input
                type="text"
                id="name"
                className="inputbox"
                placeholder="example@email.com"
              />
            </div>
            <div className="input__wrapper">
              <label className="inputlabel" htmlFor="name">
                Your Phone number
              </label>
              <input
                type="text"
                id="name"
                className="inputbox"
                placeholder="(123) 456-7890"
              />
            </div>
            <div className="input__wrapper">
              <label className="inputlabel" htmlFor="name">
                Social media handles
              </label>
              <input
                type="text"
                id="name"
                className="inputbox"
                placeholder="ex: Twitter: @cooltrainer1"
              />
            </div>
            <div className="input__wrapper">
              <label className="inputlabel" htmlFor="name">
                Age group you train
              </label>
              <select name="" id="" className="inputbox">
                <option>Select</option>
                <option value="5-12">5-12</option>
                <option value="5-12">5-12</option>
                <option value="5-12">5-12</option>
              </select>
            </div>
            <div className="input__wrapper">
              <label className="inputlabel" htmlFor="name">
                Link to website/instagram
              </label>
              <input
                type="text"
                id="name"
                className="inputbox"
                placeholder="ex: http://instagram.com/bbaill"
              />
            </div>
            <div className="input__wrapper">
              <label className="inputlabel" htmlFor="name">
                Relevant Experience
              </label>
              <textarea
                className="inputbox"
                name=""
                placeholder="Enter Relevant Experience here"
              ></textarea>
            </div>
            <div className="input__wrapper">
              <label className="inputlabel" htmlFor="name">
                References
              </label>
              <input type="text" id="name" className="inputbox" />
            </div>
          </div>

          <div className="form__btns">
            <button onClick={handleClick} type="button" className="btn">
              cancel
            </button>
            <button type="submit" className="btn primary__btn">
              let`s go
            </button>
          </div>
        </form>
      </section>

      <Footer />
      <ChatBot />
    </>
  );
};

export default GymTrainer;
