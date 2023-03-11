import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';
import images from './images';

function CompanyLocations() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        const scroll = e.target.getAttribute('data-scroll');
        window.scrollTo(0, scroll);
        navigate('/locations');
    }

    return(
        <section className={styles.container}>
            <div className={styles.location}>
                <div className={styles.imageContainer}>
                    <img src={images['circleImage']} className={styles.circleImage} id={styles.firstCircle}/> 
                    <img src={images['canada']} className={styles.locationImage}/>
                </div>
                <h3 className={styles.title}>
                    CANADA
                </h3>
                <button className={styles.locationButton} onClick={handleClick} data-scroll={0}>
                    SEE LOCATION
                </button>
            </div>
            <div className={styles.location}>
                <div className={styles.imageContainer}>
                    <img src={images['circleImage']} className={styles.circleImage}/> 
                    <img src={images['australia']} className={styles.locationImage}/>
                </div>
                <h3 className={styles.title}>
                    AUSTRALIA
                </h3>
                <button className={styles.locationButton} onClick={handleClick} data-scroll={500}>
                    SEE LOCATION
                </button>
            </div>
            <div className={styles.location}>
                <div className={styles.imageContainer}>
                    <img src={images['circleImage']} className={styles.circleImage} id={styles.thirdCircle}/> 
                    <img src={images['uk']} className={styles.locationImage}/>
                </div>
                <h3 className={styles.title}>
                    UNITED KINGDOM
                </h3>
                <button className={styles.locationButton} onClick={handleClick} data-scroll={600}>
                    SEE LOCATION
                </button>
            </div>
        </section>
    )
}

export default CompanyLocations;