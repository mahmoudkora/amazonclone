const mongoose = require('mongoose');

const dbConnection = ()=>{
 mongoose.connect(process.env.DB_URL).then((conn)=>{
    console.log(`db connection on ${conn.connection.host}`);
}).catch((err)=>{
    console.log(`database filed to connection ${err} `);
})
}
module.exports = dbConnection;