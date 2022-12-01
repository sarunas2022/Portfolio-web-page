import styles from './Contacts.module.scss';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacts() {
    const formRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_q8skhcu',
                'template_21t456c',
                formRef.current,
                '75Is36MYrzkkr0LrL'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    formRef.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <section id='contacts' className={styles.contacts}>
            <h1>CONTACT ME</h1>
            <p>Lets get in touch!</p>
            <div className={styles.contactsWrapper}>
                <div className={styles.contactsForm}>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <input
                            type='text'
                            name='user_name'
                            placeholder='Name'
                        />
                        <input
                            type='email'
                            name='user_email'
                            placeholder='Email'
                        />
                        <textarea name='message' />
                        <button
                            type='submit'
                            value='Send'
                            placeholder='Message'
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className='contactsImage'>Some nice picture</div>
            </div>
        </section>
    );
}
