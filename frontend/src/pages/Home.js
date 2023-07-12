import ExercisesContainer from "../components/MusclesContainer";
import Navbar from "../components/Navbar";

const Home = (props) => {

  return (
    <div className="home-page">
      <Navbar activeUser={props.activeUser}/>
      <ExercisesContainer getActiveMuscle={props.getActiveMuscle}/>
    </div>
  );
};

export default Home;
