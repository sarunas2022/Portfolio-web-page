import React from 'react';
import styles from './header.module.scss';
import photo from '../../files/cropped.jpg';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <div id='home' className={styles.container}>
            <motion.img
                className={styles.photo}
                src={photo}
                alt='photo'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <div className={styles.headerText}>
                <h1>Hi, my name is Šarūnas.</h1>
                <h2>I'm front-end developer you are looking for.</h2>
            </div>
            <div className={styles.navButton}>
                <a href='#skills'>
                    <button className={styles.navTo}>
                        <h6>SKILLS</h6>
                        <IoIosArrowDown size='2rem' />
                    </button>
                </a>
            </div>
        </div>
    );
}
