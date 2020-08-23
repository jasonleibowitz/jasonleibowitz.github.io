import { useState } from 'react';
import Head from 'next/head';
import styles from './index.module.scss';

import { SocialIcon } from 'components/SocialIcon';

const avatarImageMap = {
  twitter: '/assets/images/avatar-twitter.png',
  github: '/assets/images/avatar-github.png',
  linkedin: '/assets/images/avatar-linkedin.png',
  default: '/assets/blog/authors/jason.jpg',
}

export default function Home({ className }) {
  const [avatarImage, setAvatarImage] = useState(avatarImageMap.default);
  const handleSetDefaultAvatar = () => setAvatarImage(avatarImageMap.default);

  return (
    <div className={className}>
      <Head>
        <title>Jason Leibowitz's Portfolio Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.headShotSocialSection}>
          <img className={styles.avatar} src={avatarImage} />
        </div>
        <h1>Jason Leibowitz</h1>
        <p>Hi! I build things for the web.</p>
        <div className={styles.socialIconWrapper}>
          <SocialIcon 
            href="https://twitter.com/jasonleibowitz" 
            icon='twitter'
            handleMouseEnter={() => setAvatarImage(avatarImageMap.twitter)} 
            handleMouseLeave={handleSetDefaultAvatar} 
          />

          <SocialIcon 
            href="https://github.com/jasonleibowitz" 
            icon='github'
            handleMouseEnter={() => setAvatarImage(avatarImageMap.github)} 
            handleMouseLeave={handleSetDefaultAvatar} 
          />

          <SocialIcon 
            href="https://www.linkedin.com/in/jasonleibowitz/" 
            icon='linkedin'
            handleMouseEnter={() => setAvatarImage(avatarImageMap.linkedin)} 
            handleMouseLeave={handleSetDefaultAvatar} 
          />

          <SocialIcon 
            href="http://leibowitz.me" 
            icon='resume'
          />

        </div>
      </main>
    </div>
  );
}
