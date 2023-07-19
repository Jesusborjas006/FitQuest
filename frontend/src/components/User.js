import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <div className="user-card" onClick={() => props.getActiveUser(props.id)}>
      <Link to="/home">
        <img id="user-img" src={props.img} alt={props.name} />
        <p className="user-name">{props.name}</p>
      </Link>
    </div>
  );
};

export default User;
