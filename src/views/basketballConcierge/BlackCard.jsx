// images
import unionLogo from "../../assets/icons/union.svg";

const BlackCard = () => {
  return (
    <div className="contact__content">
      <div className="contact__content--left">
        <h3> Experience GameUp’s basketball Concierge,</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur. Nunc augue adipiscing eget
          cras et lorem. Et morbi amet turpis tincidunt sed bibendum velit.
        </p>

        <p>
          Tempus accumsan tristique adipiscing nulla urna eu scelerisque.
          Egestas augue condimentum tellus vel. Massa leo nullam enim amet sit
          nunc. Amet ut sagittis amet vulputate nunc ac. Eget enim amet
          habitasse vitae rhoncus.
        </p>

        <p>
          Adipiscing porttitor urna libero enim purus mi libero sed. Pulvinar
          sed viverra mauris nec at aenean elementum eget odio. Neque lorem.
        </p>
      </div>

      <div className="contact__content--right">
        <figure>
          <img src={unionLogo} alt="unionlogo" />
        </figure>
      </div>
    </div>
  );
};

export default BlackCard;
