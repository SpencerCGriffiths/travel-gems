import styles from './page.module.css'
import run from '@/utils/db';

export default async function Home() {
  let documents;

  run()
  .then((res) => {
    documents = res;
    console.log(documents)
  })

  return (
    <main className={styles.main}>
      <h1>Home Page!</h1>
      {documents ? documents.map((doc) => {
        return <p>{doc.place_name}</p>
      }) : null}
    </main>
  )
}
