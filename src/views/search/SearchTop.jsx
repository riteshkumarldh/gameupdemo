const SearchTop = ({ text1, text2 }) => {
  return (
    <div className="search__top">
      <h1>
        {text1} <br /> {text2}
      </h1>

      <p>
        “As a veteran basketball mom, I know first-hand how difficult it is to
        navigate the youth basketball landscape. I created GameUp to help you
        take the guess work out of finding the best program for your child. Make
        GameUp your youth basketball destination!”
      </p>

      <p className="person">Crystal McCrary</p>
    </div>
  );
};

export default SearchTop;
