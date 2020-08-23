import classNames from 'classnames';
import Head from 'next/head';
import { differenceInYears } from 'date-fns';

import { Experience, SkillList } from 'components';
import { frontendSkills, backendSkills, infraSkills, designSkills, experiences } from 'data/personalInfo';
import styles from './about.module.scss';

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
