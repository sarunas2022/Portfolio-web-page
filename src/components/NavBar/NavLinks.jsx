import React from 'react';
import styles from './NavBar.module.scss';

export default function NavLinks(props) {
    return (
        <ul className={styles.links}>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='#'>Home</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='#'>About Me</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='#'>Skills</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='#'>Latest work</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='#'>Contact me</a>
            </li>
        </ul>
    );
}
