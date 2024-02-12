console.log('hello');
const express = require('express');
const port = 10000;
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:'false'}))
app.use('/product',require('./routes/routes'))

app.listen(port,()=>{
  console.log('server works ' + port);
});


