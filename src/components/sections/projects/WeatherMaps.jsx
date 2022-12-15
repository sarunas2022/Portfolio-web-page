import React from 'react';
import styles from './Projects.module.scss';
import projectImage from './../../../files/projectsImages/weatherMaps/WeatherMapsApp.png';
import ProjectButton from './../../buttons/ProjectButtons';

export default function WeatherMaps() {
    return (
        <div className={styles.project}>
            <div className={styles.textWrapper}>
                <div className={styles.description} n>
                    <h2> Weather and maps app</h2>
                    <div className={styles.technologies}>
                        <p>HTML</p>
                        <p>SASS</p>
                        <p>REACT</p>
                        <p>NodeJS</p>
                        <p>ExpressJS</p>
                        <p>Axios</p>
                        <p>OpenWeatherMap API</p>
                        <p>JavaScript Geolocation API </p>
                        <p>Leaflet</p>
                    </div>

                    <p>
                        This app is for checking weather anywhere in the world
                        and it also shows map of chosen location just for fun.
                    </p>
                    <p>
                        Weather data is collected using OpenWeatherMap API - it
                        gets data in back-end using axios. For embedded maps I
                        used openSource React leaflet maps library. I also
                        integrated geolocation, so if user opens the app and
                        agrees to show his location, app displays maps and
                        weather data for current locations.
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
