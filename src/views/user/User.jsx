// css
import "./user.css";
// img
import starIcon from "../../assets/icons/star.svg";
// component
import ChatBot from "../../components/chatbot/ChatBot";
import DestinationCards from "../../components/destinationCards/DestinationCards";
import Footer from "../../components/footer/Footer";
import PageHeading from "../../components/pageHeading/PageHeading";
import SearchCard from "../searchresult/SearchCard";
import TeamInfoPopUp from "../../components/teamInfoPopUp/TeamInfoPopUp";
import { useState } from "react";
import SearchSlider from "../searchresult/SearchSlider";

const User = () => {
  const [teamPopUp, setTeamPopUp] = useState(false);

  return (
    <>
      <div className="user">
        <PageHeading
          heading="welcome back,"
          heading2="playername!"
          other="true"
        />

        <div className="container user__container">
          <DestinationCards page="user" />

          <div className="user__recommendations">
            <div className="recommendations__top">
              <figure>
                <img src={starIcon} alt="starIcon" />
              </figure>
              <h2>recommendations</h2>
            </div>

            <div className="recommendations__slider">
              <SearchSlider title="PRE-SCHOOL PROGRAMS">
                <SearchCard setTeamPopUp={setTeamPopUp} />
                <SearchCard setTeamPopUp={setTeamPopUp} />
                <SearchCard setTeamPopUp={setTeamPopUp} />
              </SearchSlider>
            </div>

            {/* <div className="recommendations__slider"> */}
            <SearchSlider title="Development program">
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
            </SearchSlider>
            {/* </div> */}

            <div className="recommendations__slider">
              <h4>Basketball facilities </h4>
            </div>
            <div className="recommendations__slider">
              <h4>aau teams </h4>
            </div>
            <div className="recommendations__slider">
              <h4>summer camps </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer varient="transparent" />
      <ChatBot />
      <TeamInfoPopUp teamPopUp={teamPopUp} setTeamPopUp={setTeamPopUp} />
    </>
  );
};

export default User;
