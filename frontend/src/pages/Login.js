import { useEffect, useState } from "react";
import User from "../components/User";

const Login = () => {
  const [users, setUsers] = useState([]);

  const userElemets = users.map((user) => (
    <User id={user.id} name={user.name} img={user.image} key={user.id} />
  ));

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
  return <div className="login-page">{users && userElemets}</div>;
};

export default Login;
