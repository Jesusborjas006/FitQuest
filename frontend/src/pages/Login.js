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

  return <div className="login-page">{props.users && userElemets}</div>;
};

export default Login;
