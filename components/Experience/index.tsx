import { FunctionComponent } from 'react';
import { Link } from 'next/link';
import { Typography } from '../Typography';
import styles from './styles.module.scss';

const { Title, Text } = Typography;

type Company = 'capsule' | 'invitae' | 'reserve' | 'tigerspike' | 'todaytix';
type Role = {
  endDate: string;
  role: string;
  startDate: string;
}

export interface ExperienceProps {
  company: Company;
  roles: Role[];
  title: string;
}

const companyIconMap = {
  capsule: 'capsule.jpg',
  invitae: 'invitae.png',
  reserve: 'reserve.png',
  tigerspike: 'tigerspike.png',
  todaytix: 'todaytix.png'
}

export const Experience: FunctionComponent<ExperienceProps> = ({ company, roles, title }) => {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={`/assets/icons/${companyIconMap[company]}`} />
      <div className={styles.info}>
        <Title className={styles.company} level={3}>{title}</Title>
        {roles.map(({ startDate, endDate, role }) => (
          <Text className={styles.role} key={role}>
            {role}
            <span>{startDate} - {endDate}</span>
          </Text>
        ))}
      </div>
    </div>
  );
}
