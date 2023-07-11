// css
import "./about.css";
// component
import Footer from "../../components/footer/Footer";
import PageHeading from "../../components/pageHeading/PageHeading";
import LogoSymbol from "../../components/logoSymbol/LogoSymbol";
import AboutContent from "./AboutContent";
// img
import AboutImg from "./AboutImg";

const About = () => {
  return (
    <>
      <section className="aboutPage">
        <PageHeading heading="about us" />

        <div className=" container">
          <div className="about__content">
            <AboutContent />

            <AboutImg />
          </div>

          <div className="about__content--bottom">
            <LogoSymbol />
            <div className="logo__content">
              <p>Founded by</p>
              <h2>
                Crystal McCrary <br /> & cole anthony{" "}
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Footer varient="transparent" />
    </>
  );
};

export default About;
