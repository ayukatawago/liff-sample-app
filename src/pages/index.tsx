import type { Liff } from '@line/liff'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({ liff, liffError }) => {
  return (
    <div>
      <Head>
        <title>LIFF App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>create-liff-app</h1>
        {liff && <p>LIFF init succeeded.</p>}
        {liffError && (
          <>
            <p>LIFF init failed.</p>
            <p>
              <code>{liffError}</code>
            </p>
          </>
        )}
        <a href='https://developers.line.biz/ja/docs/liff/' target='_blank' rel='noreferrer'>
          LIFF Documentation
        </a>
        <h2>LIFF sandwich test</h2>
        <ul>
          <li><a href='line://app/test-liffsandwich/normal?target_uri=https%3A%2F%2Fliff.line.me%2F1656508316-k7jNojXm'>Normal</a></li>
          <li><a href='line://app/test-liffsandwich/whitelisted?target_uri=https%3A%2F%2Fliff.line.me%2F1656508316-k7jNojXm'>Whitelisted</a></li>
        </ul>
      </main>
    </div>
  )
}

export default Home
