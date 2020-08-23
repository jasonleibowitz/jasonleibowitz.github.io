import Link from 'next/link';
import styles from './styles.module.scss';

export default function Header() {
	return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>
          <span className={styles.mark}>></span>
          <span>$ cd /home/</span>
          <span className={styles.cursor}></span>
        </a>
      </Link>
      <div className={styles.links}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/lists"><a>Lists</a></Link>
        <Link href="/photos"><a>Photos</a></Link>
        <Link href="/posts"><a>Blog</a></Link>
      </div>
    </div>
  );
}
