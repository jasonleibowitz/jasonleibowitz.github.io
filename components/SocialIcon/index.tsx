import { FunctionComponent } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface SocialIconProps {
  href: string;
  icon: 'twitter' | 'github' | 'linkedin' | 'resume';
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
}

const socialIconMap = {
  twitter: 'twitter.svg',
  github: 'github.png',
  linkedin: 'linkedin.png',
  resume: 'resume.svg',
}

export const SocialIcon: FunctionComponent<SocialIconProps> = ({ href, icon, handleMouseEnter, handleMouseLeave }) => {
  return (
    <a className={styles.container} href={href} target="_blank" rel="noopener noreferrer">
      <img
        className={classNames(styles.image, {
          [styles.resumeHeight]: icon === 'resume'
        })} src={`/assets/icons/${socialIconMap[icon]}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </a>
  );
}
