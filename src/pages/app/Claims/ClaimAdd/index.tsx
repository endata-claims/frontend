import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ChooseCompany from './ChooseCompany'
import AddClaim from './AddClaim'

export default () => {
  return (
    <Switch>
      <Route exact path='/app/claims/add' component={ChooseCompany} />
      <Route exact path='/app/claims/add/:id' component={AddClaim} />
    </Switch>
  )
}