import { FunctionComponent } from 'react';
import { Typography } from '../Typography';
import styles from './styles.module.scss';

const { Title } = Typography;
interface SkillListProps {
  skills: string[];
  title: string;
}

export const SkillList: FunctionComponent<SkillListProps> = ({ title, skills }) => {
  return (
    <div className={styles.container}>
      <Title level={3}>{title}</Title>
      <ul className={styles.list}>
        {skills.map(skill => <li>{skill}</li>)}
      </ul>
    </div>
  );
}
