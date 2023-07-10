import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>FitQuest</h1>
      <Avatar sx={{ cursor: "pointer" }} />
    </nav>
  );
};

export default Navbar;
