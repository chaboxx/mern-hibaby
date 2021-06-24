import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
 
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { AdminRoutes } from "./AdminRoutes";

import { RegisterLoginRoutes } from "./RegisterLoginRoutes";
import {LoginRegisterRoutes} from "./LoginRegisterRoutes";
export const AdminGate = () => {

    const uid = localStorage.getItem("uid");

    
    return (
        <Router>
            <Switch>

                <RegisterLoginRoutes component={LoginScreen} path="/admin-login" isAuthenticated={!!uid}/>

                <LoginRegisterRoutes component={AdminRoutes} path="/admin-api" isAuthenticated={!!uid}/>

                <Redirect to="/admin-login"/>
                
            </Switch>
            
        </Router>
        
    )
}
