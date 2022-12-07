import React from 'react';
import styles from './Projects.module.scss';

export default function Projects() {
    return (
        <section id='projects' className={styles.projects}>
            <h1>PROJECTS</h1>
            <div className={styles.wrapper}>
                <div className={styles.project}>
                    <div className={styles.description} n>
                        <h2>Project name</h2>
                        <p>technologies used</p>
                        <p>This is project description</p>
                    </div>
                    <div className={styles.visualization}>
                        <img src='https://picsum.photos/200' alt='img' />
                        <div className={styles.projectButtons}>
                            <button>View source code</button>
                            <button>Visit the website</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
