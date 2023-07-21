import { Link } from "react-router-dom";
import ExercisesContainer from "../components/ExercisesContainer";
import Navbar from "../components/Navbar";

const Workouts = (props) => {
  return (
    <div className="workout-page">
      <Navbar activeUser={props.activeUser} />
      <Link to="/home" className="back-link"> ⬅ Go Back</Link>
      <h2 className="workout-heading">{props.activeMuscle}</h2>
      <ExercisesContainer
        filteredExercises={props.filteredExercises}
        getExerciseDetails={props.getExerciseDetails}
      />
    </div>
  );
};

export default Workouts;
