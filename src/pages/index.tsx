import Head from 'next/head';
import { GetServerSideProps } from 'next';

import {  CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';


import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../Context/ChallengesContext';
import { CountdownProvider } from '../Context/CountdownContext';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props : HomeProps) {
  console.log(props);
   
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <CountdownProvider>
        <div className={styles.container}>
      
          <Head>
            <title>Início | Move.It</title>
          </Head>

          <ExperienceBar />

          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </div>
      </CountdownProvider>
    </ChallengesProvider>
  );
}

export const getServerSideProps : GetServerSideProps = async(ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies; 

  const user = {
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted: Number(challengesCompleted),
  }

  return {
    props: user
  }
}
