// img
import { useRef, useState } from "react";
import rightArrow from "../../assets/icons/rightArrow.svg";

const SearchSlider = ({ title, children }) => {
  const sliderRef = useRef();

  const [slide, setSlide] = useState(0);
  const [totalSlide, setTotalSlide] = useState(null);
  // handling next slide
  const handleNext = () => {
    // total slides
    setTotalSlide(sliderRef.current.children.length);
    setSlide((prev) => prev + 1);

    // const curLength = slide * 370;
    // const totalLength = totalSlide * 370;

    // if (curLength > totalLength) {
    //   console.log("done");
    // }

    // console.log(totalLength);

    // console.log(sliderLength);
  };

  // handling prev slide
  const handlePrev = () => {
    setSlide((prev) => prev - 1);
  };

  return (
    <div className="searchrResult__main--sliders">
      <h4>{title}</h4>
      <div className="searchrResult__slider">
        <div
          style={{
            transform: `translateX(-${slide * 370}px)`,
          }}
          className="searchrResult__slider--track"
          ref={sliderRef}
        >
          {children}
        </div>
      </div>

      <div
        className={`slider__arrow right ${
          totalSlide - 1 === slide ? "hide" : ""
        }`}
        onClick={handleNext}
      >
        <img src={rightArrow} alt="rightArrow" />
      </div>
      <div
        className={`slider__arrow left ${slide === 0 ? "hide" : ""}`}
        onClick={handlePrev}
      >
        <img src={rightArrow} alt="rightArrow" />
      </div>
    </div>
  );
};

export default SearchSlider;
