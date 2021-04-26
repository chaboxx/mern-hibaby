import { modeloProducto } from "../models/producto";


export const guardarProductos= async (req,res) =>{
    

    const { nombre,id,descripcion,materiales,precio,genero,
        categoria,colores_imagenes} = req.body;



    try{
        


        const producto = new modeloProducto(req.body);
    

        await producto.save();

        res.status(201).json({
            ok:true,
            msg:"Guardado exitosamente"
        
        })


    }catch(error){
        
        console.log(error);

        res.status(500).json({

            ok:false,
            msg:"Por favor hable el administrador"
        });

    }
       
}

