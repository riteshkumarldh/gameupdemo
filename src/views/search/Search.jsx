import { useState } from "react";
// css
import "./search.css";

// component
import Footer from "../../components/footer/Footer";
import ChatBot from "../../components/chatbot/ChatBot";
import SearchTop from "./SearchTop";
import SearchMiddle from "./SearchMiddle";
import SearchBottom from "./SearchBottom";
import SearchMiddleSecond from "./SearchMiddleSecond";

const Search = () => {
  const [renderComponent, setRenderComponent] = useState(false);

  return (
    <>
      <main className="search">
        <div className="search__container">
          {renderComponent ? (
            <>
              <SearchTop text1="ready to get your " text2="baller matched?" />
              <SearchMiddle setRenderComponent={setRenderComponent} />
            </>
          ) : (
            <>
              <SearchTop
                text1="make gameup your Youth"
                text2="Basketball destination"
              />
              <SearchMiddleSecond setRenderComponent={setRenderComponent} />
            </>
          )}

          <SearchBottom />
        </div>
      </main>

      <ChatBot />

      <Footer varient="search" />
    </>
  );
};

export default Search;
