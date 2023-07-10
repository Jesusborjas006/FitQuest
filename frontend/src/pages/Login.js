import { useEffect, useState } from "react";

const Login = () => {
  const [users, setUsers] = useState([]);

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
  return (
    <div className="login-page">
      <h2>Login page</h2>
    </div>
  );
};

export default Login;
