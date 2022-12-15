import React from 'react';
import styles from './Projects.module.scss';
import projectImage from './../../../files/projectsImages/eventsApp/events.png';
import ProjectButton from './../../buttons/ProjectButtons';

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
                        This app was my final projects for Code Academy course.
                        It consists of 3 parts - database, server and client.
                        The purpose of the app is to allow companies engaged in
                        the organization of events to register new events and
                        add/edit/delete guest of particular event.
                    </p>
                    <p>
                        All CRUD operations where used and data is saved in
                        database. It also has registration and login page with
                        back-end authentication/authorization in server side
                        using JWT token, passwords are saved in database hashed
                        with BCRIPT, form validation using JOI and for routing
                        EXPRESS npm package was used.
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
                <img src={projectImage} alt='img' />
            </div>
        </div>
    );
}
