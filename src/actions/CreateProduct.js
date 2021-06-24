import { fetchConToken } from "../helpers/fetch"



export const startCreateProduct = async(data)=>{

    
    
    
    const resp = await fetchConToken("new",
    data,"POST")

    

    const body= await resp.body;


    if ( body.ok){
        
        console.log("Producto Creado")
    }




}