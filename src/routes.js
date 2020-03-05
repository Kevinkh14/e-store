import React from 'react'
import {Switch,Route} from "react-router-dom"
import Home from './components/Home'
import Men from './components/Men'
import Women from './components/Women'

export default (
    <Switch>
        <Route path = "/Men" component = {Men}/>
        <Route path = "/Women" component ={Women}/>
        <Route exact path = "/" component = {Home}/>
    </Switch>
)