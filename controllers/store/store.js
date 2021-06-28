const { response } = require("express");
const producto = require("../../models/store/producto");

const colores = require("../../models/store/colores");

const tallas = require("../../models/store/tallas")

const ProductoSchema= require("../../models/store/producto");
const upload = require("../../helpers/admin/multer");


const ObtenerProductos = async(req,res=response) =>{

    const productos = await ProductoSchema.find({}).populate({
        path:"colores",
        populate:{
            path:"tallas"
        }
    })


   
  res.json({
        ok:true,
        msg: "Obtener productos",
        productos
    })
}


const CrearNuevoProducto= async (req,res=response) =>{

 


    //const archivosImagen= req.files;
    
       //const {filename} = req.files
   
       //console.log("**************************")
       //console.log(req.files[0].filename)
   
       
       //const productoId = req.body.id;

  
    
    
    
    const {
        nombre,
        categoriaGeneral,
        descripcion,
        materiales,
        genero,
        precioMayor,
        precio,
        categoria,
        coloresb,
        tallasb,
        stock
    } = req.body;
   

   
   
   
   
    const productoNuevo = new ProductoSchema({
        nombre,
        categoriaGeneral,
        descripcion,
        materiales,
        
        precioMayor,
        precio,
        categoria,
        coloresb
    })
    
    
    
//    const user= await ProductoSchema.findById(req.body.id)
  //  const imagesRequest=[]
//
 //   for(let i of archivosImagen){

  //      imagesRequest.push(i.filename)
    //}
    
    /*const producto_nuevo=  new ProductoSchema({
        ...req.body,
        image: {
            id:productoId,
            filename
        },
    });
    */
    
    /*const newImage = new colores({
        imagesNames: imagesRequest,
        producto: user._id

   })*/
    
    try{
        
        // *** producto_nuevo.id = req.id;
        
        
        /*if (req.files){

            for (let i of req.files){
                console.log(i)
                const {filename} = i;
                producto_nuevo.setImgUrl(filename);

            }
            }
        */
        
        
        
        const productoGuardado = await productoNuevo.save();
        
        //const {_id} = productoGuardado;

        //const productoSaved = await ProductoSchema.findById(productoGuardado._id)
        //const productoInsertar = await ProductoSchema.findById(productoGuardado._id)
        
        
        //const idsImagenes=[]
      
        
        /*for (let i=0; i<tallasb.length;i++){
            
            

            const newTallaStock = new tallas({
                nombreTalla: tallasb[i], 
                stock:stock[i]
            })
            
            

            const tallaStockSaved=await newTallaStock.save()

            //const tallaStockSaved= tallas.findById(newTallaStock._id)

            
            //const tallaStockId = tallas.findById(tallaStockSaved)
            

            const newImage = new colores({
                urlImagenes: [`http://localhost:4000/assets/${archivosImagen[i].filename}`],
                //producto: productoGuardado._id
                //tallas: imageSaved._id
                tallas:tallaStockSaved._id
            })
            const imageSaved =await newImage.save()

            //const imageSaved = colores.findById(newImage._id)

            //imageSaved.tallas.push(tallaStockSaved._id)
            
            productoInsertar.colores.push(imageSaved._id)
            //productoSaved.image.push(newImage._id)
            
            //idsImagenes.push(JSON.stringify(newImage._id))
        }
        
        await productoInsertar.save();*/
        //user.image = user.image.concat(imagenGuardada._id)
        
        //await user.save()
        
        /*   res.json({
            ok:true,
            msg:"true",
            imagen:imagenGuardada
        })
        */
       /*const imageSaved = await colores.findById(imageG._id)


       imageSaved.
       const newTallas = new tallas({
           tallasNames: ,
           
       })
       
       */
      

      
      /*for (let o of idsImagenes){
           const imagenEditar = await colores.findById(o);

           const newTalla = new tallas({
                tallasName:``
           })

       }
        
       
       */
       //await productoSaved.save()

       
      
       let tallasbu= await tallasb.map(i=>{
           return (i.filter(e=>{
               return e!=="undefined"
           }))
       })

        let stocku= await stock.map(i=>{
        return (i.filter(e=>{
            return e!=="undefined"
        }))
        })

        
        

       for(let i=0;i<req.files.length;i++){
           
            let aux4=0;
            //let aux3=tallasbu.length;
            let color = new colores({
                 urlImagenes:[`http://localhost:4000/assets/${req.files[i].filename}`],
                 genero:genero[i],
                
            })
            let colorGuardado= await color.save()
            
            while(aux4<tallasbu[i].length){
                let talla = new tallas({
                    nombreTalla:tallasbu[i][aux4],
                    stock:stocku[i][aux4]
                })
                
                let tallaGuardada = await talla.save();
                
                    
                    
                colorGuardado.tallas.push(tallaGuardada._id)
                
                
                await colorGuardado.save();
                
                aux4+=1

                
                
            }

            productoGuardado.colores.push(colorGuardado._id)
        }
         
        //await productoGuardado.save();
        
        let productoFinal=await productoGuardado.save();

        console.log(productoFinal)

        res.json({
            ok:true,
            producto:productoFinal
        })
       
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"Crear nuevo producto fallo."
        })
    }
}
const AñadirImagenesProducto = async (req,res) =>{
    
    const productoColoresId = req.params.id;

    const imagenes=req.files;
    
    let imagenesUrl=[]

   for (let i of imagenes){
    const url=`http://localhost:4000/assets/${i.filename}`    
    imagenesUrl.push(url)
   }

    try{
        
        
        const color = await colores.findById(productoColoresId);

        if(!color){
            return res.status(404).json({
                ok:false,
                msg:"Color no existe con ese id"

            })

        }
        
        
            
        const nuevoColor = {
            tallas:color.tallas,
            _id:color._id,
            __v:color.__v,
            urlImagenes:[...color.urlImagenes,...imagenesUrl]

        }
        console.log(nuevoColor)
        

        

        
        const colorActualizado = await colores.findByIdAndUpdate(productoColoresId,nuevoColor)
        
        res.json({
            ok:true,
            msg:"Nuevas Imagenes Añadidas",
            color:colorActualizado
        })



    }catch(error){
        res.status(500).json({
            ok:false,
            msg:"Error en añadir el Color"
        })
    }

}
const ActualizarProducto= async (req,res=response) =>{
    
    const productoId = req.params.id;

    //const Id = req.uid;

    try{
        const producto = await ProductoSchema.findById( productoId);
        if (!producto){
            return res.status(404).json({
                ok:false,
                msg:"Producto no existe con ese id"

            })
        }

        /*if (producto.user.toString() !== Id){
            return res.status(401).json({
                ok:false,
                msg:"No tiene privilegio de editar este evento"
            })
        } */ 

        const nuevoProducto={
            ...req.body,
            user:Id
        }

        const productoActualizado= await ProductoSchema.findByIdAndUpdate(productoId,nuevoProducto);


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

    //const id = req.id;

    try{
        const producto = await ProductoSchema.findById( productoId);
        
        if (!producto){
            return res.status(404).json({
                ok:false,
                msg:"Producto no existe con ese id."

            })
        }

        /*if (producto.user.toString() !== id){
            return res.status(401).json({
                ok:false,
                msg:"No tiene privilegio de editar este evento"
            })
        } */  

       

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
    EliminarProducto,
    AñadirImagenesProducto
}
