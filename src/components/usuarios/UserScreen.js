import React, { useEffect, useState } from 'react'

import axios from "axios";
import { ProductCard } from '../productos/ProductCard';
import { NavBar } from '../ui/NavBar';




export const UserScreen = () => {
    
    const usersApi = axios.create();
    const user_admin = localStorage.getItem("name");
    const token = localStorage.getItem("token");
    
    const [usuario, setUsuario] = useState([])

    const data= {
        user_admin
    }

    const user=[]
    
    
    useEffect(() => {
        
        const url="http://localhost:4000/admin/api/auth/"
    
        usersApi.get(url,{
            headers:{
                "x-token":token
            }
        }).then((res)=>{
            setUsuario(res.data.usuario)
        })
        
    }, [user_admin])

    for(let i of usuario){
        if (user_admin===i.user_admin) user.push(i)
    }
    


    return (
        <div className="container">
            <NavBar/>
            
            <h1>UserScreen</h1>


            <hr/>

            {
                user.map(e=>{
                    return (
                        <div className="container row">
                            <div className="card col-7">
                            <img className="img-fluid" 
                            src="http://localhost:4000/assets/miFoto.jpg"
                            alt="Card image cap"/>
                            </div>
                            <div className="card-body col-5">
                            <h5 className="card-title">{e.user_admin}</h5>
                                
                            </div>
                        </div>
                    )
                })
            }
            
                        
          
        </div>

    )
}
