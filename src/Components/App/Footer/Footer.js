import React from 'react';
import {useNavigate} from 'react-router-dom';
import useMediaQuery from './../ReusableComponents/useMediaQuery';
import styles from './styles.module.css';
import logo from './images/logo-light.png';

function Footer() {
    const [tablet] = useMediaQuery('(max-width: 690px)');
    const navigate = useNavigate();

    const handleNavLink = (e) => {
        const route = e.target.getAttribute('data-route');
        navigate(route);
    }

    return(
        <footer className={styles.container}>
            <section className={styles.orangeBox}>
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
                    <button className={styles.getInTouchButton}>
                        GET IN TOUCH
                    </button>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.footerNav}>
                    <img src={logo} className={styles.companyLogo}/>
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