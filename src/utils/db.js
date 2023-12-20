import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://jholt55:CQYb5mxOaIGtkv3o@travelgems.foefb4c.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
export default async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("TravelGemsDB");
    const coll = db.collection("locations");
    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    return await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
