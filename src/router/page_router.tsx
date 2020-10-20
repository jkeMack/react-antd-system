import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import UiDemo from '../pages/UiDemo';
import UserManage from '../pages/UserManage';

function PageRouter() {
    return (
        <Switch>
            <Route path="/home/ui-demo" component={UiDemo}/>
            <Route path="/home/user" component={UserManage}/>
            <Redirect to="/home/ui-demo"/>
        </Switch>
    );
}

export default PageRouter;
