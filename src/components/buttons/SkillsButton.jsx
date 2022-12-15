import React from 'react';
import styles from './Buttons.module.scss';
import { motion } from 'framer-motion';

export default function SkillsButton(props) {
    return (
        <motion.button
            className={styles[props.styling]}
            onClick={props.toggle}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
        >
            {props.text}
        </motion.button>
    );
}
