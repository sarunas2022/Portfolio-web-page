import React from 'react';
import styles from './Projects.module.scss';
import projectImage from './../../../files/projectsImages/PageReplica/tabletVersion.png';

export default function NFTLandingPage() {
    return (
        <div className={styles.project}>
            <div className={styles.description} n>
                <h2> NFT Landing page replica</h2>
                <div className={styles.technologies}>
                    <p>HTML</p>
                    <p>CSS</p>
                </div>

                <p>
                    This is one of my first projects. the goal was to create
                    responsive page replica using mobile first approach. Only
                    HTML and CSS used. Focus was on responsiveness and testing
                    HTML and CSS knowledge so links and buttons don't do
                    anything
                </p>
            </div>
            <div className={styles.visualization}>
                <img src={projectImage} alt='img' />
                <div className={styles.projectButtons}>
                    <button>View source code</button>
                    <button>Visit the website</button>
                </div>
            </div>
        </div>
    );
}
