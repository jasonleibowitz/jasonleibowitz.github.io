import { useState } from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

const avatarImageMap = {
  twitter: '/assets/images/avatar-twitter.png',
  github: '/assets/images/avatar-github.png',
  linkedin: '/assets/images/avatar-linkedin.png',
  default: '/assets/blog/authors/jason.jpg',
}

export default function Home({ className }) {
  const [avatarImage, setAvatarImage] = useState(avatarImageMap.default);

  return (
    <div className={className}>
      <Head>
        <title>Jason Leibowitz's Portfolio Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.headShotSocialSection}>
          <img className={styles.avatar} src={avatarImage} />
          <div className={styles.socialIconWrapper}>
            <img className={styles.socialIcon} onMouseEnter={() => setAvatarImage(avatarImageMap.twitter)} onMouseLeave={() => setAvatarImage(avatarImageMap.default)} src="/assets/icons/twitter.svg" />
            <img className={styles.socialIcon} onMouseEnter={() => setAvatarImage(avatarImageMap.github)} onMouseLeave={() => setAvatarImage(avatarImageMap.default)} src="/assets/icons/github.png" />
            <img className={styles.socialIcon} onMouseEnter={() => setAvatarImage(avatarImageMap.linkedin)} onMouseLeave={() => setAvatarImage(avatarImageMap.default)} src="/assets/icons/linkedin.png" />
          </div>
        </div>
        <h1>Jason Leibowitz</h1>
        <p>Hi! I build things for the web.</p>
      </main>
    </div>
  );
}
