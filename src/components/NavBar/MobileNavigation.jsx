import React, { useState } from 'react';
import NavLinks from './NavLinks';
import styles from './NavBar.module.scss';
import { CgMenu, CgClose } from 'react-icons/cg';

export default function MobileNavigation() {
    // useState for hamburger button
    const [open, setOpen] = useState(false);
    const mobileNavClosed = () => setOpen(false);

    const hamburgerClosed = (
        <CgMenu
            className={styles.hamburger}
            size='2.5rem'
            color='white'
            onClick={() => setOpen(!open)}
        ></CgMenu>
    );
    const hamburgerOpened = (
        <CgClose
            className={styles.hamburger}
            size='2.5rem'
            color='white'
            onClick={() => setOpen(!open)}
        ></CgClose>
    );

    return (
        <nav className={styles.mobileNav}>
            <h1>ŠG.</h1>
            {open ? hamburgerOpened : hamburgerClosed}
            {open && (
                <NavLinks isMobile={true} closeMobileMenu={mobileNavClosed} />
            )}
        </nav>
    );
}
