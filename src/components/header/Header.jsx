import React from 'react';
import styles from './header.module.scss';
import photo from '../../files/croped.jpg';

export default function Header() {
    return (
        <div id='home' className={styles.container}>
            <img className={styles.photo} src={photo} alt='' />
            <div className={styles.headerText}>
                <h1>Hi, my name is Šarūnas.</h1>
                <h2>I'm junior front-end developer</h2>
            </div>
        </div>
    );
}
