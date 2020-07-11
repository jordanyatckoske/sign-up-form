import React from "react";
import { useHistory } from "react-router-dom";

const Home = ({ setIsLoggedIn }) => {
  const history = useHistory();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.setItem("user", null);
    history.replace("/register");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={(e) => logOut(e)}>Log Out</button>
    </div>
  );
};

export default Home;
