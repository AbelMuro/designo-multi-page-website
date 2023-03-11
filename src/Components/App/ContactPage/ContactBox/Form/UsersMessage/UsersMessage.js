import React, {useRef, useState, useEffect} from 'react';
import styles from './styles.module.css';
import images from './images'

function UsersMessage() {
    const errorMessageRef = useRef();
    const textAreaRef = useRef();
    const [text, setText] = useState();

    const handleBlur = (e) => {
        const isValid = e.target.checkValidity();

        if(isValid)
            errorMessageRef.current.style.display = '';
        else
            errorMessageRef.current.style.display = 'flex';
    }

    const handleInvalid = () => {
        textAreaRef.current.setCustomValidity(' ');
        errorMessageRef.current.style.display = 'flex';
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        if(!text) return;

        textAreaRef.current.setCustomValidity('');
        errorMessageRef.current.style.display = '';
    }, [text])


    return(
        <fieldset className={styles.inputContainer}>
            <textarea 
                type='text' 
                value={text}
                onChange={handleChange}
                onInvalid={handleInvalid}
                className={styles.textField} 
                placeholder='Message' 
                onBlur={handleBlur}
                required
                ref={textAreaRef}
                >
            </textarea>    
            <div className={styles.errorMessage} ref={errorMessageRef}>
                Can't be empty<img src={images['iconError']} className={styles.errorIcon}/>
            </div>        
        </fieldset>

    )
}

export default UsersMessage;