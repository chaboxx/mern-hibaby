
const mongoose = require("mongoose");

const express = require("express");

const Genero = mongoose.model("GeneroSchema");

const tallasSchema =  new mongoose.Schema({
    nombre:String,
    tallas:[String]
})


module.exports= mongoose.model("TallasSchema",tallasSchema);




