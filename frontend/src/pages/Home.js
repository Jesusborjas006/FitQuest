import ExercisesContainer from "../components/ExercisesContainer";
import Navbar from "../components/Navbar";

const Home = (props) => {

  return (
    <div className="home-page">
      <Navbar activeUser={props.activeUser}/>
      <ExercisesContainer />
    </div>
  );
};

export default Home;
