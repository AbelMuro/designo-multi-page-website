import React from 'react';
import styles from './styles.module.css';

function UsersMessage() {

    /*make your event handlers and error messages here */
    return(
        <fieldset className={styles.inputContainer}>
            <textarea type='text' className={styles.textField} placeholder='Message'>
            </textarea>            
        </fieldset>

    )
}

export default UsersMessage;