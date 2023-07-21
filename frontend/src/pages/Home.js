import MusclesContainer from "../components/MusclesContainer";
import Navbar from "../components/Navbar";

const Home = (props) => {
  return (
    <div className="home-page">
      <Navbar activeUser={props.activeUser} />
      <h2 className="home-heading">Select a muscle to train</h2>
      <MusclesContainer
        getActiveMuscle={props.getActiveMuscle}
        getFilteredExercises={props.getFilteredExercises}
        exercises={props.exercises}
      />
    </div>
  );
};

export default Home;
