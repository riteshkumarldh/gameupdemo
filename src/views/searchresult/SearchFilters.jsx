import { Link } from "react-router-dom";
import { useState } from "react";
// img
import backIcon from "../../assets/icons/back.svg";
import saveIcon from "../../assets/icons/save.svg";
import filterIcon from "../../assets/icons/filter.svg";
import crossIcon from "../../assets/icons/cancel.svg";
import arrowDownIcon from "../../assets/icons/arrowDown.svg";
import sortIcon from "../../assets/icons/sort.svg";

const filterOptions = [
  {
    id: 1,
    option: "Male",
  },
  {
    id: 2,
    option: "Female",
  },
  {
    id: 3,
    option: "10 Years old",
  },
  {
    id: 4,
    option: "Queens",
  },
];

const sortingOptions = [
  {
    id: 1,
    option: "Best Match",
  },
  {
    id: 2,
    option: "Distance",
  },
  {
    id: 3,
    option: "Alphabetical A-Z",
  },
  {
    id: 4,
    option: "Alphabetical Z-A",
  },
];

const SearchFilters = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  //   rendering filteroptions
  const renderOptions = filterOptions.map((option) => {
    return (
      <div
        key={option.id}
        className="filters__option"
        onClick={() => handleOptions(option.option)}
      >
        <p>{option.option}</p>
      </div>
    );
  });

  //   rendering selected option
  const renderSelected = selectedFilters.map((option) => {
    return (
      <div key={option.id} className="selected__filter">
        <p>{option.selected}</p>
        <img
          src={crossIcon}
          alt="cross"
          onClick={() => deleteFilters(option.id)}
        />
      </div>
    );
  });

  //   rendering sortingoptions
  const renderSortingOptions = sortingOptions.map((option) => {
    return (
      <div
        key={option.id}
        className="sorting__option"
        onClick={() => setShowSorting(false)}
      >
        <p>{option.option}</p>
      </div>
    );
  });

  //   delete filters
  const deleteFilters = (id) => {
    setSelectedFilters((prev) => prev.filter((option) => option.id !== id));
  };

  //   onclick of option
  const handleOptions = (selectedOption) => {
    setShowFilters(false);
    setSelectedFilters((prev) => [
      ...prev,
      { id: Date.now(), selected: selectedOption },
    ]);
  };
  return (
    <>
      <div className="searchrResult__action">
        <div className="container">
          <Link to="/search">
            <img src={backIcon} alt="backicon" />
            <span>edit search</span>
          </Link>
          <Link to="/login">
            <img src={saveIcon} alt="saveIcon" />
            <span>save this search</span>
          </Link>
        </div>
      </div>

      <div className="searchrResult__filters">
        <div className="container searchrResult__filters--container">
          <div className="searchrResult__filters--left">
            <div
              className="filters"
              onClick={() => {
                setShowFilters((prev) => !prev);
              }}
            >
              <img src={filterIcon} alt="filterIcon" />
              <span>Filters</span>
            </div>

            <div
              className={`filters__options ${
                showFilters === true ? "show" : null
              }`}
            >
              {renderOptions}
            </div>

            <div className="selected__filters">{renderSelected}</div>
          </div>
          <div className="searchrResult__filters--right">
            <div className="sorting">
              <img src={sortIcon} alt="sortIcon" />
              <span>sort</span>
            </div>

            <div className="sorting__box">
              <div
                className="sort"
                onClick={() => setShowSorting((prev) => !prev)}
              >
                <span>Select...</span>
                <img src={arrowDownIcon} alt="arrow" />
              </div>

              <div
                className={`sorting__options ${
                  showSorting === true ? "show" : null
                }`}
              >
                {renderSortingOptions}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilters;
