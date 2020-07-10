import React, { useState } from "react";

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <label for="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            placeholder="John"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="johnrox@gmail.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label for="password">Password</label>
          <input
            type="password"
            name="password"
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
