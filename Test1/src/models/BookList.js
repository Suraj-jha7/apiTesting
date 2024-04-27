const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
  Title:{
    type:String,
    required:true,
  },
  author:String,
  copies:Number,
  available:Boolean
})

const BookNames = mongoose.model("BookNames",BookSchema);

module.exports = BookNames;

// const createDocument = async () => {
//   try{
//     const book1 = new BookName ({
//       Title: "Think and grow rich",
//       author : "Napolean hill",
//       copies:222244,
//       available:true
//     })
//    const result = await book1.save();
//    console.log(result);
//   }
//   catch(err){
//       console.log("error",err);
//   }
  
// }

// module.exports = BookList;