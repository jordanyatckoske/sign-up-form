import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

const Confirmation = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogIn = (e) => {
    e.preventDefault();
    history.replace("/");
  };

  return (
    <div className="card">
      <Helmet>
        <title>Confirmation | {user.firstName}</title>
      </Helmet>
      <header>
        <div className="group">
          <h1 className="m-0 text-dark-gray overline">Welcome,</h1>
          <h1 className="m-0">{user.firstName}!</h1>
        </div>
      </header>
      <div className="group">
        <p>
          You have been registered for this awesome service! Please check your
          email listed below for further instructions.
        </p>
      </div>
      <div className="group">
        <p className="overline m-0">{user.email}</p>
      </div>
      <div className="group align-right">
        <button className="text-white" onClick={(e) => handleLogIn(e)}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
