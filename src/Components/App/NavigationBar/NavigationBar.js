import React, {useEffect, useState, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import useMediaQuery from '../ReusableComponents/useMediaQuery';
import styles from './styles.module.css';
import images from './images';

function NavigationBar(){
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    const handleNavLink = (e) => {
        const route = e.target.getAttribute('data-route');
        navigate(route);
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
                    <a className={styles.link} onClick={handleNavLink} data-route='/ourcompany'>
                        OUR COMPANY
                    </a>                
                    <a className={styles.link} onClick={handleNavLink} data-route='/locations'>
                        LOCATIONS
                    </a>
                    <a className={styles.link} onClick={handleNavLink} data-route='/contact'>
                        CONTACT
                    </a>
                </div>
                <img src={images['hamburger']} className={styles.hamburger} onClick={handleClick} ref={(ref) => mobileMenuIconRef(ref)}/>
            </nav>                
             <div className={styles.mobileMenu} ref={mobileMenuRef}>
                <a className={styles.mobileLink} onClick={handleNavLink} data-route='/ourcompany'>
                    OUR COMPANY
                </a>
                <a className={styles.mobileLink} onClick={handleNavLink} data-route='/locations'>
                    LOCATIONS
                </a>
                <a className={styles.mobileLink} onClick={handleNavLink} data-route='/contact'>
                    CONTACT
                </a>
            </div>       
        </>

    )
}

export default NavigationBar;