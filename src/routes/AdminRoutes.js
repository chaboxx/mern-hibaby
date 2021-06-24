import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import { CrearProducto } from "../components/actions/CrearProducto";



import { ProductScreen } from "../components/productos/ProductScreen";
import { UserScreen } from "../components/usuarios/UserScreen";



export const AdminRoutes=() =>{
  return (
    <Router>
    
        <Switch>
          
          

          <Route exact path="/admin-api/users" component={UserScreen}/>
            
          <Route exact path="/admin-api/productos" component={ProductScreen}/>

          <Route exact path="/admin-api/productos/crear-producto" component={CrearProducto} />
          
          <Redirect to="/admin-api/users"/>

        </Switch>
      
    </Router>
  );
}
