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

    /* this will display the hamburger icon and will change the icon image everytime the user clicks on the icon*/
    const mobileMenuIconRef = useCallback((ref) => {
        if(!ref) return;

        ref.style.display = mobile ? 'block' : '';
        ref.src = showMobileMenu ? images['close'] : images['hamburger'];
        
    }, [showMobileMenu, mobile])

    /* this will remove the navLinks when the user is in mobile mode*/
    useEffect(() => {
        const navLinks = document.querySelector('.' + styles.navLinks);
        navLinks.style.display = mobile ? 'none' : '';

    }, [mobile])

    /* this will display or remove the mobile menu (with an overlay) everytime the user clicks on the hamburger icon*/
    useEffect(() => {
        const overlay = document.querySelector('.' + styles.overlay);
        const mobileMenu = document.querySelector('.' + styles.mobileMenu);     

        if(showMobileMenu){
            overlay.style.display = 'block';

            setTimeout(() => {
                overlay.style.opacity = showMobileMenu ? '1' : '';
            }, 0)

            setTimeout(() => {
                mobileMenu.style.height = showMobileMenu ? '235px' : '';
                mobileMenu.style.padding = showMobileMenu ? '48px 24px' : '';   
            }, 200)
        }
        else{
            mobileMenu.style.height = showMobileMenu ? '235px' : '';
            mobileMenu.style.padding = showMobileMenu ? '48px 24px' : '';               
            
            setTimeout(() => {
                overlay.style.opacity = showMobileMenu ? '1' : '';
            }, 200)
            setTimeout(() => {
                overlay.style.display = '';
            }, 400)
        }
    }, [showMobileMenu])

    /* this will prevent scrolling from the user only when the mobile menu is open*/
    useEffect(() => {
        const handleScrolling = () => {
            window.scrollTo(0,0)
        }

        if(showMobileMenu)
            window.addEventListener('scroll', handleScrolling);
        else
            window.removeEventListener('scroll', handleScrolling);

        return () => {
            window.removeEventListener('scroll', handleScrolling);
        }
    }, [showMobileMenu])


    /* this useEffect will close the mobile menu when the user resizes the viewport past mobile */
    useEffect(() => {
        if(showMobileMenu && !mobile)
            setShowMobileMenu(!showMobileMenu);
    }, [showMobileMenu, mobile])

    return(
        <>
            <nav className={styles.navBar}>
                <img src={images['companyLogo']} className={styles.logo} onClick={handleNavLink} data-route='/'/>
                <div className={styles.navLinks}>
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
            <nav className={styles.overlay}>
                <div className={styles.mobileMenu}>
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
            </nav>               

        </>

    )
}

export default NavigationBar;