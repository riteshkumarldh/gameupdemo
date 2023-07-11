// components
import Footer from "../../components/footer/Footer";
// CSS
import "./home.css";
import HeroSlider from "./HeroSlider";
import Button from "../../components/button/Button";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="home__left">
            <h1>
              Find the <br /> <span>Best team</span> for your child
            </h1>

            <p>
              GameUp helps connect your child to the BEST basketball team,
              program, and trainer based on their age, skillset, goals and
              location.
            </p>

            <Button redirect="/search" varient="home" text="get started" />
          </div>
          {/* <div className="home__right"></div> */}
        </div>
        <div className="hero__slider">
          <HeroSlider />
        </div>
        <Footer varient="home" />
      </section>
    </>
  );
};

export default Home;
