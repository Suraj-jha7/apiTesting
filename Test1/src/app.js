const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./db/conn');
const BookNames = require('./models/BookList');
const { get } = require('http');

app.use(express.json());
const createDocument = async () => {
  try{
    const book1 = new BookNames ({
      Title: "Think and grow rich",
      author : "Napolean hill",
      copies:222244,
      available:true
    })

    const result =await book1.save();
    console.log(result);
    console.log("this is work");
  }
  catch(err) {
    console.log("error is ",err);
  }
  }

  // createDocument();

app.get('/',  (req,res) => {
   res.send("hi this is working");

})

app.get('/books', async (req,res) => {
  const getbooks = await BookNames.find({});
  res.json(getbooks);
})

app.get('/books/id/:id', async (req,res) => {
  const getbook = await BookNames.find({_id:req.params.id});
  res.json(getbook);
})

app.get('/books/title/:Title', async (req,res) => {
  const getbook = await BookNames.find({Title:req.params.Title});
  res.json(getbook);
})

// app.get('/books/title/:Title', async (req, res) => {
//   try {
//     const getbook = await BookNames.find({ Title: req.params.Title });
//     if (!getbook) {
//       return res.status(404).json({ message: "Book not found" });
//     }
//     res.json(getbook);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

app.post("/books" ,async(req,res) => {
  console.log("this is req,body",req.body);
  const bookName = new BookNames(req.body);
  console.log("this is also working",bookName);
  const result = await bookName.save();
  console.log(result);
  res.json("data stored successfully!");
})

app.put("/book/id/:id", async (req,res) => {
    try{
      const id = req.params.id;
      const data = req.body;
      const result = await BookNames.findByIdAndUpdate(id,data,{new:true});
      console.log(result);
    }
    catch(err)
    {
      console.log("err");
    }
})

app.delete("/book/id/:id", async (req,res) => {
  try{
    const id = req.params.id;
    const result = await BookNames.findByIdAndDelete(id);
    console.log(result);
  }
  catch(err)
  {
    console.log("err",err);
  }
})


app.listen(port, () => {
  console.log("server is running successfully.. on port no:-",port);
}) 