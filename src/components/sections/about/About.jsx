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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Similique ut, nemo facilis nulla neque modi
                        dignissimos illum ipsum excepturi praesentium nisi
                        aliquam omnis magni molestiae veritatis voluptas quia
                        nihil commodi ab, officiis sit aperiam aut obcaecati?
                        Optio nisi repudiandae dolore ipsum, repellendus nam
                        adipisci laboriosam possimus beatae quibusdam quia
                        exercitationem.
                    </p>
                </div>
            </div>
        </section>
    );
}
