import React, { useState } from 'react';
import NavLinks from './NavLinks';
import styles from './NavBar.module.scss';
import { CgMenu, CgClose } from 'react-icons/cg';

export default function MobileNavigation() {
    const [open, setOpen] = useState(false);
    const mobileNavClosed = () => setOpen(false);
    const hamburgerClosed = (
        <CgMenu
            className={styles.hamburger}
            size='3rem'
            onClick={() => setOpen(!open)}
        ></CgMenu>
    );
    const hamburgerOpened = (
        <CgClose
            className={styles.hamburger}
            size='3rem'
            onClick={() => setOpen(!open)}
        ></CgClose>
    );

    return (
        <nav className={styles.mobileNav}>
            {open ? hamburgerOpened : hamburgerClosed}
            {open && (
                <NavLinks isMobile={true} closeMobileMenu={mobileNavClosed} />
            )}
        </nav>
    );
}
