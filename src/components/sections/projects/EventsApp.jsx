import React from 'react';
import styles from './Projects.module.scss';
import projectImage from './../../../files/projectsImages/eventsApp/events.png';
import ProjectButton from './../../buttons/ProjectButtons';
import { motion } from 'framer-motion';

export default function EventsApp() {
    return (
        <div className={styles.project}>
            <div className={styles.textWrapper}>
                <div className={styles.description} n>
                    <h2> Event register</h2>
                    <div className={styles.technologies}>
                        <p>SASS</p>
                        <p>MUI</p>
                        <p>React</p>
                        <p>NodeJS</p>
                        <p>MySQL</p>
                        <p>ExpressJS</p>
                    </div>

                    <p>
                        This app was my final project for the Code Academy
                        course. It consists of 3 parts - database, server, and
                        client. The purpose of the app is to allow companies
                        engaged in the organization of events to register new
                        events and add/edit/delete guests of the particular
                        event.
                    </p>
                    <p>
                        All CRUD operations were used and data is saved in
                        database. It also has a registration and login page with
                        back-end authentication/authorization on the server side
                        using the JWT token, passwords are saved in the database
                        hashed with BCRIPT, form validation using JOI, and for
                        routing EXPRESS npm package was used.
                    </p>
                    <div className={styles.projectButtons}>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/sarunas2022/React-app-Events'
                        >
                            <ProjectButton
                                text='View source code'
                                styling='projectButton'
                            />
                        </a>
                        <a target='_blank' rel='noreferrer' href='#'>
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
