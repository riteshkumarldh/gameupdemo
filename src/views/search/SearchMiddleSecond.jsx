import { Link } from "react-router-dom";

const SearchMiddleSecond = ({ setRenderComponent }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setRenderComponent(true);
  };

  return (
    <div className="search__middle second">
      <p>
        Join the 30,000+ other ballers in New York who are using GameUp to find
        their perfect basketball match, connect with a basketball concierge, and
        book a workout session with a trainer!
      </p>

      <form onSubmit={handleSubmit}>
        <input
          className="inputbox"
          type="email"
          placeholder="Enter your email address*"
          required
        />
        <button className="btn primary__btn" type="submit">
          Let`s go
        </button>
      </form>

      <div className="second__info">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
        <p>OR</p>
        <Link to="/register">create an account</Link>
      </div>
    </div>
  );
};

export default SearchMiddleSecond;
