import React from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import styles from './NavBar.module.scss';

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <Navigation />
            <MobileNavigation />
            <div className={styles.test}></div>
        </div>
    );
}
