const CtaSection = ({ setRegisterModal }) => {
  return (
    <div className="cta container">
      <h1>ready to get started?</h1>

      <button onClick={() => setRegisterModal(true)} type="button">
        Speak to concierge
      </button>
    </div>
  );
};

export default CtaSection;
