import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UiDemo from '../pages/UiDemo';

function PageRouter() {
    return (
        <Switch>
            <Route path="/home/ui-demo" component={UiDemo}/>
        </Switch>
    );
}

export default PageRouter;
