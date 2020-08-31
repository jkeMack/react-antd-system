import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';

function PageRouter() {
    return (
        <Switch>
            <Route path="/home/index" component={Header}/>
        </Switch>
    );
}

export default PageRouter;
