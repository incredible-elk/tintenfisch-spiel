import type { NextPage } from 'next'
import Head from 'next/head'
import { IceGrid } from '../components/iceGrid'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const hexagonList: [number, number][] = [
  [0,5], [0,6], [0,7], [0,8], [0,9], 
  [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9], 
  [2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9],
  [3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9],
  [4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [4,9],
  [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8], 
  [6,2], [6,3], [6,4], [6,5], 
  [7,2],
];

const Home: NextPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <>
      <Head>
        <title>Tintenfisch Spiel</title>
        <meta name="description" content="Ein lustiges Spiel für Kinder, Drachen und böse Schneemänner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          {isStarted ? 
            <IceGrid hexagonList={hexagonList} />
          :
            <div className={styles.box}>
              <div className={styles.boxChildren}>
                <p className={styles.description}>
                  Kannst du den Weg über&apos;s Eis wieder finden?
                </p>
                <button className={styles.button} onClick={() => setIsStarted(true)}>Start</button>
              </div>
            </div>
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <p> Created 2021 by {' '}
          <a
            href="https://github.com/incredible-elk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stephanie
          </a>
          {' '} & Bernhard
        </p>
      </footer>
    </>
  )
}

export default Home
