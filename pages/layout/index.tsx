import Head from 'next/head';
import { ReactNode } from 'react'
import Navbar from '../navbar'
import styles from '../../styles/Home.module.css'
import Image from 'next/image';

interface LayoutProps {
  children: ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Next Js | Crash Course</title>
        <meta name="description" content="Next Js Crash Course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ margin: 10 }}>
        <Navbar />
        <main className={styles.main}>
          {children}
        </main>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
