const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb+srv://NaylaDeLis:admin@cluster0.dhuagyc.mongodb.net/?retryWrites=true&w=majority";

async function getAllMovieUC() {
  const client = new MongoClient(uri);
  try {
    const database = client.db('Cluster0');
    const movies = database.collection('movies');
    const movie = await movies.find({status: "UC"}).toArray();
    return movie;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function getAllMovieNP() {
  const client = new MongoClient(uri);
  try {
    const database = client.db('Cluster0');
    const movies = database.collection('movies');
    const movie = await movies.find({status: "NP"}).toArray();
    return movie;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function getMovieById(movieID) {
  const client = new MongoClient(uri);
  try {
    const database = client.db('Cluster0');
    const movies = database.collection('movies');
    const movie = await movies.find({_id : new ObjectId(movieID)}).toArray();
    return movie;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function getAllPromo() {
  const client = new MongoClient(uri);
  try {
    const database = client.db('Cluster0');
    const promos = database.collection('promo');
    const promo = await promos.find().toArray();
    return promo;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = {
  getAllMovieUC,
  getAllMovieNP,
  getAllPromo,
  getMovieById
}