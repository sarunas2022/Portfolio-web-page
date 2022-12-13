import React from 'react';
import styles from './NavBar.module.scss';
import { motion } from 'framer-motion';

export default function NavLinks(props) {
    // variables for li items animation using framer-motion
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };
    return (
        <motion.ul
            className={styles.links}
            initial={{ x: -40 }}
            animate={{ x: 0 }}
        >
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.05 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a href='#home'>Home</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.1 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a href='#skills'>Skills</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.2 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a href='#projects'>Latest work</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a href='#about'>About me</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.4 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a href='#contacts'>Contact me</a>
            </motion.li>
        </motion.ul>
    );
}
