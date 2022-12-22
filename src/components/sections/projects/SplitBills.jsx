import React from 'react';
import styles from './Projects.module.scss';
import projectImage from './../../../files/projectsImages/splitBills/splitBills.png';
import ProjectButton from './../../buttons/ProjectButtons';
import { motion } from 'framer-motion';

export default function SplitBills() {
    return (
        <div className={styles.project}>
            <div className={styles.textWrapper}>
                <div className={styles.description}>
                    <h2> Split Bills</h2>
                    <div className={styles.technologies}>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>NodeJS</p>
                        <p>MySQL</p>
                        <p>ExpressJS</p>
                    </div>

                    <p>
                        This simple system allows registered users to join
                        groups and share bills. The system consists of 3 parts -
                        database, server, and client.
                    </p>
                    <p>
                        It has a registration and a login page with a back-end
                        authentication/authorization on the server side using
                        JWT token, passwords are saved in the database hashed
                        with BCRIPT npm package, form validation using JOI npm
                        package. For routing express npm package was used.
                    </p>
                    <p>
                        Primary attention here was put on the back-end part, so
                        just minimal styling was added.
                    </p>
                    <div className={styles.projectButtons}>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/sarunas2022/Project-Split-Bills'
                        >
                            <ProjectButton
                                text='View source code'
                                styling='projectButton'
                            />
                        </a>
                        {/* <a target='_blank' rel='noreferrer' href='#'>
                            <ProjectButton
                                text='Visit the website'
                                styling='projectButton'
                            />
                        </a> */}
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
