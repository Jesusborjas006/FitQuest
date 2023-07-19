import { Avatar } from "@mui/material";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h1 className="logo">FitQuest</h1>
      <Avatar
        sx={{ cursor: "pointer", width: "50px", height: "50px" }}
        alt={props.activeUser.name}
        src={props.activeUser.image}
      />
    </nav>
  );
};

export default Navbar;
