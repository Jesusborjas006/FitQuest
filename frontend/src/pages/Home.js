import MusclesContainer from "../components/MusclesContainer";
import Navbar from "../components/Navbar";

const Home = (props) => {

  return (
    <div className="home-page">
      <Navbar activeUser={props.activeUser}/>
      <MusclesContainer getActiveMuscle={props.getActiveMuscle} getFilteredExercises={props.getFilteredExercises}/>
    </div>
  );
};

export default Home;
