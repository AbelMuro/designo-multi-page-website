import React, {useEffect, useRef, useState} from 'react';
import useMediaQuery from './useMediaQuery';
import styles from './styles.module.css';
import images from './images';

function NavigationBar(){
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const mobileMenu = useRef();

    const handleClick = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    useEffect(() => {
        if(showMobileMenu){
            mobileMenu.current.style.height = '235px';
            mobileMenu.current.style.padding = '48px 24px';
        }
        else{
            mobileMenu.current.style.height = '';
            mobileMenu.current.style.padding = '';
        }
    },[showMobileMenu])

    useEffect(() => {
        const navLinks = document.querySelector('.' + styles.navLinks);
        const hamburger = document.querySelector('.' + styles.hamburger);

        if(mobile){
            navLinks.style.display = 'none';
            hamburger.style.display = 'block';
        }
        else {
            setShowMobileMenu(false);
            navLinks.style.display = '';
            hamburger.style.display = '';
        }

    }, [mobile])

    return(
        <>
            <nav className={styles.navBar}>
                <img src={images['companyLogo']} className={styles.logo}/>
                <div className={styles.navLinks}>
                    <a className={styles.link}>
                        OUR COMPANY
                    </a>                
                    <a className={styles.link}>
                        LOCATIONS
                    </a>
                    <a className={styles.link}>
                        CONTACT
                    </a>
                </div>
                <img src={images['hamburger']} className={styles.hamburger} onClick={handleClick}/>
            </nav>                
             <div className={styles.mobileMenu} ref={mobileMenu}>
                <a className={styles.mobileLink}>
                    OUR COMPANY
                </a>
                <a className={styles.mobileLink}>
                    LOCATIONS
                </a>
                <a className={styles.mobileLink}>
                    CONTACT
                </a>
            </div>       
        </>

    )
}

export default NavigationBar;