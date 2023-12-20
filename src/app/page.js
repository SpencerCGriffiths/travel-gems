"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import run from '@/utils/db';

export default function Home() {
  const [locationData, setLocationData] = useState([])

  useEffect(() => {
    run().then((res) => {
      setLocationData(res)
    })
  }, [])

  console.log(locationData)

  return (
    <main className={styles.main}>
      <h1>Home Page!</h1>
    </main>
  )
}
