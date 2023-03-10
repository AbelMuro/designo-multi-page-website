import React from 'react';
import styles from './styles.module.css';
import Form from './Form';

function ContactBox() {
    return(
        <section className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Contact Us
                </h1>
                <p className={styles.desc}>
                    Ready to take it to the next level? 
                    Let’s talk about your project or idea and 
                    find out how we can help your business grow. 
                    If you are looking for unique digital experiences 
                    that’s relatable to your users, drop us a line.
                </p>
            </div>
            <Form/>
        </section>
    )
}

export default ContactBox;