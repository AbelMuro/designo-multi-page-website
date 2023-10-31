import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Inputs from './Inputs';
import UsersMessage from './UsersMessage';
import styles from './styles.module.css';

function Form() {
    const navigate = useNavigate();
    const name = useRef();
    const email = useRef();
    const tel = useRef();
    const message = useRef();

    const handleSubmit = () => {
        alert('Form has been submitted');
        navigate('/');

    }

    return(
        <form className={styles.container} onSubmit={handleSubmit}>
            <Inputs type='text' placeholder='Name' ref={name}/>
            <Inputs type='email' placeholder='Email Address' errorMessage='Please use a valid email address' ref={email}/>
            <Inputs type='tel' placeholder='Phone' errorMessage='Please use a valid phone #' pattern='([0-9]{3}[0-9]{3}[0-9]{4})|([0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4})|(\+[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4})' ref={tel}/>
            <UsersMessage ref={message}/>
            <button className={styles.submit}>
                Submit   
             </button>
        </form>
    )
}

export default Form;