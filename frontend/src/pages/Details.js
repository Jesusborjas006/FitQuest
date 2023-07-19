const Details = (props) => {
  return (
    <div className="details-page">
      <img src={props.exerciseDetails.image} alt={props.exerciseDetails.name} />
      <h2>{props.exerciseDetails.name}</h2>
      <p>{props.exerciseDetails.instructions}</p>
      <p>{props.exerciseDetails.primaryTarget}</p>
      <p>{props.exerciseDetails.secondaryTarget}</p>
    </div>
  );
};

export default Details;
