import React from "react";
import { useHistory } from "react-router-dom";

const Confirmation = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogIn = (e) => {
    e.preventDefault();
    history.replace("/");
  };

  return (
    <div className="card">
      <header>
        <div className="group">
          <h1 className="m-0 text-dark-gray overline">Welcome,</h1>
          <h1 className="m-0">{user.firstName}</h1>
        </div>
      </header>
      <div className="group">
        <p>
          You have been registered for this awesome service! Please check your
          email listed below for further instructions.
        </p>
      </div>
      <div className="group">
        <h4 className="overline m-0">{user.email}</h4>
      </div>
      {/* onClick={() => localStorage.setItem("user", user)} */}
      <div className="group align-right">
        <button className="text-white" onClick={(e) => handleLogIn(e)}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
