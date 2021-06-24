

import {fetchsinToken} from "../helpers/fetch";



export const startLogin= async (user_admin,contraseña_admin) =>{
    

        
        const resp=await fetchsinToken("auth/login",{user_admin,contraseña_admin},"POST");
        
        const body=await resp.json();
        
        //console.log(email,password);
        
        if (body.ok){
            localStorage.setItem("token",body.token);
            localStorage.setItem("token-init-date", new Date().getTime());

            localStorage.setItem("uid",body.uid);
            localStorage.setItem("name",body.name);

            
            console.log(body.token)

        }else{
           //Swal.fire("Error",body.msg,"error");
            console.log("ERROR")
        }
    


}