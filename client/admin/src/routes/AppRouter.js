import React from 'react';

import {BrowserRouter as Router,Link,NavLink,Switch,Route} from "react-router-dom";
import { Home } from '../components/home/home';





export const AppRouter = () => {
    
    
    
    
    return (

        <Router>

            <Switch>

                <Route path="/" component={Home} />

                <Route exact path="/" component={} />

                <Route exact path="" component={} />

                <Route exact path="" component={}/>


            </Switch>
        </Router>

    )
}
