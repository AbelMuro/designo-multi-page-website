import React from 'react';
import CompanyLocations from '../ReusableComponents/CompanyLocations';
import ContactBox from './ContactBox';
import images from './images';
import styles from './styles.module.css';

function Contact() {
    return(
        <section>
            <div className={styles.container}>
                <img src={images['leafBg']} className={styles.leaf}/>
            </div>
            <ContactBox/>
            <CompanyLocations/>
        </section>
    )
}

export default Contact;