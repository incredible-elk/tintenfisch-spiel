import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

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
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="260">
              <polygon className={styles.hexagon} points="60,26 45,52 15,52 0,26 15,0 45,0" ></polygon>
            </svg>
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
