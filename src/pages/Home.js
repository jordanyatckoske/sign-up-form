import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.setItem("user", null);
    history.replace("/register");
  };
  return (
    <div className="card">
      <header className="">
        <div className="group">
          <h1>Home</h1>
        </div>
      </header>
      <div className="group">
        <h3 className="m-0 text-dark-gray overline">Hello,</h3>
        <p className="subtitle text-dark-gray">
          Thank you for taking a look through my project! If you would like to
          register a new user, please log out first.
        </p>
      </div>
      <div className="group">
        <button className="text-white" onClick={(e) => logOut(e)}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
