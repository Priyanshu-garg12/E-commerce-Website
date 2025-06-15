const express = require('express');
const { addnewsupplemet, getallproducts, getsingleproduct, deleteproducts, updateproduct } = require('../Controllers/Supplement'); // Import the controller

const supplementsrouter = express.Router();

supplementsrouter.post("/create_newsupp", addnewsupplemet);
supplementsrouter.get("/get_allsupp", getallproducts); 
supplementsrouter.get("/get_allsupp/:id", getsingleproduct);
supplementsrouter.get("/deleteproduct/:id", deleteproducts)
supplementsrouter.post("/update/:id", updateproduct )

module.exports =  supplementsrouter; 