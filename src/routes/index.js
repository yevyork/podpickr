import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Home from '../components/screens/Home'
import Pods from '../components/screens/Pods'
import AddPod from '../components/screens/AddPod'

export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pods' component={Pods} />
            <Route exact path ='/addpod' component={AddPod} />
        </Switch>
    )
}