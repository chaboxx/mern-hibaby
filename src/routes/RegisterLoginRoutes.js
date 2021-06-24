
import React from 'react';
import { Redirect, Route } from 'react-router';

import PropTypes from 'prop-types';



export const RegisterLoginRoutes =({
    isAuthenticated,
    component:Component,
    ...rest
    
    
}) => {

    


    return(
        <Route {...rest}
            component={ (props) =>(

                (!isAuthenticated)
                ? (<Component {...props}/>)
                : (<Redirect to="/admin-api/users"/>)
                )
            }
        />
    )


}

RegisterLoginRoutes.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}