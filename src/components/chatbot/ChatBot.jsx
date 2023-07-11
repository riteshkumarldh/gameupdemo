import { useState } from "react";
// css
import "./chatBot.css";
// chat icon
import chatIcon from "../../assets/icons/chat.svg";
import windowIcon from "../../assets/icons/windowIcon.svg";
import cancelIcon from "../../assets/icons/cross.svg";
import sendButton from "../../assets/icons/sendButton.svg";
// import user from "../../assets/icons/user.svg";
import logo from "../../assets/icons/GU Symbol.svg";
import Avatar from "../avatar/Avatar";
import { useNavigate } from "react-router-dom";
import RenderedChats from "./RenderedChats";

const ChatBot = () => {
  const navigate = useNavigate();
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  // state to hold the user typed message
  const [message, setMessage] = useState("");
  // rendering all chats from here
  const [chats, setChats] = useState([
    {
      id: 1,
      sender: "How can I add a team to the search directory?",
      bot: "",
    },
    {
      id: 2,
      sender: "",
      bot: "Hey, there! Welcome to GameUp! How can we help you?",
    },
  ]);

  // this function will run on submit of chatbox form
  const handleSubmit = (e) => {
    e.preventDefault();
    setChats((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: message,
        bot: "",
      },
    ]);
    setMessage("");

    setTimeout(() => {
      setChats((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "",
          bot: "Hi There Thanks for Contacting",
        },
      ]);
    }, 1000);
    setTimeout(() => {
      setChats((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: "",
          bot: "This is a Demo message",
        },
      ]);
    }, 2000);
  };

  // Displaying the chats
  const renderChats = chats.map((chat) => {
    return chat.bot === "" ? (
      <div key={chat.id} className="sender messages__container">
        <div className="sender__message message">
          <p>{chat.sender}</p>
        </div>
        <Avatar />
      </div>
    ) : (
      <div key={chat.id} className="bot messages__container">
        <div className="bot__message message">
          <p>{chat.bot}</p>
        </div>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </div>
    );
  });

  return (
    <div className="chat">
      <div
        className="chatIcon"
        onClick={() => setIsChatBoxOpen((prev) => !prev)}
      >
        <figure>
          <img src={chatIcon} alt="chatIcon" />
        </figure>
      </div>

      <div className={`chatBox ${isChatBoxOpen === true ? "show" : null}`}>
        <div className="chatBox__header">
          <div className="chatBox__header--left">
            <h4>chat with GameUp</h4>
          </div>
          <div className="chatBox__header--right">
            <figure onClick={() => navigate("/chatwithus")}>
              <img src={windowIcon} alt="window" />
            </figure>
            <figure onClick={() => setIsChatBoxOpen(false)}>
              <img src={cancelIcon} alt="cancelIcon" />
            </figure>
          </div>
        </div>

        {/* rendering all chats here */}
        <RenderedChats renderChats={renderChats} />

        <form className="messageBox" onSubmit={handleSubmit}>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Enter your query"
          />
          <button type="submit">
            <img src={sendButton} alt="sendbutton" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
