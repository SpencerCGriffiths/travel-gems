import { MongoClient } from 'mongodb';
export default async function run() {
    const uri = "mongodb+srv://jholt55:CQYb5mxOaIGtkv3o@travelgems.foefb4c.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("TravelGemsDB");
    const coll = db.collection("locations");
    // find code goes here
    const cursor = coll.find()

    let arr = []

    for await (const doc of cursor) {
        arr.push(doc)
    }

    return arr
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
