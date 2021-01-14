import type { AppProps } from 'next/app';
import Header from 'components/Header';
import '../styles/globals.scss'
import styles from './app.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Header />
      <Component className={styles.content} {...pageProps} />
    </div>
  );
}

export default MyApp
