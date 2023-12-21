import { MongoClient } from 'mongodb';
import styles from './page.module.css'
import run from '@/utils/db';
import Cliencomponent from './cliencomponent';

export default async function Home() {


  const uri = "mongodb+srv://jholt55:CQYb5mxOaIGtkv3o@travelgems.foefb4c.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  let documents = []
try {
  await client.connect();
  // database and collection code goes here
  const db = client.db("TravelGemsDB");
  const coll = db.collection("locations");
  // find code goes here
  const cursor = coll.find()

  for await (const doc of cursor) {
      documents.push(doc)
  }
} finally {
  // Ensures that the client will close when you finish/error
  await client.close();
}

  
  // let documents;

  // run()
  // .then((res) => {
  //   documents = res;
  //   console.log(documents)
  // })

  return (
    <main className={styles.main}>
     <Cliencomponent location={documents}></Cliencomponent>
    </main>
  )
}
