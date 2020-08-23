import { FunctionComponent } from 'react';
import styles from './styles.module.scss';

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
        <h3>{title}</h3>
        {roles.map(({ startDate, endDate, role }) => (
          <p className={styles.role}>
            {role}
            <span>{startDate} - {endDate}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
