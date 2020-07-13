import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ firstName, email }));
    history.replace("/confirmation");
  };

  return (
    <div className="card">
      <header className="">
        <div className="group">
          <h1 className="m-0 text-dark-gray overline">Let's</h1>
          <h1 className="m-0">Sign Up</h1>
        </div>
        <p className="subtitle text-dark-gray">
          Use the form below to sign up for this super awesome service. You're
          only a few steps away!
        </p>
      </header>
      <div className="group">
        <form className="container" onSubmit={handleSubmit}>
          <label className="col-full" htmlFor="firstName">
            First Name
          </label>
          <input
            className="col-full"
            type="text"
            id="firstName"
            value={firstName}
            placeholder="John"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="col-full" htmlFor="email">
            Email
          </label>
          <input
            className="col-full"
            type="email"
            id="email"
            value={email}
            placeholder="johnrox@flipgrid.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="col-full" htmlFor="password">
            Password
          </label>
          <input
            className="col-full"
            type="password"
            id="password"
            value={password}
            placeholder="#1Flipper"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="validation-text text-red">
            Your password must be at least 8 characters long and include: at
            least one uppercase, one lowercase, and one number.
          </p>
          <div className="group col-full align-right text-white">
            <button className="text-white" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
