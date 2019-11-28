const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const productSchema = new Schema({ 
    name: {type:String},
    type: {type:String}
});


module.exports = mongoose.model('Product',productSchema,'products');