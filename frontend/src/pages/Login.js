import { useEffect, useState } from "react";
import User from "../components/User";

const Login = (props) => {
  console.log(props);
  // const [users, setUsers] = useState([]);
  // const [activeUser, setActiveUSer] = useState(null);

  // const getActiveUser = (id) => {
  //   console.log(`User ${id} was clicked`)
  // }

  const userElemets = props.users.map((user) => (
    <User
      id={user.id}
      name={user.name}
      img={user.image}
      key={user.id}
      getActiveUser={props.getActiveUser}
    />
  ));

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await fetch("http://localhost:4000/api/users");
  //     const json = await response.json();

  //     if (response.ok) {
  //       setUsers(json);
  //     }
  //   };

  //   fetchUsers();
  // }, []);
  return <div className="login-page">{props.users && userElemets}</div>;
};

export default Login;
