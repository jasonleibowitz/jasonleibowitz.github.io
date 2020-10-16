import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

interface SkillListProps {
  skills: string[];
  title: string;
}

export const SkillList: FunctionComponent<SkillListProps> = ({ title, skills }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <ul className={styles.list}>
        {skills.map(skill => <li>{skill}</li>)}
      </ul>
    </div>
  );
}
