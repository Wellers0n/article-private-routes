import React from 'react'
import Home from './screens/Home'
import PrivateRouter from './components/privateRouter'
import Login from './screens/Login'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <PrivateRouter path="/home" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router
