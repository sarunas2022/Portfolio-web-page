import React from 'react';
import styles from './About.module.scss';
import gamerImage from '../../../files/ninja.svg';

export default function About() {
    return (
        <section id='about' className={styles.about}>
            <h1>ABOUT ME</h1>
            <div className={styles.wrapper}>
                <div className={styles.illustration}>
                    <img src={gamerImage} alt='gamer' />
                </div>

                <div className={styles.aboutMe}>
                    <p>
                        If I would have to describe myself in one sentence, I
                        would say that I am very easy to get along with, funny
                        and always at the center of everything.
                    </p>
                    <p>
                        At the end of 2021, I took a leap and started to learn
                        modern app development at Code Academy. I enjoy coding -
                        constantly facing problems and finding solutions become
                        an excellent motivation for me - it seems like a
                        never-ending process that drives me forward to improve
                        every day.
                    </p>
                    <p>
                        When I'm not coding, I'm usually playing video games,
                        testing out a new recipe, watching basketball, spending
                        time with friends and family and traveling whenever I
                        can.
                    </p>
                </div>
            </div>
        </section>
    );
}
