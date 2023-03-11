import React from "react";
import { SiJirasoftware } from "react-icons/si";
import { Redirect, Route } from "react-router-dom";

const AdminProtectedRoute = ({ component: Component, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem("admintoken");

    return (
      <>
        <Route
          {...restOfProps}
          render={(props) =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/Admin" />
          }
        />
      </>
    );
  }
  

export default AdminProtectedRoute