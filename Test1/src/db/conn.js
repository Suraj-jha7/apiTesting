const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/bookList")
.then( () => {
  console.log("connection succesfull..");
})
.catch( () => {
  console.log("connection failed");
});
