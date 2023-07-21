import Navbar from "../components/Navbar";

const Details = (props) => {

  return (
    <div className="details-page">
      <Navbar activeUser={props.activeUser} />
      <div className="details-container">
        <h2 className="details-heading">{props.exerciseDetails.name}</h2>
        <img
          className="details-img"
          src={props.exerciseDetails.image}
          alt={props.exerciseDetails.name}
        />
        <div className="details-text-container">
          <p className="instructions">
            <strong>Instructions</strong> <br />
            {props.exerciseDetails.instructions}
          </p>
          <div className="muscles-worked-container">
            <p><strong>Muscles Worked</strong></p>
            <p><strong>Primary</strong>: {props.exerciseDetails.primaryTarget.toUpperCase()}</p>
            <p><strong>Secondary</strong>: {props.exerciseDetails.secondaryTarget.join(", ").toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
