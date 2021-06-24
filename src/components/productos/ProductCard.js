import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {deleteProductoAdmin} from "../../actions/DeleteProduct";

import Modal from "react-modal";
import { ActualizarProductoScreen } from '../actions/ActualizarProductoScreen';
  
const customStyless = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : ' (-50%, -50%)'
    }
  };
  
  
  Modal.setAppElement("#root")

export const ProductCard = ({i}) => {
    
    //const usersApi = axios.create();
    //const uid = localStorage.getItem("uid");
    //const token = localStorage.getItem("token");
    
    const [body, setbody] = useState(null);

    //const [productos, setProductos] = useState([]);
    const handleDeleteProduct = (e) =>{
        e.preventDefault();
        
       
        deleteProductoAdmin(i.id);
       
        

    }
    
    
    const handleEditProduct =  (e) =>{
        e.preventDefault();
        setbody(i)
        
        setIsOpen(true);

      
        
    }   
    
    
    
    
    
    
    
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
  
    function closeModal(){
      setIsOpen(false);
    }


    let imagenesCarrusel=i.colores[0].urlImagenes;
 
    


    return (

        <>

        <Modal
          //className="col-auto text-center"
          isOpen={modalIsOpen}
          //onAfterOpen={afterOpenModal}
          //onRequestClose={closeModal}
          style={{
              content:{
                  display:"flex",
                  justifyContent:"center",
                  flexWrap:"nowrap"
              }
          }}
          contentLabel="Example Modal"
          i={body}
        >
          <div className="col-4">
            <div className="card">
                <img className="card-img-top img-fluid" src={i.image} alt="Card image cap"/>

                <div className="card-body">
                    <h5 className="card-title">{i.nombre}</h5>
                    <p className="card-text">{i.descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">S/ {i.precio}</li>
                    <li className="list-group-item">Genero: {i.genero}</li>
                    <li className="list-group-item">Tallas: {
                        /*i.tallas.map(e=>{
                            return (<div>
                                {e}
                            </div>)
                        })*/
                        
                        
                    }</li>
                </ul>
            </div>
            </div>
            <button onClick={closeModal} className="btn btn-danger" style={{
                width:"50",
                height:"50"
            }}>
                x
            </button>
        </Modal>




        <div className="col-4 m-3" style={{
            height:"100%"   
        }}>
            <div className="card">
                <img className="card-img-top img-fluid" src={i.colores[0].urlImagenes} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{i.nombre}</h5>
                    <p className="card-text">{i.descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">S/ {i.precio}</li>
                    <li className="list-group-item">Genero: {i.genero}</li>
                    <li className="list-group-item">Tallas: {/*
                        i.tallas.map(e=>{
                            return (<div>
                                {e}
                            </div>)
                            */})  
                    }</li>
                </ul>
                <div className="card-body">


                <button  className="btn btn-primary" onClick={handleEditProduct}>

                    Editar
                </button>

                    
                <button className="btn btn-danger" onClick={handleDeleteProduct}>

                    Eliminar
                </button>
                
                
                </div>
            </div>    
           
        </div>
        </>
    )
}
