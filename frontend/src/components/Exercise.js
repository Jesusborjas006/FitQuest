const Exercise = (props) => {
  console.log(props);
  return (
    <div className="exercise-card">
      <img alt={props.name} src={props.image} className="exercise-card-img"/>
      <h3>{props.name}</h3>
    </div>
  );
};

export default Exercise;
