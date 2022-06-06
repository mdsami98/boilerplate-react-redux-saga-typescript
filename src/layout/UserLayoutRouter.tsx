
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainLayout from "./MainLayout";


const UserLayoutRouter = ({component : Component, isAuthenticated,pageTitle, ...rest}: any) => {
  const routeComponent = (props: any) => (
      isAuthenticated
          ? <MainLayout pageTitle={pageTitle}>
            <Component {...props} />
          </MainLayout>
          : <Redirect to={{pathname: '/login'}}/>

  );
  return <Route {...rest} render={routeComponent}/>;
};

export default UserLayoutRouter