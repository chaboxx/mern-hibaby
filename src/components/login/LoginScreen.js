
import React from 'react'
import { useHistory } from 'react-router';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';



export const LoginScreen = () => {

    const history = useHistory();   


    const [formLoginValues,handleLoginInputChange]=useForm({
        user_admin:"rodrigoElADmin",
        contraseña_admin:"123456"
    });

    const {user_admin,contraseña_admin} = formLoginValues;


    const handleLogin = (e) =>{
        
        e.preventDefault();
        
       startLogin(user_admin,contraseña_admin);

        history.push("/admin-api/users")
        
        
    }





    
    return (
        <div>
            
            <form onSubmit={handleLogin}>

                <input name="user_admin" type="text" 
                value={user_admin}
                onChange={handleLoginInputChange} />
                <input name="contraseña_admin" type="password"
                value={contraseña_admin}
                onChange={handleLoginInputChange}
                />

                <input type="submit" value="Enviar"/>

            </form>
            
            






        </div>
    )
}










