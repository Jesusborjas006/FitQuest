import { Avatar } from "@mui/material";

const Navbar = (props) => {
  console.log(props)
  return (
    <nav className="navbar">
      <h1>FitQuest</h1>
      <Avatar sx={{ cursor: "pointer" }} alt={props.activeUser.name} src={props.activeUser.image} />
    </nav>
  );
};

export default Navbar;
