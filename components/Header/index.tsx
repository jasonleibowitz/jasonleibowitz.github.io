import Link from 'next/link';
import { NavLink } from './NavLink';

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
        <NavLink href="/about">About</NavLink>
        <NavLink href="/lists">Lists</NavLink>
        <NavLink href="/photos">Photos</NavLink>
        <NavLink href="/posts">Posts</NavLink>
      </div>
    </div>
  );
}
