import { useRef, useState, useEffect, useCallback } from "react";

// import images
import sliderArrow from "../../assets/icons/sliderArrow.svg";
import quote from "../../assets/icons/quote.svg";

// import contant slider
import { sliders } from "../../constants/constant";

const HeroSlider = () => {
  const sliderRef = useRef();
  const [slider, setSlider] = useState(sliders);
  const [className, setClassName] = useState("");

  //   hero Card slide move on click of swipe button
  const handleSlider = useCallback(() => {
    setClassName("slide");

    const removed = slider[0];

    setTimeout(() => {
      setClassName("");
    }, 500);

    setSlider((prev) =>
      prev.filter((slide) => {
        return slide.id !== removed.id;
      })
    );

    setSlider((prev) => [...prev, removed]);
  }, [slider]);

  const handleSlideAdd = () => {
    const removed = slider[0];
    console.log("hello");
    setSlider((prev) =>
      prev.filter((slide) => {
        return slide.id !== removed.id;
      })
    );

    setSlider((prev) => [...prev, removed]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSlider();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [handleSlider]);

  //   generating slides
  const singleSliders = slider.map((slider) => {
    return (
      <div key={slider.id} className="slider__single">
        <figure>
          <img src={quote} alt="quoteSymbol" />
        </figure>

        <p className="description">{slider.description}</p>

        <p className="name">{slider.name}</p>
      </div>
    );
  });

  return (
    <>
      <button type="button" className="slider__btn" onClick={handleSlider}>
        <span>SWIPE</span>
        <img src={sliderArrow} alt="sliderArrow" />
      </button>

      <div className="slider">
        <div
          className={`slider__track ${className}`}
          ref={sliderRef}
          onTransitionEnd={handleSlideAdd}
        >
          {singleSliders}
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
