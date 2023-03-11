import React, {useCallback} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import useMediaQuery from './../ReusableComponents/useMediaQuery';
import styles from './styles.module.css';
import logo from './images/logo-light.png';


//note to my future self: this component will look different in the '/contact' page
function Footer() {
    const [tablet] = useMediaQuery('(max-width: 690px)');
    const [mobile] = useMediaQuery('(max-width: 500px)')
    const navigate = useNavigate();
    const currentRoute = useLocation();


    const handleNavLink = (e) => {
        const route = e.target.getAttribute('data-route');
        window.scrollTo(0,0);
        navigate(route);
    }

    const handleButtonClick = () => {
        window.scrollTo(0,0);
        navigate('/contact')
    }

    /* this callback will remove the orange box of the footer nav only when the user navigates to the '/contact' page*/
    const orangeBoxRef = useCallback((ref) => {
        if(!ref)
            return;
        else{
            ref.style.display = currentRoute.pathname == '/contact' ? 'none' : '';
        }
            
    }, [currentRoute.pathname])

    /* this callback will resize the height differently only when the user navigates to the './contact' page*/
    const footerRef = useCallback((ref) => {
        if(!ref) return;
        
        if(mobile){
            ref.style.height = currentRoute.pathname == '/contact' ? '626px' : '';
            ref.style.padding = currentRoute.pathname == '/contact' ? '64px 0px' : '';
        }
        else if(tablet){
            ref.style.height = currentRoute.pathname == '/contact' ? '337px' : '';
            ref.style.padding = currentRoute.pathname == '/contact' ? '80px 0px' : '';
        }
        else{
            ref.style.height = currentRoute.pathname == '/contact' ? '321px' : '';
            ref.style.padding = currentRoute.pathname == '/contact' ? '72px 0px' : '';
        }

    }, [currentRoute.pathname])

    return(
        <footer className={styles.container} ref={footerRef}>
            <section className={styles.orangeBox} ref={orangeBoxRef}>
                <div className={styles.flexContainer}>
                    <div className={styles.info}>
                        <h2 className={styles.projectTitle}>
                            Let’s talk about your project
                        </h2>
                        <p className={styles.projectDesc}>
                            Ready to take it to the next level? 
                            Contact us today and find out how our 
                            expertise can help your business grow.
                        </p>
                    </div>
                    <button className={styles.getInTouchButton} onClick={handleButtonClick}>
                        GET IN TOUCH
                    </button>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.footerNav}>
                    <img src={logo} className={styles.companyLogo} onClick={handleNavLink} data-route='/' alt='designo logo'/>
                    {tablet ? <hr className={styles.line}/> : <></>}
                    <div className={styles.links}>
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
                </div>
                <div className={styles.companyData}>
                   <p className={styles.addressOne}>
                        <span className={styles.title}>
                            Designo Central Office
                        </span><br/>
                        3886 Wellington Street<br/>
                        Toronto, Ontario M9C 3J5
                    </p>
                    <p className={styles.addressTwo}>
                        Contact Us &#40;Central Office&#41;<br/>
                        P : +1 253-863-8967<br/>
                        M : contact@designo.co
                    </p>                        
                    <div className={styles.socialNav}>
                        <div className={styles.facebook}> </div>
                        <div className={styles.youtube}> </div>
                        <div className={styles.twitter}> </div>
                        <div className={styles.pinterest}> </div>
                        <div className={styles.instagram}> </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;