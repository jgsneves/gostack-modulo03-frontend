import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Repository } from '../pages/Repository';

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard} exact/>
                <Route path="/repositories/:repository+" component={Repository}/>
            </Switch>
        </BrowserRouter>
    );
}