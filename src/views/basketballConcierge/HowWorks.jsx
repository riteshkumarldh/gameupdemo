const howWorkdData = [
  {
    id: 1,
    step: "step 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Luctus enim adipiscing eros congue. Pretium consectetur morbi lectus id felis phasellus sagittis. Etiam a venenatis donec ut diam nisi mollis egestas tincidunt. Et vel vitae sed lorem cursus.",
  },
  {
    id: 2,
    step: "step 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Luctus enim adipiscing eros congue. Pretium consectetur morbi lectus id felis phasellus sagittis. Etiam a venenatis donec ut diam nisi mollis egestas tincidunt. Et vel vitae sed lorem cursus.",
  },
  {
    id: 3,
    step: "step 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Luctus enim adipiscing eros congue. Pretium consectetur morbi lectus id felis phasellus sagittis. Etiam a venenatis donec ut diam nisi mollis egestas tincidunt. Et vel vitae sed lorem cursus.",
  },
];

const HowWorks = () => {
  const workCards = howWorkdData.map((card) => {
    return (
      <div key={card.id} className="work__bottom--single">
        <div className="number">{card.id}</div>
        <h3>{card.step}</h3>

        <p>{card.description}</p>
      </div>
    );
  });

  return (
    <section className="works container">
      <div className="work__top">
        <h2>How it works</h2>
      </div>
      <div className="work__bottom">{workCards}</div>
    </section>
  );
};

export default HowWorks;
