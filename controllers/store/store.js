const { response } = require("express");



const ProductoSchema= require("../../models/store/producto");

const ObtenerProductos = async(req,res=response) =>{

    const productos = await ProductoSchema.find();




    res.json({
        ok:true,
        msg: "Obtener productos",
        productos
    })
}


const CrearNuevoProducto= async (req,res=response) =>{

    

    const producto_nuevo= new ProductoSchema(req.body);

    try{

        producto_nuevo.id = req.id;

        const productoGuardado = await producto_nuevo.save();

        
        res.json({
            ok:true,
            producto:productoGuardado
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"Crear nuevo producto fallo."
        })
    }
}

const ActualizarProducto= async (req,res=response) =>{

    const productoId = req.params.id;

    const Id = req.id;

    try{
        const producto = await ProductoSchema.findById( productoId);
        if (!producto){
            return res.status(404).json({
                ok:false,
                msg:"Producto no existe con ese id"

            })
        }

        if (producto.user.toString() !== Id){
            return res.status(401).json({
                ok:false,
                msg:"No tiene privilegio de editar este evento"
            })
        }   

        const nuevoProducto={
            ...req.body,
            user:Id
        }

        const productoActualizado= await ProductoSchema.findByIdAndUpdate(eventoId,nuevoProducto);


        res.json({
            ok:true,
            producto:productoActualizado
        })


    }catch(error){

        console.log(error);

        res.status(500).json({
            ok:false,
            msg:"Error en la actualizacion del producto"
        })

    }

   

}

const EliminarProducto= async (req,res=response) =>{

    const productoId = req.params.id;

    const id = req.id;

    try{
        const producto = await ProductoSchema.findById( productoId);
        
        if (!producto){
            return res.status(404).json({
                ok:false,
                msg:"Producto no existe con ese id."

            })
        }

        if (producto.user.toString() !== id){
            return res.status(401).json({
                ok:false,
                msg:"No tiene privilegio de editar este evento"
            })
        }   

       

        await ProductoSchema.findByIdAndDelete(productoId);


        res.json({
            ok:true,
            msg:"Borrado"
        })


    }catch(error){

        console.log(error);

        res.status(500).json({
            ok:false,
            msg:"ERROR en la eliminacion del producto"

    })
}
}

module.exports={
    ObtenerProductos,
    CrearNuevoProducto,
    ActualizarProducto,
    EliminarProducto
}
