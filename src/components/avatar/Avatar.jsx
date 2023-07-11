// img
import user from "../../assets/icons/user.svg";

// css
import "./avatar.css";

const Avatar = () => {
  return (
    <figure className="avatar">
      <img src={user} alt="user" />
    </figure>
  );
};

export default Avatar;
