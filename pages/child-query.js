import Head from 'next/head'
import {
  equalTo,
  limitToFirst,
  limitToLast,
  startAt,
  startAfter,
  endAt,
  endBefore
} from 'firebase/database'
import styles from '../styles/Home.module.css'
import useQuery from '../hooks/useQuery'

const Home = () => {
  const users = useQuery({
    path: 'users',
    type: 'child',
    child: 'random',
    queries: [startAfter(true), endBefore('')]
  })

  console.log(users, 'Start At False')

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Query Firebase</a>
        </h1>
        <button style={{ background: 'red', padding: 8 }}>
          Get Query later
        </button>
      </main>

    </div>
  )
}

export default Home
