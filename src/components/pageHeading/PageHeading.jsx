// css
import "./pageHeading.css";
// img
import mapIcon from "../../assets/icons/map.svg";

const PageHeading = ({ heading, varient, heading2, other }) => {
  return (
    <div className={`heading__top ${varient === "small" ? "small" : null}`}>
      <h1>{heading}</h1>
      <h1>{heading2}</h1>
      {other === "true" && (
        <div className="heading__top--content">
          <img src={mapIcon} alt="mapIcon" />
          <p>New York, NY | username@email.com</p>
        </div>
      )}
    </div>
  );
};

export default PageHeading;
