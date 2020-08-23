import classNames from 'classnames';
import Head from 'next/head';
import { Experience, ExperienceProps } from 'components/Experience';
import { SkillList } from 'components/SkillList';
import { differenceInYears } from 'date-fns';

import styles from './about.module.scss';

const frontendSkills = ['TypeScript', 'React', 'Redux', 'Webpack', 'Jest', 'Cypress'];
const backendSkills = ['Node', 'Python', 'Express', 'NestJS', 'MySQL', 'Postgres', 'MongoDB'];
const infraSkills = ['Docker', 'Kubernetes', 'Jenkins', 'CircleCI', 'Ansible', 'NGINX'];
const designSkills = ['Sketch', 'Zeplin', 'Figma', 'Photoshop'];

const experiences: ExperienceProps[] = [
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

export default function About({ className }) {
  const yearsInNYC = differenceInYears(new Date(), new Date(2005, 7, 1));

  return (
    <>
      <Head>
        <title>Who is Jason Leibowitz?</title>
      </Head>
      <main className={classNames(className, styles.about)}>
        <section>
          <h1>About</h1>
          <p>Hi there! My name is Jason Leibowitz and I'm a full stack software engineer who loves designing and developing responsive web application. I am originally from Virginia Beach, but have called NYC home since for over {yearsInNYC} years. I am currently a senior software engineer at <a href="https://capsule.com/" target="_blank" rel="noopener noreferrer">Capsule Pharmacy</a>. Previously I worked at <a href="https://www.invitae.com/en/">Invitae</a>, <a href="https://www.todaytix.com/">TodayTix</a>, <a href="https://reserve.com/">Reserve</a>, and <a href="https://tigerspike.com/">Tigerspike</a>.</p>
          <p>I graduated from <a href="https://www.nyu.edu/">New York University</a> with a degree in History and prior to my development career I spent a few years working in non-profit at <a href="https://www.jewishfederations.org/">The Jewish Federations of North America</a>.</p>
        </section>

        <section className={styles.skills}>
          <h2>Skills</h2>
          <SkillList title="Frontend" skills={frontendSkills} />
          <SkillList title="Backend" skills={backendSkills} />
          <SkillList title="Infra" skills={infraSkills} />
          <SkillList title="Design" skills={designSkills} />
        </section>

        <section className={styles.experience}>
          <h2>Experience</h2>
          {experiences.map(({ company, roles, title }) => (
            <Experience
              company={company}
              roles={roles}
              title={title}
            />
          ))}

        </section>
      </main>
    </>
  );
}
