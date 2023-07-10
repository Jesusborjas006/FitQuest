import Avatar from "@mui/material/Avatar";

const User = (props) => {
  return (
      <div className="user-card">
        <Avatar id="user-img" alt={props.name} src={props.img} />
        <p className="user-name">{props.name}</p>
      </div>
  );
};

export default User;
