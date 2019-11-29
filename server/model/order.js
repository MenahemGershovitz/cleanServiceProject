const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const orderSchema = new Schema({ 
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    address:{type:String},
    products:[{ type: Schema.Types.ObjectId, ref: 'Product' }]
});


module.exports = mongoose.model('Order',orderSchema,'orders');