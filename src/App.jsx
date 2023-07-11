import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Search from "./views/search/Search";
import About from "./views/about/About";
import Searchresult from "./views/searchresult/Searchresult";
import BasketballConcierge from "./views/basketballConcierge/BasketballConcierge";
import User from "./views/user/User";
import UserSettings from "./views/userSettings/UserSettings";
import AdminSettings from "./views/adminSettings/AdminSettings";
import GymTrainer from "./views/gymTrainer/GymTrainer";
import TeamPage from "./views/teampage/TeamPage";
import ChatWithUs from "./views/chatwithus/ChatWithUs";
import ErrorPage from "./views/errorPage/ErrorPage";

// components
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/basketballconcierge"
            element={<BasketballConcierge />}
          />
          <Route path="/searchresult" element={<Searchresult />} />
          <Route path="/user" element={<User />} />
          <Route path="/usersettings" element={<UserSettings />} />
          <Route path="/adminsettings" element={<AdminSettings />} />
          <Route path="/gymtrainer" element={<GymTrainer />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/chatwithus" element={<ChatWithUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
