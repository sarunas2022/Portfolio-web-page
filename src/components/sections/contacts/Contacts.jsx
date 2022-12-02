import styles from './Contacts.module.scss';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import emailIcon from '../../../files/email.svg';

export default function Contacts() {
    // use state to store values from imput field
    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    // Setting input value to useState
    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    };

    // This function  is used on form submit to send input data to  emailJS
    const sendEmail = async (e) => {
        e.preventDefault();
        if (!values.user_name || !values.user_email || !values.message) {
            console.log('All field bust be filed');
        } else {
            try {
                const response = await emailjs.sendForm(
                    'service_q8skhcu',
                    'template_21t456c',
                    e.target,
                    '75Is36MYrzkkr0LrL'
                );
                console.log(response.text);
                setValues({
                    user_name: '',
                    user_email: '',
                    message: '',
                });
            } catch (err) {
                console.log(err);
            }
        }
    };

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs
    //         .sendForm(
    //             'service_q8skhcu',
    //             'template_21t456c',
    //             formRef.current,
    //             '75Is36MYrzkkr0LrL'
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //                 formRef.current.reset();
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //             }
    //         );
    // };
    return (
        <section id='contacts' className={styles.contacts}>
            <h1>CONTACT ME</h1>
            <p>Lets get in touch!</p>
            <div className={styles.contactsWrapper}>
                <div className={styles.contactsForm}>
                    <form onSubmit={sendEmail}>
                        <input
                            // on input changes using function handle change to update state for values
                            onChange={handleChange}
                            // As a value seting a current set value, so after form submit it clears the field
                            value={values.user_name}
                            type='text'
                            name='user_name'
                            placeholder='Name'
                        />
                        <input
                            onChange={handleChange}
                            value={values.user_email}
                            type='email'
                            name='user_email'
                            placeholder='Email'
                        />
                        <textarea
                            value={values.message}
                            onChange={handleChange}
                            name='message'
                        />
                        <button
                            type='submit'
                            value='Send'
                            placeholder='Message'
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className={styles.contactsImage}>
                    <img src={emailIcon} alt='img' />
                </div>
            </div>
        </section>
    );
}
