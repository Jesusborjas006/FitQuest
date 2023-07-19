import { Link } from "react-router-dom";

const Muscle = (props) => {
  return (
    <div className="muscle-card">
      <Link
        to={`/${props.name}`}
        onClick={() =>
          props.getFilteredExercises(props.name.toLowerCase())
        }
      >
        <h3>{props.name}</h3>
      </Link>
    </div>
  );
};

export default Muscle;
