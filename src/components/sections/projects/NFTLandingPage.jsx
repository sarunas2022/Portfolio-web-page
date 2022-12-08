import React from 'react';
import styles from './Projects.module.scss';
import projectImage from './../../../files/projectsImages/PageReplica/tabletVersion.png';

export default function NFTLandingPage() {
    return (
        <div className={styles.project}>
            <div className={styles.textWrapper}>
                <div className={styles.description} n>
                    <h2> NFT Landing page replica</h2>
                    <div className={styles.technologies}>
                        <p>HTML</p>
                        <p>CSS</p>
                    </div>

                    <p>
                        This is one of my first projects. the goal was to create
                        responsive page replica using mobile first approach.
                        Only HTML and CSS used. Focus was on responsiveness and
                        testing HTML and CSS knowledge so links and buttons not
                        suppose to work.
                    </p>
                    <div className={styles.projectButtons}>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/sarunas2022/main-page-replica'
                        >
                            <button>View source code</button>
                        </a>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://sarunas2022.github.io/main-page-replica/'
                        >
                            <button>Visit the website</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.visualization}>
                <img src={projectImage} alt='img' />
            </div>
        </div>
    );
}
