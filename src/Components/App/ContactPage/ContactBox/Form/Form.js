import React from 'react';
import Inputs from './Inputs';
import UsersMessage from './UsersMessage';
import styles from './styles.module.css';

function Form() {

    const handleSubmit = () => {

    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <Inputs type='text' placeholder='Name'/>
            <Inputs type='email' placeholder='Email Address' errorMessage='Please use a valid email address'/>
            <Inputs type='tel' placeholder='Phone' errorMessage='Please use a valid phone #' pattern='([0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4})|(\+[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4})'/>
            <UsersMessage />
            <input type='submit' className={styles.submit}/>
        </form>
    )
}

export default Form;