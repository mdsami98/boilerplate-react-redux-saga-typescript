import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Counter from '../pages/counter/index'
import Dashboard from '../pages/dashbaord'
import UserLayoutRouter from '../layout/UserLayoutRouter'
import UserRoutes from './UserRoutes';
const index = () => {
  return (
    <Router>
      <Switch>
          <UserLayoutRouter
              exact
              path="/counter"
              pageTitle="Counter"
              isAuthenticated={true}
              component={Counter}
          />
          <UserLayoutRouter
              exact
              path="/dashboard"
              pageTitle="Dashboard"
              isAuthenticated={true}
              component={Dashboard}
          />
          
      </Switch>
    </Router>
  )
}

export default index