const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

//middleware connection to frontend
app.use(cors());
app.use(express.json());

//dgNfsO5shtO1GjW


app.get('/', (req, res) => {
  res.send('Hello World!')
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Bookstore-server:dgNfsO5shtO1GjW@cluster0.fylaw3y.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    //connect client to the server
    const bookCollections = client.db("BookInventory").collections("books");
    
    // insert a book to db : post method   
    //////////////////////////////////////////
    app.post("/upload-book" , async(req , res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    })

    
    
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})