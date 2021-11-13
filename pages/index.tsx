import type { NextPage } from 'next'
import Head from 'next/head'
import { IceGrid } from '../components/iceGrid'
import { isOdd } from '../utils/isOdd'
import { useMemo, useState } from 'react'
import styles from '../styles/Home.module.css'

type Hexagon = [number, number];

function getNeighbors([x, y]: Hexagon): Hexagon[] {
  const yOffset = isOdd(x) ? 0 : -1;

  return [
    [x, y - 1],
    [x + 1, y + yOffset],
    [x + 1, y + 1 + yOffset],
    [x, y + 1],
    [x - 1, y + 1 + yOffset],
    [x - 1, y + yOffset],
  ]
}

const hexagonList: Hexagon[] = [
  [0,5], [0,6], [0,7], [0,8], [0,9], 
  [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9], 
  [2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9],
  [3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9],
  [4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [4,9],
  [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8], 
  [6,2], [6,3], [6,4], [6,5], 
  [7,2],
];

const startHexagons: Hexagon[] = [
  [1,9], [2,9], [3,9], [4,9], 
];

const endHexagons: Hexagon[] = [
  [2,0], [3,0], [4,0], [4,1], [5,1], 
];

type Level = {
  hexagonList: Hexagon[];
  startHexagons: Hexagon[];
  endHexagons: Hexagon[];
}

const level: Level = {hexagonList, startHexagons, endHexagons};

function generatePath({hexagonList, startHexagons, endHexagons}: Level): Hexagon[] {
  const startHexagonIndex = Math.floor(Math.random() * startHexagons.length);
  const startHexagon = startHexagons[startHexagonIndex];

  const endHexagonIndex = Math.floor(Math.random() * endHexagons.length);
  const endHexagon = endHexagons[endHexagonIndex];

  return [startHexagon, endHexagon, ...getNeighbors([4 ,4])];
}

const Home: NextPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const path = useMemo(() => generatePath(level), []);
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
            <IceGrid hexagonList={hexagonList} path={path} />
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
