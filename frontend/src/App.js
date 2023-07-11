import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({});

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

  const getActiveUser = (id) => {
    setActiveUser(users[id - 1]);
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
          <Route path="/home" element={<Home activeUser={activeUser}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
