// css
import "./adminsettings.css";
// component
import ChatBot from "../../components/chatbot/ChatBot";
import Footer from "../../components/footer/Footer";
import PageHeading from "../../components/pageHeading/PageHeading";
import Settings from "../userSettings/Settings";

const AdminSettings = () => {
  return (
    <>
      <PageHeading varient="small" heading="admin settings" />
      <div className="container admin__settings--container">
        <section className="admin__settings">
          <Settings />
        </section>
      </div>

      <ChatBot />
      <Footer varient="transparent" />
    </>
  );
};

export default AdminSettings;
