const Exercise = (props) => {
  console.log(props);
  return (
    <div className="exercise-card">
      <img alt={props.name} src={props.image} />
      <h3>{props.name}</h3>
      <p>Instructions: {props.instructions}</p>
      <p>Primary Target: {props.primaryTarget}</p>
    </div>
  );
};

export default Exercise;
