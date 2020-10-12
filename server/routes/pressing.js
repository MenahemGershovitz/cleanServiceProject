const express = require('express');
const router = express.Router();
const Pressing = require('../model/pressing');
const Product = require('../model/product');

router.post('/pressingForm', async(req, res) => {

    try {

        const { name, adress, phoneNumber, products } = req.body;

        const allProductsOfPressingId = [];

        for (let newProduct of products) {

            const { clothes, type, price } = newProduct;
            const product = new Product({
                clothes: clothes,
                type: type,
                price: price
            })
            const newProductCreated = await product.save();

            allProductsOfPressingId.push(newProductCreated._id)
        }

        const userPressing = new Pressing({
            name,
            adress,
            phoneNumber,
            products: allProductsOfPressingId
        })

        console.log(userPressing)
        await userPressing.save();
        res.send('pressing created')

    } catch (err) {
        res.status(500).send(err);
    }
})

router.post('/detailsPressing', async(req, res) => {
    try {
        const allProductsOfPressingId = await Pressing.findById(req.body.id).populate("products");

        return res.status(200).json(allProductsOfPressingId);

    } catch (err) {
        res.status(500).send('server error');
    }

})

router.get('/allPressings', async(req, res) => { //va chercher tout les pressing de la base de donne
    try {
        const pressings = await Pressing.find({}).populate("pressing products") //transform l'id de user et product en objet

        return res.status(200).json(pressings)
    } catch (err) {
        console.log(err);
        return res.status(500).send(`Error getting order: ${err}`);
    }
})

module.exports = router;