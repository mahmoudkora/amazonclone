
//name of schemamodel also that is used for call db
let product = require('./models/product-model');
let base_url = 'mongodb://localhost:27017/test';
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({extended:'false'}));
app.use(cors())

app.post('/createproduct', (req, ress)=> {
    mongoose.connect(base_url).then((res)=>{
        product.create(req.body)
        ress.status(200).send({massage:'product has been created'});
    })

})
app.get('/getproduct/:id', (req, ress)=> {
    mongoose.connect(base_url).then((res)=>{
        //need to _id primarykey
       product.findOne({_id:req.params.id}).then(product =>{
        ress.status(200).send({massage:"success",product:product});
       })

    })

})
app.post('/updateproduct/:id', (req, ress)=> {
    mongoose.connect(base_url).then((res)=>{
       product.findOneAndUpdate( {id:req.params.id} ,req.body).then(product=>{
        ress.status(200).send({massage:'product updated sucsses!',newProduct:product});
       })
    })
})


app.get('/allproduct', (req, ress)=> {
    mongoose.connect(base_url).then((res)=>{
   product.find({}).then(products=>{
    ress.status(200).send({massage:'sucsses!',allProduct:products});
    })
    })
})

app.post('/product/Category',(req, ress)=> {
    console.log(req.body.mainCategory);
    mongoose.connect(base_url).then((res)=>{
   product.find({'mainCategory':req.body.mainCategory}).then(products=>{
    ress.status(200).send({massage:'sucsses!',categoryProduct:products});
    })
    })
})

app.delete('/deleteproduct/:id', (req, ress)=> {
    let id = req.params.id
    mongoose.connect(base_url).then((res)=>{
        product.deleteOne({id:id}).then(res=>{
            console.log(res);
            ress.status(200).send({massage:'this item deleted!'});
        })
    })

})



app.get('/categoryNames', (req, ress)=> {
  mongoose.connect(base_url).then((res)=>{
 product.find({}).select('mainCategory -_id').then(names=>{

  ress.status(200).send({massage:'sucsses!',names:names});
  })
  })

  app.get('/brands',(req,ress)=>{
mongoose.connect(base_url).then((res)=>{
product.find({}).select('brandName -_id').then(products=>{
  ress.status(200).send({massage:'sucsses!',products:products});
})

})

  })


})




app.listen(port, ()=>{
console.log('server run started ' + port);
})

// https://stackoverflow.com/questions/27947468/express-js-save-image-on-server
//https://www.cronj.com/blog/upload-image-nodejs-expressjs-using-javascript/
