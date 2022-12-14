import React from 'react';
import styles from './Projects.module.scss';
import projectImage from './../../../files/projectsImages/weatherMaps/WeatherMapsApp.png';
import ProjectButton from './../../buttons/ProjectButtons';
import { motion } from 'framer-motion';

export default function WeatherMaps() {
    return (
        <div className={styles.project}>
            <div className={styles.textWrapper}>
                <div className={styles.description}>
                    <h2> Weather and maps app</h2>
                    <div className={styles.technologies}>
                        <p>HTML</p>
                        <p>SASS</p>
                        <p>REACT</p>
                        <p>NodeJS</p>
                        <p>ExpressJS</p>
                        <p>Axios</p>
                        <p>Leaflet</p>
                        <p>OpenWeatherMap API</p>
                        <p>JavaScript Geolocation API </p>
                    </div>

                    <p>
                        This app is for checking the weather anywhere in the
                        world and it also shows the map of chosen location.
                    </p>
                    <p>
                        Weather data is collected using OpenWeatherMap API - it
                        gets data in the back-end using Axios. For embedded maps
                        I used the openSource React leaflet maps library. I also
                        integrated geolocation, so if a user opens the app and
                        agrees to show his location, the app displays maps and
                        weather data for the current location.
                    </p>
                    <p>
                        <span>
                            Note: server-side is hosted for free in Render.
                            After 15 min of inactivity it goes to sleep. Please
                            allow 15-30s to spin up.
                        </span>
                    </p>
                    <div className={styles.projectButtons}>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/sarunas2022/Weather_app'
                        >
                            <ProjectButton
                                text='View source code'
                                styling='projectButton'
                            />
                        </a>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://sg-wathermap.netlify.app'
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
