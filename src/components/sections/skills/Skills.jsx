import React, { useState } from 'react';
import styles from './Skills.module.scss';
import { motion } from 'framer-motion';
import SkillsButton from './../../buttons/SkillsButton';

// front-end skills images
import htmlIcon from '../../../files/techIcons/front-end/html.png';
import cssIcon from '../../../files/techIcons/front-end/css.svg';
import JSIcon from '../../../files/techIcons/front-end/javaScript.png';
import reactIcon from '../../../files/techIcons/front-end/react-icon.png';
import sassIcon from '../../../files/techIcons/front-end/sass.png';
import muiIcon from '../../../files/techIcons/front-end/mui.png';
import bootstrapIcon from '../../../files/techIcons/front-end/bootstrap.png';
// tool skills images
import gitHubIcon from '../../../files/techIcons/tools/Github.png';
import postmanIcon from '../../../files/techIcons/tools/postman.webp';
import gitIcon from '../../../files/techIcons/tools/Git.png';
import vsIcon from '../../../files/techIcons/tools/vs.png';

// back-end skills images
import nodeIcon from '../../../files/techIcons/back-end/node.webp';
import mySQLIcon from '../../../files/techIcons/back-end/mysql.png';
import mongoIcon from '../../../files/techIcons/back-end/mongodb.png';
import restIcon from '../../../files/techIcons/back-end/rest.png';

export default function Skills() {
    // states
    const [frontSkills, setFrontSkills] = useState(true);
    const [tools, setTools] = useState(false);
    const [backSkills, setbackSkills] = useState(false);
    console.log(frontSkills);

    // switching between states to show chosen skills
    const toggleFront = () => {
        setFrontSkills(true);
        setTools(false);
        setbackSkills(false);
    };

    const toggleSkills = () => {
        setFrontSkills(false);
        setTools(true);
        setbackSkills(false);
    };
    const toggleBack = () => {
        setFrontSkills(false);
        setTools(false);
        setbackSkills(true);
    };

    // animation styles for skills
    const animateFrom = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };
    // front-end skills container
    const frontOpen = (
        <motion.div
            className={styles.wrapper}
            initial={animateFrom}
            animate={animateTo}
        >
            <h1>Front-End</h1>
            <div className={styles.skillsBox}>
                <div className={styles.skill}>
                    <img src={htmlIcon} alt='HTML5' />
                    <p>HTML5</p>
                </div>
                <div className={styles.skill}>
                    <img src={cssIcon} alt='CSS3' />
                    <p>CSS3</p>
                </div>
                <div className={styles.skill}>
                    <img src={JSIcon} alt='JavaScript' />
                    <p>JavaScript</p>
                </div>
                <div className={styles.skill}>
                    <img src={reactIcon} alt='React' />
                    <p>React</p>
                </div>
                <div className={styles.skill}>
                    <img src={sassIcon} alt='Sass' />
                    <p>Sass</p>
                </div>
                <div className={styles.skill}>
                    <img src={muiIcon} alt='MUI' />
                    <p>Material UI</p>
                </div>
                <div className={styles.skill}>
                    <img src={bootstrapIcon} alt='Bootstrap' />
                    <p>Bootstrap</p>
                </div>
            </div>
        </motion.div>
    );
    //  Tool skills container
    const toolsOpened = (
        <motion.div
            className={styles.wrapper}
            initial={animateFrom}
            animate={animateTo}
        >
            <h1>Tools</h1>
            <div className={styles.skillsBox}>
                <div className={styles.skill}>
                    <img src={gitHubIcon} alt='GitHub' />
                    <p>GitHub</p>
                </div>
                <div className={styles.skill}>
                    <img src={postmanIcon} alt='Postman' />
                    <p>Postman</p>
                </div>
                <div className={styles.skill}>
                    <img src={gitIcon} alt='Git' />
                    <p>Git</p>
                </div>
                <div className={styles.skill}>
                    <img src={vsIcon} alt='visual studio' />
                    <p>Visual Studio</p>
                </div>
            </div>
        </motion.div>
    );
    // back-end skills container
    const backOpened = (
        <motion.div
            className={styles.wrapper}
            initial={animateFrom}
            animate={animateTo}
        >
            <h1>Back-end</h1>
            <div className={styles.skillsBox}>
                <div className={styles.skill}>
                    <img src={nodeIcon} alt='NodeJS' />
                    <p>NodeJS</p>
                </div>
                <div className={styles.skill}>
                    <img src={mySQLIcon} alt='MySQL' />
                    <p>MySQL</p>
                </div>
                <div className={styles.skill}>
                    <img src={mongoIcon} alt='mongoDB' />
                    <p>MongoDB</p>
                </div>
                <div className={styles.skill}>
                    <img src={restIcon} alt='rest' />
                    <p>RESTful API</p>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id='skills' className={styles.skills}>
            <h1>SKILLS</h1>
            <div className={styles.container}>
                <div className={styles.buttonGroup}>
                    <SkillsButton
                        text='Front-end'
                        styling={frontSkills ? 'buttonClicked' : 'skillsButton'}
                        toggle={toggleFront}
                    ></SkillsButton>
                    <SkillsButton
                        text='Tools'
                        styling={tools ? 'buttonClicked' : 'skillsButton'}
                        toggle={toggleSkills}
                    ></SkillsButton>
                    <SkillsButton
                        text='Back-end'
                        styling={backSkills ? 'buttonClicked' : 'skillsButton'}
                        toggle={toggleBack}
                    ></SkillsButton>
                </div>
                {frontSkills && frontOpen}
                {tools && toolsOpened}
                {backSkills && backOpened}
            </div>
        </section>
    );
}
