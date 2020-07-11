import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", { firstName, email });
    history.replace("/confirmation");
  };

  return (
    <div>
      <header>
        <h1>Header Text</h1>
        <p>
          A brief paragrah with instructions on how to sign up for the service.
        </p>
      </header>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            placeholder="John"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="johnrox@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="asdf3X0"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
