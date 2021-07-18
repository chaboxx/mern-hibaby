
const { Router} = require("express");

const router = Router();

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: 'TEST-354157865202322-070813-c2dcc6df5968f4cab575f39b73c2e5db-201337907'
});




router.post("/create_preference", (req, res) => {

	let preference = {
		items: [{
			title: req.body.description,
			unit_price: Number(req.body.price),
			quantity: Number(req.body.quantity),
		}],
		back_urls: {
			"success": "http://localhost:3001",
			"failure": "http://localhost:8080/feedback",
			"pending": "http://localhost:8080/feedback"
		},
		auto_return: 'approved',
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
      
			return res.json({ok:true,id :response.body.id})
     


		}).catch(function (error) {
			console.log(error);
		});
});


module.exports=router;


