import React from 'react';
import styles from './Buttons.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function NavigationButton(props) {
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
            <p>{props.text}</p>
            <IoIosArrowDown size='1.5rem' />
        </motion.button>
    );
}
