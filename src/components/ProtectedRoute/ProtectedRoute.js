import React from "react";
import { Route, Navigate } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
function ProtectedRoute({ component: Component, ...props }) {
  const loggedIn = React.useContext(LoggedInContext);

  return (
    <>
      {
        loggedIn ? (
          <Component {...props} />
        )
          : (
            <Navigate to="/" />
          )

      }
    </>
  );
};

export default ProtectedRoute;