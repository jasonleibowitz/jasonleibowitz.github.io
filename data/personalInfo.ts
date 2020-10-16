import { ExperienceProps } from 'components';

export const frontendSkills = ['TypeScript', 'React', 'Redux', 'Webpack', 'Jest', 'Cypress'];
export const backendSkills = ['Node', 'Python', 'Express', 'NestJS', 'MySQL', 'Postgres', 'MongoDB'];
export const infraSkills = ['Docker', 'Kubernetes', 'Jenkins', 'CircleCI', 'Ansible', 'NGINX'];
export const designSkills = ['Sketch', 'Zeplin', 'Figma', 'Photoshop'];

export const experiences: ExperienceProps[] = [
  {
    company: 'capsule',
    roles: [{endDate: 'Present', role: 'Senior Software Engineer', startDate: "Dec '19"}],
    title: 'Capsule Pharmacy'
  },
  {
    company: 'invitae',
    roles: [{endDate: "Dec '19", role: 'Senior Software Engineer', startDate: "Nov '18"}],
    title: 'Invitae'
  },
  {
    company: 'todaytix',
    roles: [
      {endDate: "Nov '18", role: 'Senior Software Engineer', startDate: "Mar '18"},
      {endDate: "Mar '18", role: 'Software Engineer', startDate: "Jun '17"}
    ],
    title: 'TodayTix'
  },
  {
    company: 'reserve',
    roles: [{endDate: "Jun '17", role: 'Software Engineer', startDate: "Mar '16"}],
    title: 'Reserve'
  },
  {
    company: 'tigerspike',
    roles: [
      {endDate: "Mar '16", role: 'Software Engineer', startDate: "Aug '15"},
      {endDate: "Aug '15", role: 'Associate Software Engineer', startDate: "Oct '14"}
    ],
    title: 'TigerSpike'
  }
]
