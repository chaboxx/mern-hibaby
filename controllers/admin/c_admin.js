

const UsuarioAdmin = require("../../models/admin/admin_model");

const bcrypt= require("bcryptjs");

//const token= require("jsonwebtoken");

const {generarAJwt} = require("../../helpers/admin/Ajwt");


const LoginSuperUsuario = async (req,res) =>{

    // REQ = PEDIDO , RES= RESPUESTA

    const { user_admin,contraseña_admin} = req.body;

    try {
        


        let user =  await UsuarioAdmin.findOne({user_admin});

        if (!user){
            return res.status(400).json({
                ok:false,
                msg:"El administrador no tiene ese nick"
            })
        }


        //Confirmar passwords
        
        if (!(contraseña_admin===user.contraseña_admin)){
            
            return res.status(400).json({
                ok:false,
                msg:"Password incorrecto."
            }) 

        }

        const token= await generarAJwt(user.id,user.user_admin)



        res.status(201).json({
            ok:true,
            msg:"Login Exitoso",
            token,
            uid:user.id,
            name:user.user_admin
            
        })


    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"Login no exitoso"
        })
        
    }

}


const CrearSuperUsuario = async (req,res) =>{

    const { user_admin,contraseña_admin } =req.body;

    try {
        
        let user = await UsuarioAdmin.findOne({user_admin});

        if (user){
            return res.status(400).json({
                ok:false,
                msg:"Un admin existe con ese nick."
            })
        }

        user = new UsuarioAdmin(req.body);

        await user.save();


        const token= await generarAJwt(user_admin,contraseña_admin)


        res.status(201).json({
            ok:true,
            msg:"Registro exitoso.",
            
        }) 

    } catch (error) {
        
        res.status(500).json({
            ok:false,
            msg:"Crear super usuario incorrecto."
        })


    }
    
}

const ObtenerUsuarios = async(req,res) =>{



    const usuario= await UsuarioAdmin.find();

    res.json({
        ok:true,
        msg:"obtener usuarios admins",
        usuario
    })
}

module.exports={
    LoginSuperUsuario,
    CrearSuperUsuario,
    ObtenerUsuarios

};
