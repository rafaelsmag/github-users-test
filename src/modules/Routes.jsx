import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { AppRoutes } from '../config/constants'

import HomeScreen from '../modules/home/containers/HomeScreen'
import NotFound from '../modules/shared/containers/NotFound'

const Routes = props => (
  <Switch>
    <Route exact path={AppRoutes.HOME} component={HomeScreen} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
