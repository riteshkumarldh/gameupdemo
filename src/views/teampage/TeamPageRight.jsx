// img
import coach1 from "../../assets/images/coach1.png";
import coach2 from "../../assets/images/coach2.png";

const TeamPageRight = ({ teamForm }) => {
  return (
    <div className="teamPage__content--right">
      <div className="teamPage__content--description">
        <p>
          Founded in 1776, Lorem ipsum dolor sit amet consectetur. Rutrum
          blandit tortor proin arcu nunc cursus ut nulla. Eu nec platea elit ut
          feugiat. Morbi sit tincidunt massa tempor. Pharetra mauris vel
          accumsan fusce.
        </p>
      </div>

      <div className="teamPage__right--details">
        <div>
          <h4>difficulty</h4>
          <div className={`difficulty`}>
            <div
              className={`dot ${
                teamForm.difficulty === "easy" ? "show" : null
              }`}
            >
              <div>
                <h5>Easy</h5>
              </div>
            </div>
            <div
              className={`dot ${
                teamForm.difficulty === "medium" ? "show" : null
              }`}
            >
              <div>
                <h5>Medium</h5>
              </div>
            </div>
            <div
              className={`dot ${
                teamForm.difficulty === "hard" ? "show" : null
              }`}
            >
              <div>
                <h5>Hard</h5>
              </div>
            </div>
            <div
              className={`dot ${
                teamForm.difficulty === "hard1" ? "show" : null
              }`}
            >
              <div>
                <h5>hard1</h5>
              </div>
            </div>
            <div
              className={`dot ${
                teamForm.difficulty === "hard2" ? "show" : null
              }`}
            >
              <div>
                <h5>hard2</h5>
              </div>
            </div>
            <div
              className={`dot ${
                teamForm.difficulty === "elite" ? "show" : null
              }`}
            >
              <div>
                <h5>Elite</h5>
              </div>
            </div>
            <div
              className={`dot ${
                teamForm.difficulty === "elite2" ? "show" : null
              }`}
            >
              <div>
                <h5>Elite2</h5>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4>gender:</h4>
          <p>Boys</p>
        </div>
        <div>
          <h4>Age Range:</h4>
          <p>5-12</p>
        </div>
        <div>
          <h4>Team Type:</h4>
          <p>AAU Travel Team</p>
        </div>
        <div>
          <h4>League:</h4>
          <p>Nike</p>
        </div>
        <div>
          <h4>BasketBall only:</h4>
          <p>Yes</p>
        </div>
        <div>
          <h4>tryouts:</h4>
          <div>
            <p>
              <b>12/21/23, 8 - 10pm</b>
            </p>
            <p>123 Street Name, City, ST 01234</p>
          </div>
        </div>

        <div>
          <h4>gym space:</h4>
          <p>Scholl Name</p>
        </div>

        <div>
          <h4>Team cost:</h4>
          <p>$200/m</p>
        </div>

        <div>
          <h4>coaches:</h4>

          <div className="coaches">
            <div className="coach">
              <figure>
                <img src={coach1} alt="coach1" />
              </figure>
              <div className="coach__details">
                <h4>Nick doe</h4>
                <p>cost of training: $75/hr</p>
                <p>email@address.com</p>
                <p>
                  <b>@coah.nick</b>
                </p>
              </div>
            </div>
            <div className="coach">
              <figure>
                <img src={coach2} alt="coach2" />
              </figure>

              <div className="coach__details">
                <h4>Nick doe</h4>
                <p>cost of training: $75/hr</p>
                <p>email@address.com</p>
                <p>
                  <b>@coah.nick</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPageRight;
