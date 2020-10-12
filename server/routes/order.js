const express = require('express');
const router = express.Router();
const Order = require("../model/order");
const Product = require("../model/product");
const checkAuth = require("../middleware/check-auth");
const User = require("../model/user");

const nodemailer = require("nodemailer");


function _send(transporter, email,products) {
    return new Promise((resolve, reject) => {
        let productsForEmail = '';
        for(let product of products){
            productsForEmail+=product.name +' '+product.type;
        }
        const text = `Ceci est une confirmation de votre commande: ${productsForEmail}`;
        let mailOptions = {
        from: "menahemgershovitz@gmail.com",
        to: email,
        subject: "Merci d'avoir commande sur CleanService",
        text:text
        };

        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return reject(error);
        }
        resolve(info);
        });
    });
  }
  
function sendEmail(user, products) { //envoi le mail au client pour lui confirmer sa commande
    let transporter;
    let transporterOptions = { //quel service de mail il va utiliser pour l'envoi
        service: "gmail"
    };
    transporterOptions.auth = { //de qui va etre envoyer l'email
        user: "menahemgershovitz@gmail.com",
        pass: "85214789"
    };

    transporter = nodemailer.createTransport(transporterOptions); //creer un genre de facteur 
    return _send(transporter, user.email, products);
}


router.post('/', async (req,res)=>{
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
            user:userId,
            address:address,
            products:allProductsId
        })
        await order.save();
        console.log(order)
        const user = await User.findById(userId);
        await sendEmail(user,products);
        return res.status(201).send(order)
    }
    catch(err){
        console.log(err);
        return res.status(500).send(`Error creating order: ${err}`);
    }
})


router.get('/', async (req,res)=>{ //va chercher tout les orders de la base de donne
    try{
       const orders = await Order.find({}).populate("user products")  //transform l'id de user et product en objet
       console.log(orders)
       return res.status(200).json(orders)
    }
    catch(err){
        console.log(err);
        return res.status(500).send(`Error getting order: ${err}`);
    }
})

module.exports = router;