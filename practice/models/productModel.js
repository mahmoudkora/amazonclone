const mongoose = reqiure('mongoose');

const productSchema = new mongoose.Schema({


    discount:{ type:Number,
        hasdiscount:Boolean,
        default:false
      },
})