const express = require('express');
const router = express.Router();
const Order = require("../model/order");
const Product = require("../model/product");
const checkAuth = require("../middleware/check-auth");



router.post('/',checkAuth, async (req,res)=>{
    try{
        const {userId,address,products} = req.body;
        const allProductsId = [];
        for(let newProduct of products){
            const {name,type} = newProduct;
            const product = new Product({
                name:name,
                type:type
            })
            const newProdCreated = await product.save();
            allProductsId.push(newProdCreated._id)
        }
        const order = new Order({
            userId:userId,
            address:address,
            productsId:allProductsId
        })
        await order.save();
        return res.status(201).send(order)
    }
    catch(err){
        console.log(err);
        return res.status(500).send(`Error creating order: ${err}`);
    }
})

module.exports = router;