// css
import "./searchresult.css";

// components
import ChatBot from "../../components/chatbot/ChatBot";
import Footer from "../../components/footer/Footer";
import PageHeading from "../../components/pageHeading/PageHeading";
import SearchFilters from "./SearchFilters";

// img
import { useState } from "react";
import DestinationCards from "../../components/destinationCards/DestinationCards";
import SearchCard from "./SearchCard";
import SearchSlider from "./SearchSlider";
import TeamInfoPopUp from "../../components/teamInfoPopUp/TeamInfoPopUp";

const Searchresult = () => {
  const [teamPopUp, setTeamPopUp] = useState(false);

  return (
    <>
      <section className="searchrResult">
        <PageHeading heading="check it out" varient="small" />
        <SearchFilters />

        <div className="searchrResult__main">
          <div className="container">
            <div className="searchrResult__main--top">
              <h2>Here are the teams we found for you!</h2>
            </div>

            <SearchSlider setTeamPopUp={setTeamPopUp} title="manhattan">
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
            </SearchSlider>

            <SearchSlider setTeamPopUp={setTeamPopUp} title="queens">
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
            </SearchSlider>

            <SearchSlider setTeamPopUp={setTeamPopUp} title="Brooklyn">
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
              <SearchCard setTeamPopUp={setTeamPopUp} />
            </SearchSlider>
          </div>
        </div>

        <div className="container">
          <DestinationCards page="searchresult" />
        </div>
      </section>
      <Footer varient="transparent" />
      <ChatBot />
      <TeamInfoPopUp setTeamPopUp={setTeamPopUp} teamPopUp={teamPopUp} />
    </>
  );
};

export default Searchresult;
