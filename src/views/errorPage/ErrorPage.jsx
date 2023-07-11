import { Link } from "react-router-dom";
// css
import "./errorPage.css";
import Footer from "../../components/footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <section className="error">
        <h1>This Page is Not Available</h1>
        <Link to="/">Go to Home</Link>
      </section>
      <Footer varient="transparent" />
    </>
  );
};

export default ErrorPage;
