const mongoose = require("mongoose");

const DBconnection = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((conn) => {
      console.log(`db running well ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(`db not working well${err}`);
    });
};

module.exports = DBconnection;
