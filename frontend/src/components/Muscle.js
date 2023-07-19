import { Link } from "react-router-dom";

const Muscle = (props) => {
  return (
    <div className="muscle-card">
      <Link
        to={`/${props.name.toLowerCase()}`}
        onClick={() =>
          props.getFilteredExercises(
            props.name.toLowerCase(),
            props.getActiveMuscle(props.name)
          )
        }
      >
        <img className="muscle-img" src={props.img} alt={props.name} />
        <h3 className="muscle-name">{props.name}</h3>
      </Link>
    </div>
  );
};

export default Muscle;
