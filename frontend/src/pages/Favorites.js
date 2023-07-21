import Navbar from "../components/Navbar";

const Favorites = (props) => {
  console.log("Props!!!!", props);
  return (
    <div>
      <Navbar activeUser={props.activeUser} />
      <h2>Favorites</h2>

      {props.favoritesExercises.map((favorite) => (
        <div
          className="exercise-card"
          onClick={() => props.getExerciseDetails(props.id)}
        >
          <img
            alt={favorite.name}
            src={favorite.image}
            className="exercise-card-img"
          />
          <h3 className="exercise-name">{favorite.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
