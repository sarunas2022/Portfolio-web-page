import React from 'react';
import styles from './Projects.module.scss';
import projectImage from './../../../files/projectsImages//QrCode/QRCode.png';
import ProjectButton from './../../buttons/ProjectButtons';
import { motion } from 'framer-motion';

export default function WeatherMaps() {
    return (
        <div className={styles.project}>
            <div className={styles.textWrapper}>
                <div className={styles.description}>
                    <h2> QR code generator</h2>
                    <div className={styles.technologies}>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>MUI</p>
                        <p>REACT</p>
                    </div>

                    <p>
                        This app is for generating QR codes from data you have
                        entered. Optionally you can download generated QR code
                        as an image.
                    </p>
                    <div className={styles.projectButtons}>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/sarunas2022/QR-code-gen'
                        >
                            <ProjectButton
                                text='View source code'
                                styling='projectButton'
                            />
                        </a>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://sg-qrcodegenerator.netlify.app'
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
