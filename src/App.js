import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import "./styles/global.scss";

const App = () => {
  return (
    <Layout className="container">
      <Router>
        <Switch>
          <ProtectedRoute exact path="/">
            <Home />
          </ProtectedRoute>
          <Route path="/register">
            <Register />
          </Route>
          <ProtectedRoute path="/confirmation">
            <Confirmation />
          </ProtectedRoute>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
