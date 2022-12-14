import React from 'react';
import styles from './Footer.module.scss';
import { SlSocialLinkedin } from 'react-icons/sl';
import { HiOutlineDocument } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';
import CV from '../../files/CV.pdf';
import { motion } from 'framer-motion';
export default function footer() {
    return (
        <div className={styles.wrapper}>
            <footer className={styles.contactIcons}>
                <motion.a
                    whileHover={{ scale: 1.3 }}
                    href='https://www.linkedin.com/in/s-grabauskas'
                    target='_blank'
                    rel='noreferrer'
                >
                    <SlSocialLinkedin className={styles.icons} size='2.5rem' />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.3 }}
                    href='https://github.com/sarunas2022'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsGithub className={styles.icons} size='2.5rem' />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.3 }}
                    href={CV}
                    download='MyCV.pdf'
                >
                    <HiOutlineDocument className={styles.icons} size='2.5rem' />
                </motion.a>
            </footer>
        </div>
    );
}
