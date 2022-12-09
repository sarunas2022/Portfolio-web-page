import React from 'react';
import styles from './Projects.module.scss';
import projectImage from './../../../files/projectsImages/splitBills/splitBills.png';

export default function SplitBills() {
    return (
        <div className={styles.project}>
            <div className={styles.textWrapper}>
                <div className={styles.description} n>
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
                        This is simple system that allows registered users to
                        join groups and share bills. The system consists of 3
                        parts - database, server and client.
                    </p>
                    <p>
                        It has registration and login page with back-end
                        authentication/authorization in server side using JWT
                        token, passwords are saved in Database hashed with
                        BCRIPT npm package, form validation using JOI npm
                        package. For routing express npm package was used.
                    </p>
                    <p>
                        Main attention here was put on back-end part, so just
                        minimal styling was added.
                    </p>
                    <div className={styles.projectButtons}>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/sarunas2022/Project-Split-Bills'
                        >
                            <button>View source code</button>
                        </a>
                        <a target='_blank' rel='noreferrer' href='#'>
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
