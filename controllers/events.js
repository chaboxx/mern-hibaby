const { response } = require("express");

const Evento= require("../models/evento");

const getEventos = async(req,res=response) =>{

    const eventos = await Evento.find().populate("user","name");




    res.json({
        ok:true,
        msg:"crearEventos",
        eventos
    })
}

const crearEvento= async (req,res=response) =>{

    

    const evento= new Evento(req.body);

    try{

        evento.user = req.uid;

        const eventoGuardado = await evento.save();

        console.log(evento.user)
        res.json({
            ok:true,
            evento:eventoGuardado
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"hable con el administrador"
        })
    }
}

const actualizarEvento= async (req,res=response) =>{

    const eventoId = req.params.id;

    const uid = req.uid;

    try{
        const evento = await Evento.findById( eventoId);
        if (!evento){
            return res.status(404).json({
                ok:false,
                msg:"Evento no existe con ese id"

            })
        }

        if (evento.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg:"No tiene privilegio de editar este evento"
            })
        }   

        const nuevoEvento={
            ...req.body,
            user:uid
        }

        const eventoActualizado= await Evento.findByIdAndUpdate(eventoId,nuevoEvento);


        res.json({
            ok:true,
            evento:eventoActualizado
        })


    }catch(error){

        console.log(error);

        res.status(500).json({
            ok:false,
            msg:"hable con el administrador"
        })

    }

   

}

const eliminarEvento= async (req,res=response) =>{

    const eventoId = req.params.id;

    const uid = req.uid;

    try{
        const evento = await Evento.findById( eventoId);
        if (!evento){
            return res.status(404).json({
                ok:false,
                msg:"Evento no existe con ese id"

            })
        }

        if (evento.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg:"No tiene privilegio de editar este evento"
            })
        }   

       

        await Evento.findByIdAndDelete(eventoId);


        res.json({
            ok:true,
            msg:"Borrado"
        })


    }catch(error){

        console.log(error);

        res.status(500).json({
            ok:false,
            msg:"hable con el administrador"
        })

    }
}

module.exports={
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}
