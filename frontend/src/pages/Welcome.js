import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-text-container">
        <h2 className="welcome-heading">Welcome to FitQuest</h2>
        <p className="welcome-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link to="/login" className="welcome-link">Get Started</Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1616279969096-54b228f5f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80"
        alt="gym background"
      />
    </div>
  );
};

export default Welcome;
