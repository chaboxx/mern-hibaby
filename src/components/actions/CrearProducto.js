

import React, { useState } from 'react'

import { startCreateProduct } from '../../actions/CreateProduct';
import { useForm } from '../../hooks/useForm';




export const CrearProducto = () => {
    
    
    const [formCreateProduct,handleProductChange] = useForm({
        nombre: "",
        categoriaGeneral: "",
        descripcion:"",
        materiales:"",
        precio_mayor:"",        
        precio:"",
        
        categoria:"",
        
        
    })
    
    const {
        nombre,
        categoriaGeneral,
        descripcion,
        materiales,
        precio_mayor,
        precio,
        
        categoria,
        
    
        
    } = formCreateProduct;
    
    
    //const [image, setimage] = useState("")
    
    /*const refChange = (e) =>{
        console.log(e.target.files[0])
        const reader = new FileReader();
        
        reader.onloadend=()=>{
            console.log(reader.result)
            setimage(reader.result)
        }
        
        reader.readAsDataURL(e.target.files[0])
        
    }
    */
   
   
   //const data = new FormData();
   
   const [numeroInputs, setNumeroInputs] = useState([])
   const [tallas, settallas] = useState("")
   const [genero, setGenero] = useState("")
   
   //const [imagenes, setimagenes] = useState([])
   
   const image = React.createRef();
   
   const imagenPrincipal =React.createRef();
   
   
   const ordenarTallas=(lista)=>{
       
       for (let i of lista){
           
    }
    
}
const [StockLista, setStockLista] = useState(new Array(0))
const [tallasSelect, setTallasSelect] = useState(new Array(0))
const [posicionGenero, setPosicionGenero] = useState([])

const [numeroArchivos, setNumeroArchivos] = useState(0)
const [numeroModelos, setnumeroModelos] = useState([]);



const crearNuevoProducto = (e) =>{
    e.preventDefault();
    let data = new FormData();
    
    
    console.log(numeroArchivos)
    
    
    
    let auxGenero =[];
    
    for ( let i of posicionGenero){
        
        auxGenero.push(i)
            
            
        }
        
        let generoAux=[]
        
        for(let i of auxGenero){
            
            generoAux[i.posicion]=i.valor
            
        }
        
        
        
        
        console.log(generoAux)
        
        
        
        for (let i of generoAux){
            data.append("genero",i)
        }       
        
        
        
        for(let i of imagenArchivos){
            data.append("coloresb",i)
        }

        
/*
        for(let i of StockLista){
            data.append("stock",i)
        }
        
*/
        console.log(numeroModelos.length)
for(let o=0;o<numeroModelos.length;o++){
    
    let aux=0;
    while(aux<tallasSelect[o].length){
        data.append(`tallasb[${o}]`,tallasSelect[o][aux])
        aux=aux+1
    }    
    
    
}

for(let o=0;o<numeroModelos.length;o++){
    
    let aux=0;
    while(aux<StockLista[o].length){
        data.append(`stock[${o}]`,StockLista[o][aux])
        aux=aux+1
    }    
    
    
}

    


data.append("nombre",nombre)
data.append("categoriaGeneral",categoriaGeneral)
data.append("descripcion",descripcion)
data.append("materiales",materiales)
data.append("genero",genero)
data.append("precioMayor",precio_mayor)
data.append("precio", precio)
//data.append("colores",image.current.files)
data.append("categoria",categoria)

//data.append("tallasb",tallasSelect)
//data.append("stock",stock)

console.log("/******************data",data.values)

startCreateProduct(data)




}



const handleImageInputChange =(e)=>{
    //console.log(e.target.files)
    //setimagenes(e.target.files)
}   


const handleTallaSelect = (e)=>{
    //console.log(e.target.value)
    settallas(e.target.value)
}





    const [imagenArchivos, setImagenArchivos] = useState([])
        
        const [archivos, setarchivos] = useState([])
        
        
        const [tallasForm, settallasForm] = useState([])
        
        
        const [numeroForm, setnumeroForm] = useState(1)
        
        const [imagenModelo, setImagenModelo] = useState([]);
        
        
        
        //json con posiciones para tallas y stock
        
        
        
        console.log(posicionGenero)
        
        


    const handleTallasChange = (e,modelo) =>{


      setPosicionGenero([
            ...posicionGenero,
            {
                posicion:modelo,
                valor:e.target.value
            }
        ])
        
    }

    
    const retornarNumeroFormularios = ( )=>{
        
        let lista=[]

        for (let i = 0; i < numeroModelos.length; i++) {
            lista[i] = []
            
        }
        console.log(lista)
        return lista;

        
    }

    
    
    const handleTallaChange = (e,modelo,lugar) =>{
        
       

      
        let listaAux=tallasSelect

        
        
        let listaAux2=[]

        

        for (let i=0;i<listaAux.length;i++){
            if(listaAux[i]!==undefined){
                listaAux2[i]=listaAux[i]
            }else{
                listaAux2[i]=[]
            }
        }

        console.log("**",listaAux)

        

        /*for (let i=0;i<listaAux[modelo].length;i++){
            if(listaAux[modelo][i]!==undefined){
                listaAux2[modelo][i]=listaAux[modelo][i]
            }else{
                listaAux2[modelo][i]=""
            }

        }
        */
        console.log("************",listaAux2)
    
        
        if (e.target.checked){

            
            listaAux2[modelo][lugar]=e.target.value


        }else{

            

            listaAux2[modelo].splice(lugar,1)
        }

        setTallasSelect(listaAux2)
        


    }

    
    const handleStockChange = (e,modelo,lugar) =>{
    
        console.log(StockLista)
        let listaAux=[]
        let listaStock = StockLista;

        for (let i=0;i<listaStock.length;i++){
            if(listaStock[i]!==undefined){
                listaAux[i]=listaStock[i]
            }else{
                listaAux[i]=[]
            }
        }
        console.log(listaAux)

       listaAux[modelo][lugar]=e.target.value;
       setStockLista(listaAux)
    
    }

    return (
        <div>
            <h1 className="bg-danger">
                
                Crear Producto
            </h1>

            <hr/>
                    

            

                   
                    <div className="container">
                    <form onSubmit={crearNuevoProducto} 
                    encType="multipart/form-data"
                    className="row"
                    >
                        <div className="col-8" style={{
                            border:"1px solid black"
                            
                        }}>


                        <span style={{
                            color:"red"
                        
                        }} className="m-2">Nombre:</span>
                        <input type="text" name="nombre" 
                        placeholder="Nombre"
                        value={nombre}
                        onChange={handleProductChange}
                        />
                        <br/>
                        
    
                        <span style={{
                            color:"red"
                        
                        }} className="m-2">Categoria general:</span>
                        <input type="text" name="categoriaGeneral"
                        placeholder="Categoria General"
                        value={categoriaGeneral}
                        onChange={handleProductChange}
                        />
                        
                        <br/>
    
    
                        <span style={{
                            color:"red"
                        
                        }} className="m-2">Descripcion:</span>
                        <input type="text" name="descripcion"
                        placeholder="Descripcion"
                        value={descripcion}
                        onChange={handleProductChange}
                        width="100px"
                        />
                        <br/>
    
    
                        <span style={{
                            color:"red"
                        
                        }} className="m-2">Materiales:</span>
                        <input type="text" name="materiales" 
                        placeholder="Materiales"
                        value={materiales}
                        onChange={handleProductChange}
                        />
                        <br/>
                        
                        
                        <span>Precio:</span>

                        <input type="number" name="precio"
                        value={precio}
                        onChange={handleProductChange}
                        />
                        <br/>

                        <span style={{
                            color:"red"
                        
                        }} className="m-2">Precio por mayor:</span>
    
                        <input type="number" name="precio_mayor"
    
                        placeholder="Precio"    
                        value={precio_mayor}
                        onChange={handleProductChange}
                        />
                        <br/>
                        
                    
              
    
                        <span style={{
                            color:"red"
                        
                        }} className="m-2">Categoria:</span>
                        
                        <input type="text" name="categoria"
                        placeholder="Categoria"
                        value={categoria}
                        onChange={handleProductChange}
                        />
                        <br/>
                        

                        
                        
                        </div>
    
                        
                        <div className="col-4 pt-3 ml-3">
                            <p>Añadir Modelo al Producto :</p>

                            <button 
                            onClick={async (event)=>{
                                await event.preventDefault();
                                await setnumeroForm(numeroForm+1)
                                
                                setTallasSelect([...tallasSelect,Array(numeroForm-tallasSelect.length)])
                                setStockLista([...StockLista,Array(numeroForm-tallasSelect.length)])
                                await setnumeroModelos([...numeroModelos,numeroModelos.length+1])
                                
                                
                            }}
                            style={{
                                display:"flex",
                                justifyContent:"center",
                                margin:"10px auto",
                                backgroundSize:"50px"
                            }} className="btn btn-primary mt-5">
                                +

                            </button>
                        
                        
                        
                        </div>

                        

                    
                       
                    
                    
                    {     
                        
                        

                        numeroModelos.map((modelo)=>{

                            return(
                                <div className="row mt-4 mb-3"
                                    style={{
                                        border:"1px solid blue"
                                    }}
                                    key={modelo}
                                >
                                

                                <div className="col-4">

                                    <input onChange={
                                        
                                           (e)=>{

                                               e.preventDefault();
                                               
                                               setImagenArchivos([...imagenArchivos,e.target.files[0]])
                                               
                                               //console.log(imagenArchivos)

                                               const reader = new FileReader();

                                               reader.readAsDataURL(e.target.files[0]);
                                               
                                            
                                               reader.onloadend = ()=>{
                                                
                                                   
                                                   
                                                   setImagenModelo([
                                                    ...imagenModelo,
                                                    reader.result
                                                    
                                                ])
                                                
                                            }
                                            
                                            
                                            
                                            
                                        }
                                    } type="file"
                                    />

                                    <img src={imagenModelo[modelo-1]} className="img-fluid"/>                              

                                </div>


                               
                                
                                
                                <div className="col-8">
                                <span style={{
                                    color:"blue"
                                
                                }} className="m-2">Genero:</span>
                                <br/>
                                <span>Femenino:</span>
                                <input type="radio" name={`genero-${modelo}`}
                                value="Femenino"
                                onChange={

                                    (e)=>handleTallasChange(e,modelo-1)  

                                 
                                
                                }
                                className="m-2"
                                />
                                <span style={{
                                        color:"red"
                                    
                                    }}>Masculino:</span>
                    
                                <input type="radio" name={`genero-${modelo}`}
                                
                                value="Masculino"
                                onChange={
                                    
                                    (e)=>handleTallasChange(e,modelo-1)  
                                }
                               
                                className="m-2"
                                />
                        
                                <span style={{
                                        color:"red"
                                    
                                    }}>Unisex:</span>
                                <input type="radio" name={`genero-${modelo}`}
                                
                                value="Unisex"
                                onChange={    
                                    (e)=>handleTallasChange(e,modelo-1)  

                                }
                                
                                className="m-2"
                                />
                                <br/>
                
                                <p>Tallas:</p>
                                <span style={{
                                    color:"red"
                                
                                }}>(0-6)M</span>
                                <input type="checkbox" name={`tallas-${modelo}`}
                                value="(0-6)M"
                                onChange={(e)=>handleTallaChange(e,modelo-1,0)}
                                
                                />
                                <input type="number" name={`stock-${modelo}-${0}`} 
                                onChange={(e)=>handleStockChange(e,modelo-1,0)}
                                />

                                <br/>
                            
                                <span>(6-12)M</span>
                                <input type="checkbox" name={`tallas-${modelo}`}
                                value="(6-12)M"
                                onChange={(e)=>handleTallaChange(e,modelo-1,1)}
                                />
                                <input type="number" name={`stock-${modelo}-${1}`} 
                                onChange={(e)=>handleStockChange(e,modelo-1,1)}
                                />

                                <br/>
            
                                <span>(12-24)M</span>
                                <input type="checkbox" name={`tallas-${modelo}`}
                                value="(12-24)M"
                                onChange={(e)=>handleTallaChange(e,modelo-1,2)}
                                />
                                <input type="number" name={`stock-${modelo}-${2}`} 
                                onChange={(e)=>handleStockChange(e,modelo-1,2)}
                                />

                                <br/>
            
                                <span>(24-36)M</span>
                                <input type="checkbox" name={`tallas-${modelo}`}
                                value="(24-36)M"
                                onChange={(e)=>handleTallaChange(e,modelo-1,3)}
                                />
                                <input type="number" name={`stock-${modelo}-${3}`} 
                                onChange={(e)=>handleStockChange(e,modelo-1,3)}
                                />

                                <br/>
            
                                <span>(36-48)M</span>
                                <input type="checkbox" name={`tallas-${modelo}`}
                                value="(36-48)M"
                                onChange={(e)=>handleTallaChange(e,modelo-1,4)}
                                />
                                <input type="number" name={`stock-${modelo}-${4}`} 
                                onChange={(e)=>handleStockChange(e,modelo-1,4)}
                                />

                                <br/>
            
                                <span>(48-60)M</span>
                                <input type="checkbox" name={`tallas-${modelo}`}
                                value="(48-60)M"
                                onChange={(e)=>handleTallaChange(e,modelo-1,5)}
                                />
                                <input type="number" name={`stock-${modelo}-${5}`} 
                                onChange={(e)=>handleStockChange(e,modelo-1,5)}
                                />

                                <br/>
            
            
                                <span>(60-72)M</span>
                                <input type="checkbox" name={`tallas-${modelo}`}
                                value="(60-72)M"
                                onChange={(e)=>handleTallaChange(e,modelo-1,6)}
                                />
                                <input type="number" name={`stock-${modelo}-${6}`}
                                onChange={(e)=>handleStockChange(e,modelo-1,6)}
                                 />
            
                                <br/>

            
                                </div>


                                </div>
                            )
                        })
                    }
                    
                    <input  className="btn btn-primary" 
                    type="submit" />
     
                    </form>
                        </div>
                   
               
            
            
           


            

        </div>
    )
}
