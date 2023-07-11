// img
import img1 from "../../assets/images/contactImg1.png";
import img2 from "../../assets/images/contactImg2.png";
import img3 from "../../assets/images/contactImg3.png";
import img4 from "../../assets/images/contactImg4.png";

const ImageCards = () => {
  return (
    <div className="contact__img">
      <figure>
        <img src={img1} alt="image1" />
      </figure>
      <figure>
        <img src={img2} alt="image2" />
      </figure>
      <figure>
        <img src={img3} alt="image3" />
      </figure>
      <figure>
        <img src={img4} alt="image4" />
      </figure>
    </div>
  );
};

export default ImageCards;
