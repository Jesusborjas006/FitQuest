import User from "../components/User";

const Login = (props) => {
  const userElemets = props.users.map((user) => (
    <User
      id={user.id}
      name={user.name}
      img={user.image}
      key={user.id}
      getActiveUser={props.getActiveUser}
    />
  ));

  return (
    <div className="login-page">
      <h2 className="login-heading">Who's Training?</h2>
      <div className="user-container">{props.users && userElemets}</div>
    </div>
  );
};

export default Login;
