// css
import "./basketballConcierge.css";

// components
import ImageCards from "./ImageCards";
import BlackCard from "./BlackCard";
import HowWorks from "./HowWorks";
import CtaSection from "./CtaSection";
import Footer from "../../components/footer/Footer";
import RegisterPopup from "../../components/registerModal/RegisterPopup";
import { useState } from "react";

const BasketballConcierge = () => {
  const [registerModal, setRegisterModal] = useState(false);
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact__top">
            <h1>Get in touch with a basketball concierge</h1>
            <button onClick={() => setRegisterModal(true)} type="button">
              sPEAK TO cONCIERGE
            </button>
          </div>

          <ImageCards />

          <BlackCard />
        </div>
      </section>
      <RegisterPopup
        registerModal={registerModal}
        setRegisterModal={setRegisterModal}
      />

      <HowWorks />
      <CtaSection setRegisterModal={setRegisterModal} />
      <Footer varient="transparent" />
    </>
  );
};

export default BasketballConcierge;
