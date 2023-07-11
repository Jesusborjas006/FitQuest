import Navbar from "../components/Navbar";

const Home = (props) => {
  return (
    <div className="home-page">
      <Navbar activeUser={props.activeUser}/>
    </div>
  );
};

export default Home;
