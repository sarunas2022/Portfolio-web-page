import React from 'react';
import NavLinks from './NavLinks';
import styles from './NavBar.module.scss';
export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <h1>ŠG.</h1>
            <NavLinks></NavLinks>
        </nav>
    );
}
