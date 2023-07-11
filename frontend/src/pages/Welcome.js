import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-page">
      <h2>Welcome to FitQuest</h2>
      <Link to="/login">Get Started</Link>
    </div>
  );
};

export default Welcome;
