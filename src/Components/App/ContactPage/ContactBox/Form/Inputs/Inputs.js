import React, {useRef, useState} from 'react';
import styles from './styles.module.css';
import images from './images';

function Inputs({type, placeholder, ...rest}) {
    const [text, setText] = useState('');
    const emptyErrorMessageRef = useRef();
    const emailErrorMessageRef = useRef();
    const inputRef = useRef()

    const handleFocus = () => {
        emptyErrorMessageRef.current.style.display = '';
    }

    const handleBlur = () => {
        const isValid = inputRef.current.checkValidity();

        if(isValid)
            emptyErrorMessageRef.current.style.display = '';
        else
            emptyErrorMessageRef.current.style.display = 'flex';        
    }

    const handleInvalid = () => {
        inputRef.current.setCustomValidity(' ');
        emptyErrorMessageRef.current.style.display = 'flex';  
    }   

    const handleChange = (e) => {
        setText(e.target.value);
    }



    return(
            <fieldset className={styles.inputContainer}>
                <input 
                    value={text}
                    onChange={handleChange}
                    className={styles.input} 
                    type={type} 
                    placeholder={placeholder} 
                    onFocus={handleFocus} 
                    onBlur={handleBlur} 
                    onInvalid={handleInvalid}
                    ref={inputRef} 
                    {...rest}
                    required
                    />
                <div className={styles.emptyErrorMessage} ref={emptyErrorMessageRef}>
                    Can't be empty<img src={images['iconError']} className={styles.error}/>
                </div>            
                <div className={styles.emailErrorMessage} ref={emailErrorMessageRef}>
                    Please use a valid email address<img src={images['iconError']} className={styles.error}/>
                </div>    
            </fieldset>
        )
}

export default Inputs;