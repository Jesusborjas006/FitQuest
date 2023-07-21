import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Favorites = (props) => {
  return (
    <div>
      <Navbar activeUser={props.activeUser} />
      <h2 className="favorites-heading">Favorites</h2>

      <div className="exercises-container">
        {props.favoritesExercises.map((favorite) => (
          <Link to={`${props.id}`}>
          <div
            className="exercise-card"
            onClick={() => props.getExerciseDetails(favorite.id)}
          >
            <img
              alt={favorite.name}
              src={favorite.image}
              className="exercise-card-img"
            />
            <h3 className="exercise-name">{favorite.name}</h3>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
