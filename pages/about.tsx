import classNames from 'classnames';
import Head from 'next/head';
import { Experience } from 'components/Experience';
import { differenceInYears } from 'date-fns';

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

        <section>
          <h2>Skills</h2>
          <div className={styles.skills}>
            <div className={styles.skill}>
              <h3>Frontend</h3>
              <ul className={styles.list}>
                <li>TypeScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Webpack</li>
                <li>Jest</li>
                <li>Cypress</li>
              </ul>
            </div>

            <div className={styles.skill}>
              <h3>Backend</h3>
              <ul className={styles.list}>
                <li>Node</li>
                <li>Python</li>
                <li>Express</li>
                <li>NestJS</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div className={styles.skill}>
              <h3>Infra</h3>
              <ul className={styles.list}>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Jenkins</li>
                <li>Ansible</li>
                <li>NGINX</li>
              </ul>
            </div>

            <div className={styles.skill}>
              <h3>Design</h3>
              <ul className={styles.list}>
                <li>Sketch</li>
                <li>Zeplin</li>
                <li>Figma</li>
                <li>Photoshop</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.experience}>
          <h2>Experience</h2>
          <Experience
            company="capsule"
            roles={[{
              endDate: 'Present',
              role: 'Senior Software Engineer',
              startDate: "Dec '19"
            }]}
            title="Capsule Pharmacy"
          />

          <Experience
            company="invitae"
            roles={[{
              endDate: "Dec '19",
              role: 'Senior Software Engineer',
              startDate: "Nov '18"
            }]}
            title="Invitae"
          />

          <Experience
            company="todaytix"
            roles={[{
              endDate: "Nov '18",
              role: 'Senior Software Engineer',
              startDate: "Mar '18"
            }, {
              endDate: "Mar '18",
              role: "Software Engineer",
              startDate: "Jun '17"
            }]}
            title="TodayTix"
          />

          <Experience
            company="reserve"
            roles={[{
              endDate: "Jun '17",
              role: 'Software Engineer',
              startDate: "Mar '16"
            }]}
            title="Reserve"
          />

          <Experience
            company="tigerspike"
            roles={[{
              endDate: "Mar '16",
              role: 'Software Engineer',
              startDate: "Aug '15"
            }, {
              endDate: "Aug '15",
              role: 'Associate Software Engineer',
              startDate: "Oct '14"
            }]}
            title="TigerSpike"
          />

        </section>
      </main>
    </>
  );
}
