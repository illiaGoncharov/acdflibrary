import React, { useState } from 'react';
import styles from './SubscribeForm.module.css'; // Подключите стили
import arrow from '../../images/arrow-right [footer].svg';

function SubscribeForm() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    
    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);

        if (!newEmail) {
            setEmailError('Введите адрес электронной почты');
        } else if (!/\S+@\S+\.\S+/.test(newEmail)) {
            setEmailError('Email указан некорректно');
        } else {
            setEmailError('');
        }
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || emailError) {
            return;
        }

        try {
            const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSCDBx7iMPpBuztOVnWBJlThipT1koxiNQZt16VBy-6jaTWKxpH7ogeCpNslTVc5jhudyS1DV3i0PWj/pubhtml?gid=242990640&single=true', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `entry.YOUR_ENTRY_ID=${encodeURIComponent(email)}`,
            });

            if (response.ok) {
                console.log('Email submitted successfully');
                setEmailError('');
                setSubmissionSuccess(true);
            } else {
                console.log('Email submission failed');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };


    return (
        <form className={styles.input_container} onSubmit={handleSubmit}>
            <input
                className={`${styles.input} ${emailError ? styles.input_error : ''}`}
                type="email"
                placeholder="Ваш e-mail"
                value={email}
                onChange={handleEmailChange}
            />
            {emailError && <p className={styles.error_message}>{emailError}</p>}
            {submissionSuccess && <p className={styles.success_message}>Вы подписались!</p>}
            <div className={styles.submit_container}>
                <button className={styles.input_submit} type="submit">
                    Подписаться
                    <img className={styles.arrow} src={arrow} alt=">" />
                </button>
            </div>
        </form>
    );
}

export default SubscribeForm;
