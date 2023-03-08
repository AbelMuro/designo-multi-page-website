import React, {useEffect, useState, useCallback} from 'react';
import useMediaQuery from '../ReusableComponents/useMediaQuery';
import styles from './styles.module.css';
import images from './images';

function NavigationBar(){
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleClick = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    const mobileMenuRef = useCallback((ref) => {
        if(!ref)
            return;
        else{
            ref.style.height = showMobileMenu ? '235px' : '';
            ref.style.padding = showMobileMenu ? '48px 24px' : '';   
        }
    }, [showMobileMenu])

    const mobileMenuIconRef = useCallback((ref) => {
        if(!ref)
            return;

        ref.style.display = mobile ? 'block' : '';
        ref.src = showMobileMenu ? images['close'] : images['hamburger'];
    }, [showMobileMenu, mobile])


    const navLinksRef = useCallback((ref) => {
        if(!ref)
            return;
        else
            ref.style.display = mobile ? 'none' : '';
    }, [mobile])

    /* this useEffect will close the mobile menu when the user resizes the viewport past mobile */
    useEffect(() => {
        if(showMobileMenu && !mobile)
            setShowMobileMenu(!showMobileMenu);
    }, [showMobileMenu, mobile])

    return(
        <>
            <nav className={styles.navBar}>
                <img src={images['companyLogo']} className={styles.logo}/>
                <div className={styles.navLinks} ref={navLinksRef}>
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
                <img src={images['hamburger']} className={styles.hamburger} onClick={handleClick} ref={(ref) => mobileMenuIconRef(ref)}/>
            </nav>                
             <div className={styles.mobileMenu} ref={mobileMenuRef }>
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