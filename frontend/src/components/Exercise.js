import { Link } from "react-router-dom";

const Exercise = (props) => {
  return (
    <Link to={`${props.id}`}>
      <div
        className="exercise-card"
        onClick={() => props.getExerciseDetails(props.id)}
      >
        <img alt={props.name} src={props.image} className="exercise-card-img" />
        <h3 className="exercise-name">{props.name}</h3>
      </div>
    </Link>
  );
};

export default Exercise;
