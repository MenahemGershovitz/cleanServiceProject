const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mongoose.set('useCreateIndex', true);

const pressingSchema = new Schema({

    name: { type: String },
    adress: { type: String },
    phoneNumber: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]

})

module.exports = mongoose.model('Pressing', pressingSchema)