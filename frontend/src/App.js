import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import Workouts from "./pages/Workouts";

function App() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({});
  const [activeMuscle, setActiveMuscle] = useState("");
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  console.log("Filtered State: ", filteredExercises)

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
    setFilteredExercises(filteredData)
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
            path="home/:workout"
            element={<Workouts activeMuscle={activeMuscle} filteredExercises={filteredExercises} activeUser={activeUser}/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
