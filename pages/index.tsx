import Head from 'next/head';

import styles from './index.module.scss';

export default function Home({ className }) {
  return (
    <div className={className}>
      <Head>
        <title>Jason Leibowitz's Portfolio Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Jason Leibowitz</h1>
        <p>Hi! I build things for the web.</p>
      </main>
    </div>
  );
}
