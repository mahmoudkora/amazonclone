
const { json } = require('express');
let Mongoose = require('mongoose');
let schema =  Mongoose.Schema;
productSchema = new schema({
mainCategory:{type:String},
spcialCategory:{type:String},
productName:{type:String},
price:{type:String},
quantity:{type:String,default:1},
imgs:{type:String},
rating:{type:String},
brandName:{type:String},
sku:Number,
comment:[{buyerName:String},
{text:String},
{rating:Number}
],

})

let product = Mongoose.model('products',productSchema)
module.exports = product;
