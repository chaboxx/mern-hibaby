import React, { useEffect, useState } from 'react'

import axios from "axios";
import { NavBar } from '../ui/NavBar';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router-dom';




export const ProductScreen = () => {

    const usersApi = axios.create();
    const uid = localStorage.getItem("uid");
    const token = localStorage.getItem("token");



    const [productos, setProductos] = useState([]);

       
    usersApi.get('http://localhost:4000/admin/api/', {
    headers: {
        'x-token': token
    }
    })
    .then((res) => {
        
        setProductos(res.data.productos);
    })


    
    
    const [categoriaGeneral, setCategoriaGeneral] = useState("")
    const [nombre, setNombre] = useState("")
    const [stock, setStock] = useState("")
    
    
    const filteredMerca = () =>{

       
      
         if ( categoriaGeneral.length===0 && nombre.length===0 && stock.length===0 ){
             return productos
         }

         else if (categoriaGeneral.length===0 && nombre.length!==0 && stock.length!==0 ){
            const productosFiltrados= productos.filter(merca=>{
              
                let stockP;
                if (merca.stock.toString()!==stock.toString()){
                    stockP=false
                }else{
                    stockP=true
    
    
                }
    
            
    
                return ((merca.nombre.includes(nombre)) && (stockP) )
            })

            return productosFiltrados
            
         }
         else if (categoriaGeneral.length!==0 && nombre.length===0 && stock.length!==0 ){
            const productosFiltrados= productos.filter(merca=>{
              
                let stockP;
                if (merca.stock.toString()!==stock.toString()){
                    stockP=false
                }else{
                    stockP=true
    
    
                }
    
                
    
                return ((merca.categoriaGeneral.includes(categoriaGeneral)) && (stockP) )
            })
            return productosFiltrados
        }   
        else if (categoriaGeneral.length!==0 && nombre.length!==0 && stock.length===0 ){
            const productosFiltrados= productos.filter(merca=>{
            
    
              
                return ((merca.categoriaGeneral.includes(categoriaGeneral)) && (merca.nombre.includes(nombre)))
            })
            return productosFiltrados
        }
        else if (categoriaGeneral.length!==0 && nombre.length===0 && stock.length===0 ){
            const productosFiltrados= productos.filter(merca=>{
              
                
    
                return (  merca.categoriaGeneral.includes(categoriaGeneral) )
            })
            return productosFiltrados
        }
        else if (categoriaGeneral.length!==0 && nombre.length===0 && stock.length!==0 ){
            const productosFiltrados= productos.filter(merca=>{
              
                let stockP;
                if (merca.stock.toString()!==stock.toString()){
                    stockP=false
                }else{
                    stockP=true
    
    
                }
    
                
    
                return ((merca.categoriaGeneral.includes(categoriaGeneral))&& (stockP) )
            })
            return productosFiltrados
        }
        else if (categoriaGeneral.length!==0 && nombre.length!==0 && stock.length===0 ){
            const productosFiltrados= productos.filter(merca=>{
               
    
                return ((merca.categoriaGeneral.includes(categoriaGeneral)) && (merca.nombre.includes(nombre))  )
            })
            return productosFiltrados
        }
        else if (categoriaGeneral.length===0 && nombre.length!==0 && stock.length ===0){
            const productosFiltrados= productos.filter(merca=>{
              
    
                return ((merca.nombre.includes(nombre)))
            })
            return productosFiltrados
        }
        
        else{
            const productosFiltrados= productos.filter(merca=>{
              
                let stockP;
                if (merca.stock.toString()!==stock.toString()){
                    stockP=false
                }else{
                    stockP=true
    
    
                }
    
                
    
                return ((merca.categoriaGeneral.includes(categoriaGeneral))&&(merca.nombre.includes(nombre)) && (stockP) )
            })
            return productosFiltrados
        }
        }

           
        
        
        
        
        
    
    const handleCategoriaGeneralChange =(e) =>{
        e.preventDefault();
        
        //console.log(e.target.value)
        setCategoriaGeneral(e.target.value)
    }
    const handleCategoriaChange =(e) =>{
        e.preventDefault();
        setNombre(e.target.value)
    }
    
    const handlePrecioChange = (e) =>{
        e.preventDefault();
        setStock(e.target.value)
        
    }
    return (
        <>





            <NavBar/>
        <div className="container">
            
            <h1>ProductScreen</h1>
   
            <hr/>

            <div>

            
                
                
              

                    
                <span>CategoriaGeneral:</span>  <input type="text" value={categoriaGeneral} name="CategoriaGeneral"
                onChange={handleCategoriaGeneralChange}/>

                <span>Nombre:</span> <input type="text" value={nombre} name="Categoria"
                onChange={handleCategoriaChange}/>
                
                <span>Stock:</span> <input type="number" value={stock} name="Precio"
                onChange={handlePrecioChange}/>

                


            </div>
            <div>
                <button className="btn btn-danger">
                    Anterior
                </button>
                <button className="btn btn-primary">
                    Siguiente

                </button>

            </div>

            <div>

                <Link to="/admin-api/productos/crear-producto" >
                    Crear+
                </Link>

            </div>



            <hr/>



            <div className="row m-3">

                
                {
                    filteredMerca().map(i=>{
                        return <ProductCard i={i} key={i.id}/>
                    })
                }




            </div>



        </div>

        </>
    )


}