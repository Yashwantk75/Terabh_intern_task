import { useContext } from "react";
import Body from "./Body";
import { user_data } from "../store/User-credential";
import LoginForm from "./LoginForm";

const Home = () => {
  const { userDetail } = useContext(user_data);

  // const initial_data = localStorage.getItem('userdata');
  // add_user(initial_data);

  return (
    <>
      {Object.keys(userDetail).length === 0 ? <LoginForm></LoginForm> : <Body></Body>}

    </>
  );
};
export default Home;
