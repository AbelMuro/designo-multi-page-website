import React, {useRef, useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import styles from './styles.module.css';
import images from './images';

const Inputs = forwardRef(({type, placeholder, errorMessage, ...rest}, ref) => {
    const [text, setText] = useState('');
    const emptyErrorMessageRef = useRef();
    const otherErrorMessageRef = useRef();
    const inputRef = useRef();

    const handleBlur = () => {                                          /* will automatically check if the input is valid once the user 'leaves' the input*/
        const isEmpty = inputRef.current.validity.valueMissing;

        if(isEmpty)
            emptyErrorMessageRef.current.style.display = 'flex';  
        else
            emptyErrorMessageRef.current.style.display = '';
    }

    const handleInvalid = () => {
        inputRef.current.setCustomValidity(' ');                            /* removing default message that appears for invalid inputs*/
        const typeMismatch = inputRef.current.validity.typeMismatch;        
        const isEmpty = inputRef.current.validity.valueMissing;
        const isPatternInvalid = inputRef.current.validity.patternMismatch;

        if(typeMismatch || isPatternInvalid)                                /* some inputs will have at least two error messages*/
            otherErrorMessageRef.current.style.display = 'flex';
        else if(isEmpty)
            emptyErrorMessageRef.current.style.display = 'flex';          
    }   

    const handleChange = (e) => {
        setText(e.target.value);           
    }

    useEffect(() => {
        inputRef.current.setCustomValidity('');
        emptyErrorMessageRef.current.style.display = '';                    /* error messages, if any, will be removed when the user starts typing*/
        otherErrorMessageRef.current.style.display = '';     
    }, [text])
    
    useImperativeHandle(ref, () => ({
        get state() {
            return text;
        }
    }))

    return(
            <fieldset className={styles.inputContainer}>
                <input 
                    value={text}
                    onChange={handleChange}
                    className={styles.input} 
                    type={type} 
                    placeholder={placeholder} 
                    onBlur={handleBlur} 
                    onInvalid={handleInvalid}
                    ref={inputRef} 
                    {...rest}
                    required
                    />
                <div className={styles.emptyErrorMessage} ref={emptyErrorMessageRef}>
                    Can't be empty<img src={images['iconError']} className={styles.error}/>
                </div>            
                <div className={styles.emailErrorMessage} ref={otherErrorMessageRef}>
                    {errorMessage}<img src={images['iconError']} className={styles.error}/>
                </div>
            </fieldset>
        )
})

export default Inputs;