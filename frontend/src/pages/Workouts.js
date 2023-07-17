import ExercisesContainer from "../components/ExercisesContainer";
import Navbar from "../components/Navbar";

const Workouts = (props) => {
  return (
    <div className="workout-page">
      <Navbar activeUser={props.activeUser}/>
      <ExercisesContainer filteredExercises={props.filteredExercises} />
    </div>
  );
};

export default Workouts;
