import React from 'react';
import styles from './header.module.scss';
import photo from '../../files/cropped.jpg';
import { motion } from 'framer-motion';
import Wave from './Wave';
import NavigationButton from '../buttons/NavigationButton';

export default function Header() {
    return (
        <div id='home' className={styles.container}>
            <Wave />
            <div className={styles.wrapper}>
                <motion.img
                    className={styles.photo}
                    src={photo}
                    alt='photo'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div
                    className={styles.headerText}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1>Hi, my name is Šarūnas.</h1>
                    <h2>I'm front-end developer you are looking for.</h2>
                    <a href='#skills'>
                        <NavigationButton text='Skills' styling='navButton' />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
