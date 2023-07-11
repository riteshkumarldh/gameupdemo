// css
import "./userSettings.css";

// component
import ChatBot from "../../components/chatbot/ChatBot";
import DestinationCards from "../../components/destinationCards/DestinationCards";
import Footer from "../../components/footer/Footer";
import PageHeading from "../../components/pageHeading/PageHeading";
import SearchSettings from "./SearchSettings";
import HistorySettings from "./HistorySettings";
import Settings from "./Settings";

const UserSettings = () => {
  return (
    <>
      <PageHeading heading="account settings" varient="small" />
      <section className="settings">
        <div className="container">
          <div className="settings__container">
            <Settings />
            <SearchSettings />
            <HistorySettings />
          </div>

          <DestinationCards page="searchresult" />
        </div>
      </section>
      <ChatBot />
      <Footer varient="transparent" />
    </>
  );
};

export default UserSettings;
