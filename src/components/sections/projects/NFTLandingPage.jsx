import React from 'react';
import styles from './Projects.module.scss';
import projectImage from './../../../files/projectsImages/PageReplica/dekstopversion.png';
import ProjectButton from './../../buttons/ProjectButtons';
import { motion } from 'framer-motion';

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
                        responsive page replica using a mobile-first approach.
                        Only HTML and CSS are used. The focus was on
                        responsiveness and testing HTML and CSS knowledge so
                        links and buttons not suppose to work.
                    </p>
                    <div className={styles.projectButtons}>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/sarunas2022/main-page-replica'
                        >
                            <ProjectButton
                                text='View source code'
                                styling='projectButton'
                            />
                        </a>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://sarunas2022.github.io/main-page-replica/'
                        >
                            <ProjectButton
                                text='Visit the website'
                                styling='projectButton'
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.visualization}>
                <motion.img
                    src={projectImage}
                    alt='img'
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </div>
    );
}
