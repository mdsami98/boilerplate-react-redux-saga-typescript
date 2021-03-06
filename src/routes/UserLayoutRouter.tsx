
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PageWrapper from "./PageWrapper";


const UserLayoutRouter = ({component : Component, isAuthenticated,pageTitle, ...rest}: any) => {
  const routeComponent = (props: any) => (
      isAuthenticated
          ? <PageWrapper pageTitle={pageTitle}>
            <Component {...props} />
          </PageWrapper>
          : <Redirect to={{pathname: '/login'}}/>

  );
  return <Route {...rest} render={routeComponent}/>;
};

export default UserLayoutRouter