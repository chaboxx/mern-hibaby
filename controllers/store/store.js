const { response } = require("express");
const producto = require("../../models/store/producto");

const colores = require("../../models/store/colores");

const tallas = require("../../models/store/tallas")

const ProductoSchema= require("../../models/store/producto");
const upload = require("../../helpers/admin/multer");
const VentasModelSchema = require("../../models/ventas/VentasModelSchema");

const moment = require("moment");


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
//PRODUCTO POR ID 
const ObtenerProducto = async(req,res)=>{
    const productoSoloId= req.body.productoId;
    
    const productoSolo= await ProductoSchema.findById(productoSoloId).populate({
        path:"colores",
        populate:{
            path:"tallas"
        }
    })
   
    res.json({
        ok:true,
        msg:"Obtener Producto",
        productoSolo
    })
    
}


const CrearNuevoProducto= async (req,res=response) =>{

 

  
    
    
    
    const {
        nombre,
        categoriaGeneral,
        descripcion,
        materiales,
        genero,
        sku,
        linkStore,

        precioMayor,
        precio,
        categoria,
        coloresb,
        tallasb,
        stock
    } = req.body;

 

    
    try{


       console.log("tallas",tallasb)
       console.log("stock",stock)
    
      let tallasbu0= await tallasb.map(i=>{
          if (typeof(i)!=="object"){
              return [i]
          }else{
              return i
          }
      })
      
      let stockbu0= await stock.map(i=>{
          if (typeof(i)!=="object"){
              return [i]
          }else{
              return i
          }
      })

    console.log("t",tallasbu0)
    console.log("s",stockbu0)
    
      

    let tallasbu= await tallasbu0.map(i=>{
        return (i.filter(e=>{
            return (e!=="undefined" && e!=="")
        }))
    })

    let stocku= await stockbu0.map(i=>{
    return (i.filter(e=>{
        return (e!=="undefined" && e!=="")
    }))
    })


    console.log("t1",tallasbu)
    console.log("s1",stocku)
    let stockTotal=0;
    for(let i=0;i<req.files.length;i++){
       
        for(let o of stocku[i]){
            stockTotal=stockTotal+parseInt(o);
        }


    }
        
        
    const productoNuevo = new ProductoSchema({
        nombre,
        categoriaGeneral,
        descripcion,
        materiales,
        sku,
        linkStore,
        precioMayor,
        precio,
        categoria,
        stockTotal,
        coloresb
    })
    
       
    const productoGuardado = await productoNuevo.save();

    
    
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

const AnadirVenta =async (req,res)=>{

    console.log(req.body)

    let {idProductoVenta,idColoresVenta,idTallas,numeroVentas}=req.body;

    const producto=await ProductoSchema.findById(idProductoVenta[0]);

    const colorDelProducto= await colores.findById(idColoresVenta[0]);

    //const tallasDelProducto= await tallas.findById(idTallas);
    idTallas=idTallas.filter(i=>{
        return (i!==null && i!=="" )
    })
    numeroVentas=numeroVentas.filter(i=>{
        return (i!==null && i!=="" )
    })
    

    console.log(numeroVentas)
    
    let sumaNumeroVentas=0
    
    for(let i of numeroVentas){
        console.log(i)
        sumaNumeroVentas=sumaNumeroVentas+parseInt(i)
    }
    
    console.log("SumaNumeroVentas",sumaNumeroVentas)
    //---------nuevo stock total
    let nuevoStockTotal= parseInt(producto.stockTotal)-sumaNumeroVentas
    
    console.log("nuevoStockTotal",nuevoStockTotal)
    console.log("stocktotal",producto.stockTotal)
    
    //actualizar stock Total

    console.log("producto",producto)
    let nuevoProducto={
        ...producto._doc,
        stockTotal:nuevoStockTotal
    }
    
    const nuevoProductoSchema=await ProductoSchema.findByIdAndUpdate(idProductoVenta[0],nuevoProducto)
    
    //----------nuevo stock individual

    for (let i=0;i<idTallas.length;i++){

        let tallaProducto = await tallas.findById(idTallas[i]);
    

        let nuevoStock = tallaProducto.stock - parseInt(numeroVentas[i])

        let nuevaTallaProducto = {
            ...tallaProducto._doc,
            stock:nuevoStock
        
        }
        
       
       
       const tallaActualizada= await tallas.findByIdAndUpdate(idTallas[i],nuevaTallaProducto)
    
       console.log(tallaActualizada)
       
       const ahora= moment().format('MMMM Do YYYY, h:mm:ss a');
   
       
   
       const venta = new VentasModelSchema({
           fechaVenta: ahora,
           productoVendido: idProductoVenta[0],
           colorProductoVendido:idColoresVenta[0],
           tallaProductoVendido:idTallas[i],
           cantidadVendida: parseInt(numeroVentas[i])

   
       })

       await venta.save()

    }   
    
    
    
    
    
    
    return res.json({
        ok:true,
        msg:"Venta Añadida",
        
    })

    
    
}

    
const leerVentas = async(req,res)=>{

    //poner de parametro fecha
    
    
    const ventas =await VentasModelSchema.find()
    .populate({path:"productoVendido"})
    .populate({path:"colorProductoVendido"})
    .populate({path:"tallaProductoVendido"})





    return res.json({
        ok:true,
        msg:"Ventas",
        ventas
    })
}    
    
    
    




module.exports={
    leerVentas,
    AnadirVenta,
    ObtenerProductos,
    ObtenerProducto,
    CrearNuevoProducto,
    ActualizarProducto,
    EliminarProducto,
    AñadirImagenesProducto
}
