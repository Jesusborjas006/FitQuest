import ExercisesContainer from "../components/ExercisesContainer";

const Workouts = (props) => {
  return (
    <div>
      <ExercisesContainer filteredExercises={props.filteredExercises}/>
    </div>
  );
};

export default Workouts;
