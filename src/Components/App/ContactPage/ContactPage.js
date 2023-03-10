import React from 'react';
import CompanyLocations from '../ReusableComponents/CompanyLocations';
import ContactBox from './ContactBox';
import styles from './styles.module.css';

function Contact() {
    return(
        <section>
            <ContactBox/>
            <CompanyLocations/>
        </section>
    )
}

export default Contact;