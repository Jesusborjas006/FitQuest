import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Workouts from "./pages/Workouts";
import Details from "./pages/Details";

function App() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({});
  const [activeMuscle, setActiveMuscle] = useState("");
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [exerciseDetails, setExerciseDetails] = useState({})

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:4000/api/users");
      const json = await response.json();

      if (response.ok) {
        setUsers(json);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/api/exercises")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const getActiveUser = (id) => {
    setActiveUser(users[id - 1]);
  };

  const getActiveMuscle = (type) => {
    setActiveMuscle(type);
  };

  const getFilteredExercises = (type) => {
    const filteredData = exercises.filter(
      (exercise) => exercise.primaryTarget === type
    );
    setFilteredExercises(filteredData);
  };

  const getExerciseDetails = (id) => {
    const details = filteredExercises.find(exercise => exercise.id === id)

    setExerciseDetails(details)
  };

  return (
    <div className="App">
      <div className="pages">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/login"
            element={<Login users={users} getActiveUser={getActiveUser} />}
          />
          <Route
            exact
            path="/home"
            element={
              <Home
                activeUser={activeUser}
                getActiveMuscle={getActiveMuscle}
                getFilteredExercises={getFilteredExercises}
              />
            }
          />
          <Route
            exact
            path="/:workout"
            element={
              <Workouts
                activeMuscle={activeMuscle}
                filteredExercises={filteredExercises}
                activeUser={activeUser}
                getExerciseDetails={getExerciseDetails}
              />
            }
          />
          <Route exact path="/:workout/:id" element={<Details exerciseDetails={exerciseDetails}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
