import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const logOut = (e) => {
    e.preventDefault();
    localStorage.setItem("user", null);
    history.replace("/register");
  };
  return (
    <div className="card">
      <Helmet>
        <title>Awesome Service | Home</title>
      </Helmet>
      <header className="">
        <div className="group">
          <h1>Home</h1>
        </div>
      </header>
      <div className="group">
        <h2 className="m-0 text-dark-gray overline">Hello {user.firstName},</h2>
        <p className="subtitle text-dark-gray">
          Thank you for signing up for this amazing service. I hope you enjoyed
          your registration experience! If you would like to register a new
          user, please log out first.
        </p>
      </div>
      <div className="group align-right">
        <button className="text-white" onClick={(e) => logOut(e)}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
