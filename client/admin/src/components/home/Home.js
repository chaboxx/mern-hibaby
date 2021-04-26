import React from 'react'

import {guardarProductos} from "../../controllers/guardar";

export const Home = () => {

    const enviarProducto= ( )=>{

        guardarProductos();    
    }


    return (
        <div>
            <h1>
                Crear Nuevo Producto...
            </h1>       

            <hr/>
            <div>
                <form onSubmit={enviarProducto}> 

                    <input type="text" placeholder="Nombre"/>
                    <input type="text" placeholder="id"/>
                    <input type="text" placeholder="Descripcion"/>
                    <input type="text" placeholder="Materiales"/>
                    <input type="text" placeholder="Precio"/>
                    <input type="text" placeholder="Genero"/>
                    <input type="text" placeholder="Categoria"/>
                    <input type="text" placeholder="Colores"/>
                    <input type="text" placeholder="Genero"/>
                    <input type="text" placeholder="Talla"/>
                    

                </form>



            </div>


    
        </div>
    )
}
