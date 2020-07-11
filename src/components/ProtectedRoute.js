import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, ...rest }) => {
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
