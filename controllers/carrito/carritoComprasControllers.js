

const carritoWebSchema = require("../../models/carritoCompras/carritoComprasSchema");

const ProductoSchema = require("../../models/store/producto");

const UsuarioWeb = require("../../models/usuariosWeb/usuarioWeb");


const CarritoComprasCatalogo = async (req,res)=>{

    console.log(req.body)

    const catalogoCompras  = await carritoWebSchema.findById(req.body.carritoId)
    .populate(
        {path:"productos",
        populate:{
            path:"colores",
            populate:{
                path:"tallas"
            }
        }
        
    }
    )



    res.json({
        ok:true,
        msg:"Catalogo de Compras",
        catalogoCompras
    })
}

const CrearCarritoCompras= async (req,res)=>{

    const CarritoDeCompras= new carritoWebSchema()

    await CarritoDeCompras.save()

    res.json({
        ok:true,
        msg:"Carrito Creado",
        carrito: CarritoDeCompras
    })

}


const AgregarProductoCarritoCompras = async(req,res)=>{

    console.log(req.body)

    const {carritoId,userId,productoId} = req.body 


    const carritoCompras=await carritoWebSchema.findById(carritoId)

    console.log(carritoCompras.productos)
    
    await carritoCompras.productos.push(productoId)

    

    await carritoCompras.save();
    

    console.log(carritoCompras)

    res.json({
        ok:true,
        msg:"Agregar Producto Carrito",
        carritoCompras
    })

}

const EliminarProductoCarritoCompras=async (req,res)=>{

    console.log(req.body)

    const {carritoId,productoId} = req.body;
    const carritoEliminar = await carritoWebSchema.findById(carritoId);


    

    carritoEliminar.productos=await carritoEliminar.productos.filter(e=>{
        
        

        return JSON.stringify(e)!== JSON.stringify(productoId); 

    });
    
    await carritoEliminar.save()
    

    res.json({
        ok:true,
        msg:"Eliminar Producto",
        carritoEliminar
    })

}




module.exports={
    CrearCarritoCompras,
    CarritoComprasCatalogo,
    AgregarProductoCarritoCompras, 
    EliminarProductoCarritoCompras

}





