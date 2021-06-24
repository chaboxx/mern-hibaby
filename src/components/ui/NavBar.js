import React from 'react';
import { Link } from 'react-router-dom';


import "../../styles/ui/navbar.css";


export const NavBar = () => {
    return (
        <aside>
            <nav>

                <Link to="/admin-api/users" >
                    Usuarios
                </Link>
                

                <Link to="/admin-api/productos" >
                    Productos
                </Link>


            </nav>
        
        </aside>
    )
}
