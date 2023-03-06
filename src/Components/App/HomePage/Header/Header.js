import React, {memo} from 'react';
import styles from './styles.module.css';
import images from './images';

function Header() {
    return(
        <header className={styles.header}>
            <img src={images['headerBG']} className={styles.backgroundCircle} alt="phone"/>

            <section className={styles.flex}>
                <div className={styles.flexText}>
                    <h1 className={styles.title}>
                        Award-winning custom designs 
                        and digital branding solutions
                    </h1>
                    <p className={styles.desc}>
                        With over 10 years in the industry, 
                        we are experienced in creating fully responsive websites, 
                        app design, and engaging brand experiences. 
                        Find out more about our services.
                    </p>
                    <button className={styles.learnMoreButton}>
                        LEARN MORE
                    </button>
                </div>
                <div className={styles.phoneBox}>
                    <img src={images['phone']} className={styles.phone}/>  
                </div> 
            </section>
        </header>
    )
}

export default memo(Header);