import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import UiDemo from '../pages/UiDemo';

function PageRouter() {
    return (
        <Switch>
            <Route path="/home/ui-demo" component={UiDemo}/>
            <Redirect to="/home/ui-demo"/>
        </Switch>
    );
}

export default PageRouter;
