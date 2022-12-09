import React from 'react';
import styles from './Projects.module.scss';
import NFTLandingPage from './NFTLandingPage';
import SplitBills from './SplitBills';

export default function Projects() {
    return (
        <section id='projects' className={styles.projects}>
            <h1>PROJECTS</h1>
            <div className={styles.wrapper}>
                <SplitBills />
                <NFTLandingPage />
            </div>
        </section>
    );
}
