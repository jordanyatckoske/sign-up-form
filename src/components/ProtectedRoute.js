import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = user !== null ? true : false;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/register",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
