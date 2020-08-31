import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from '../App';

function Router() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route path="/home" component={App}/>
                    <Redirect to="/home"/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Router;
