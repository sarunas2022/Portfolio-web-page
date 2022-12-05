import styles from './Contacts.module.scss';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import emailIcon from '../../../files/email.svg';

export default function Contacts() {
    // use state to store values from input field
    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    // setting error value to state
    const [error, setError] = useState('');
    console.log(error);
    // Setting input value to useState
    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    };
    useEffect(() => {}, [error]);

    // This function  is used on form submit to send input data to  emailJS
    const sendEmail = async (e) => {
        e.preventDefault();
        // checking if all required fields has value
        if (!values.user_name || !values.user_email || !values.message) {
            // if not saving error message for each of the input fields
            if (!values.user_name) {
                setError((prev) => ({
                    ...prev,
                    name_error: 'Name is required*',
                }));
            }
            if (!values.user_email) {
                setError((prev) => ({
                    ...prev,
                    email_error: 'Email is required*',
                }));
            }
            if (!values.message) {
                setError((prev) => ({
                    ...prev,
                    message_error: 'Message is required*',
                }));
            }
            // if all input fields are filled, proceeding with email through emailJS
        } else {
            try {
                await emailjs.sendForm(
                    'service_q8skhcu',
                    'template_21t456c',
                    e.target,
                    '75Is36MYrzkkr0LrL'
                );
                // setting input values and errors back to '' to clear input fields after email is successfully sent
                setValues('');
                setError('');
            } catch (err) {
                console.log(err);
            }
        }
    };
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
                            // As a value setting a current set value, so after form submit it clears the field
                            value={values.user_name}
                            type='text'
                            name='user_name'
                            // if there is an empty field after form submit, placeholder displays error message,
                            // else just e normal placeholder text
                            placeholder={
                                error.name_error ? error.name_error : 'Name'
                            }
                        />
                        <input
                            onChange={handleChange}
                            value={values.user_email}
                            type='email'
                            name='user_email'
                            placeholder={
                                error.email_error ? error.email_error : 'Email'
                            }
                        />
                        <textarea
                            value={values.message}
                            onChange={handleChange}
                            name='message'
                            placeholder={
                                error.message_error
                                    ? error.message_error
                                    : 'Message'
                            }
                        />
                        <button type='submit' value='Send'>
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
