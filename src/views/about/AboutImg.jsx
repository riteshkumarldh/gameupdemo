// img
import img1 from "../../assets/images/aboutImg1.png";
import img2 from "../../assets/images/aboutImg2.png";
import img3 from "../../assets/images/aboutImg3.png";

const AboutImg = () => {
  return (
    <div className="about__content--right">
      <figure>
        <img src={img1} alt="img1" />
      </figure>
      <figure>
        <img src={img2} alt="img2" />
      </figure>
      <figure>
        <img src={img3} alt="img3" />
      </figure>
    </div>
  );
};

export default AboutImg;
