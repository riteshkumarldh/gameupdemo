// component
import { useContext, useRef, useState } from "react";
import Footer from "../../components/footer/Footer";
// css
import "./chatWithUs.css";
import { UserContext } from "../../context/UserContext";
import Button from "../../components/button/Button";

// img
import sendButton from "../../assets/icons/sendButton.svg";
import Avatar from "../../components/avatar/Avatar";
import logo from "../../assets/icons/GU Symbol.svg";
import RenderedChats from "../../components/chatbot/RenderedChats";

const ChatWithUs = () => {
  const { user } = useContext(UserContext);

  const viewRef = useRef();

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
      viewRef.current.scrollIntoView();
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
      viewRef.current.scrollIntoView();
    }, 2000);

    viewRef.current.scrollIntoView();
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
    <>
      <section className="chatWithUs">
        <div className="chatWithUs__header">
          <div className="chatWithUs__header--content">
            <h1>Chat with gameup</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur. Eu nibh tempor vel aenean
              tincidunt. Eleifend nisl purus euismod egestas nisl.
            </p>
          </div>

          {!user && (
            <div className="chatWithUs__header--btn">
              <Button text="log in" varient="login" redirect="/login" />
              <Button
                text="create an account"
                varient="register"
                redirect="/register"
              />
            </div>
          )}
        </div>

        <div className="chatWithUs__chatbox">
          {/* rendering all chats here */}
          <div className="chatWithUs__chatbox--messages">
            <RenderedChats renderChats={renderChats} />
            <div className="chatWithUs__chatbox--btns">
              <Button text="contact us" varient="login" redirect="/" />
              <Button
                text="How do I register to be a trainer?"
                varient="login"
                redirect="/"
              />
            </div>
            <div ref={viewRef}></div>
          </div>
          <form className="chatWithUs__chatbox--form" onSubmit={handleSubmit}>
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
      </section>

      <Footer />
    </>
  );
};

export default ChatWithUs;
