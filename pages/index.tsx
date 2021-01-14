import { useState } from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import styles from './index.module.scss';

import { SocialIcon } from 'components';
import Typography from 'components/Typography';

const avatarImageMap = {
  twitter: '/assets/images/avatar-twitter.png',
  github: '/assets/images/avatar-github.png',
  linkedin: '/assets/images/avatar-linkedin.png',
  default: '/assets/blog/authors/jason.jpg',
}

const { Title, Text } = Typography;

export default function Home({ className }) {
  const [avatarImage, setAvatarImage] = useState(avatarImageMap.default);
  const handleSetDefaultAvatar = () => setAvatarImage(avatarImageMap.default);

  return (
    <>
      <Head>
        <title>Jason Leibowitz - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classNames(className, styles.content)}>
        <div className={styles.headShotSocialSection}>
          <img className={styles.avatar} src={avatarImage} />
        </div>
        <Title className={styles.name} level={1}>Jason Leibowitz</Title>
        <Title className={styles.title} level={2}>Senior Software Engineer</Title>
        <Text>Hi! I build things for the web.</Text>
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
            href="/assets/leibowitz_resume.pdf" 
            icon='resume'
          />
        </div>
      </main>
    </>
  );
}
