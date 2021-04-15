const express= require("express");
const { validationResult } = require("express-validator");

const {response}= require("express");
const usuario = require("../models/usuario");


const bcrypt= require("bcryptjs");

const {generarJwt} = require("../helpers/jwt");


const crearUsuario= async (req,res=response) =>{
    

    const { email , password } = req.body;



    try{
        
        let user = await usuario.findOne({email});
        
        console.log(user);
        
        if (user){
            return res.status(400).json({
                ok:false,
                msg:"Un usuario existe con ese correo"
            })
        }


        const usuario_ = new usuario(req.body);

        //Encriptar contraseña

        const salt = bcrypt.genSaltSync();

        usuario_.password=bcrypt.hashSync(password,salt);


        await usuario_.save();

        //GENERAR JWT

        const token= await generarJwt(usuario_.id,usuario_.name);




        res.status(201).json({
            ok:true,
            msg:"registro",
            token
        })


    }catch(error){
        
        console.log(error);

        res.status(500).json({

            ok:false,
            msg:"Por favor hable el administrador"
        });

    }
       
}

const login = async (req,res) =>{


    
    const {email,password} = req.body;


    try{
        
        let user = await usuario.findOne({email});
        
       
        
        if (!user){
            return res.status(400).json({
                ok:false,
                msg:"Un usuario no existe con ese email"
            })
        }

        //Confirmar passwords
        
        const validPassword =bcrypt.compareSync(password,user.password);

        if (!validPassword){

            return res.status(400).json({
                ok:false,
                msg:"Password incorrecto"
            })
        }

        //Generar nuestro JWT

        const token= await generarJwt(user.id,user.name)

        res.json({
            ok:true,
            uid:user.id,
            name:user.name,
            token
        })


    }catch(error){
        
        console.log(error);

        res.status(500).json({

            ok:false,
            msg:"Por favor hable el administrador"
        });

    }

    









    
}

const renovarUsuario = async(req,res) =>{
    

    const uid= req.uid;
    const name=req.name;

    //generar nuevo JWT

    const token= await generarJwt();

    res.json({
        ok:true,
        uid,
        name,
        token
    })
}
    



module.exports={
    crearUsuario,
    renovarUsuario,
    login
}

