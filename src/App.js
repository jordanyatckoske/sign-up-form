import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = localStorage.getItem("user");

  useEffect(() => {
    setIsLoggedIn(user ? true : false);
  }, [user]);

  return (
    <Layout>
      <Router>
        <Switch>
          <ProtectedRoute isLoggedIn={isLoggedIn} exact path="/">
            <Home />
          </ProtectedRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/confirmation">
            <Confirmation user={user} />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
