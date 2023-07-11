import { Link } from "react-router-dom";
// component
import Avatar from "../avatar/Avatar";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const UserAvatar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { setUser } = useContext(UserContext);
  return (
    <div
      className="user__profile"
      onClick={() => setShowOptions((prev) => !prev)}
    >
      <Avatar setShowOptions={setShowOptions} />

      <ul
        className={`user__profile--options ${
          showOptions === true ? "show" : null
        }`}
      >
        <li>
          <Link to="/user">My Profile</Link>
        </li>
        <li>
          <Link to="/usersettings">Account Settings</Link>
        </li>
        <li>
          <Link onClick={() => setUser(false)} to="/">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserAvatar;
