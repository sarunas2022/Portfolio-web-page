import React from 'react';
import styles from './NavBar.module.scss';

export default function NavLinks(props) {
    return (
        <ul className={styles.links}>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='#home'>Home</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='#about'>About Me</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='#skills'>Skills</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='#projects'>Latest work</a>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <a href='#contacts'>Contact me</a>
            </li>
        </ul>
    );
}
