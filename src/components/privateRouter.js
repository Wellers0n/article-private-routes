import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isAuthenticated} from './../auth'

const PrivateRouter = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated() ? (
                <div>
                    <Component {...props}/>
                </div>
            ) : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        )} />
    )
}

export default PrivateRouter;