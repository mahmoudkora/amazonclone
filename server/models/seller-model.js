const mongoose = require('mongoose');

sellerSchema = mongoose.Schema({
firstName:String,
lastName:String,
phone:Number,
email:String,
adress:{firstOne:String,lastOne:String},
brandName: String,
password:String,
rePassword:String,
id:{type: Date, default: Date.getTime()},
role:Number,
image:String,

})

let seller = mongoose.model('sellers',sellerSchema);
module.exports = seller;
