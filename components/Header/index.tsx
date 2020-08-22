import Link from 'next/link';
import styles from './styles.module.scss';

export default function Header() {
	return (
    <div className={styles.container}>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/posts"><a>Blog</a></Link>
    </div>
  );
}
