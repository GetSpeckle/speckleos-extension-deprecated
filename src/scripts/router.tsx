import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Welcome from '../components/welcome/Welcome'

export default function Router() {
  return <HashRouter hashType="noslash">
    <Switch>
      <Route exact path="/" component={Welcome}/>
    </Switch>
  </HashRouter>
}
