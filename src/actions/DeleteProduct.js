import { fetchConToken } from "../helpers/fetch"






export const deleteProductoAdmin = async(product_id)=>{


    const url = `${product_id}`
    const productoEliminar = await fetchConToken(url,{},"DELETE")

    console.log("PRODUCTO ELIMINADO")


}