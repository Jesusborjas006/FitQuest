import Exercise from "./Exercise";

const ExercisesContainer = (props) => {
  console.log(props.filteredExercises);
  const exerciseElements = props.filteredExercises.map((exercise) => (
    <Exercise
      name={exercise.name}
      image={exercise.image}
      instructions={exercise.instructions}
      primaryTarget={exercise.primaryTarget}
      secondaryTarget={exercise.secondaryTarget}
      id={exercise.id}
      key={exercise.id}
    />
  ));

  return <div className="exercises-container">{exerciseElements}</div>;
};

export default ExercisesContainer;
