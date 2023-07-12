import { Link } from "react-router-dom";

const Exercise = (props) => {
  return (
    <div className="muscle-card">
      <Link to={props.name} onClick={() => props.getActiveMuscle(props.name)}>
        <h3>{props.name}</h3>
      </Link>
    </div>
  );
};

export default Exercise;
