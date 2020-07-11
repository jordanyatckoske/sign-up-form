import React from "react";
import { useHistory } from "react-router-dom";

const Confirmation = ({ user }) => {
  const history = useHistory();

  const handleLogIn = (e) => {
    e.preventDefault();
    history.replace("/");
  };

  return (
    <div>
      <header>
        <h1>Welcome,</h1>
        <h1>{user.firstName}</h1>
      </header>
      <div>
        <p>
          You have been registered for this awesome service! Please check your
          email listed below for further instructions.
        </p>
      </div>
      <div>{user.email}</div>
      {/* onClick={() => localStorage.setItem("user", user)} */}
      <button onClick={(e) => handleLogIn(e)}>Log In</button>
    </div>
  );
};

export default Confirmation;
