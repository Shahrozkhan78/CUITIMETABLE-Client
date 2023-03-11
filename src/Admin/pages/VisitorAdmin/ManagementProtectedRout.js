import React from "react";

import { Redirect, Route } from "react-router-dom";

const ManagementProtectedRout = ({ component: Component, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem("managtoken");
    
    return (
        <>
        <Route
          {...restOfProps}
          render={(props) =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/Admin" />
          }
        />
      </>
  )
}

export default ManagementProtectedRout