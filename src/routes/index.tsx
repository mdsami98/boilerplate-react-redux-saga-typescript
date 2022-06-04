import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Counter from '../pages/counter/index'
import UserLayoutRouter from './UserLayoutRouter'
const index = () => {
  return (
    <Router>
      <Switch>
          <UserLayoutRouter
              exact
              path="/counter"
              pageTitle="Counter"
              appName="MAIN_SIDEBAR"
              isAuthenticated={true}
              component={Counter}
          />
          
      </Switch>
    </Router>
  )
}

export default index