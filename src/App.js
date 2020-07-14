import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import "./styles/global.scss";

const App = ({ location }) => {
  return (
    <Layout className="container">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"fade"}
        >
          <div className="section">
            <Switch location={location}>
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
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
};

export default withRouter(App);
