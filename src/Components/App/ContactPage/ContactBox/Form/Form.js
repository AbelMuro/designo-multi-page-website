import React from 'react';
import Inputs from './Inputs';
import styles from './styles.module.css';

function Form() {

    const handleSubmit = () => {

    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <Inputs type='text' placeholder='Name'/>
            <Inputs type='email' placeholder='Email Address'/>
            <Inputs type='tel' placeholder='Phone'/>
            <Inputs type='text' placeholder='Your Message'/>
            <input type='submit' className={styles.submit}/>
        </form>
    )
}

export default Form;