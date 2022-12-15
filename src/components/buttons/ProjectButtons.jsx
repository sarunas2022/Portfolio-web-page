import React from 'react';
import styles from './ProjectButton.module.scss';
import { motion } from 'framer-motion';

export default function ProjectButtons(props) {
    return (
        <motion.button
            className={styles[props.styling]}
            whileHover={{
                scale: 1.1,
                backgroundColor: 'white',
                color: 'rgb(52, 229, 127)',
            }}
            transition={{ duration: 0.5 }}
        >
            {props.text}
        </motion.button>
    );
}
