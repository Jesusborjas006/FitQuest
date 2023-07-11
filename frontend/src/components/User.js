import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <div className="user-card">
      <Link to="/home">
        <Avatar
          id="user-img"
          alt={props.name}
          src={props.img}
          onClick={() => props.getActiveUser(props.id)}
        />
      </Link>
      <p className="user-name">{props.name}</p>
    </div>
  );
};

export default User;
