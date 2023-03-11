import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';
import images from './images';

function CompanyLocations() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        const location = e.target.getAttribute('data-location');
        navigate('/locations', {state: location});
    }

    return(
        <section className={styles.container}>
            <div className={styles.location}>
                <div className={styles.imageContainer}>
                    <img src={images['circleImage']} className={styles.circleImage} id={styles.firstCircle}/> 
                    <img src={images['canada']} className={styles.locationImage} alt='canada city'/>
                </div>
                <h3 className={styles.title}>
                    CANADA
                </h3>
                <button className={styles.locationButton} onClick={handleClick} data-location='canada'>
                    SEE LOCATION
                </button>
            </div>
            <div className={styles.location}>
                <div className={styles.imageContainer}>
                    <img src={images['circleImage']} className={styles.circleImage}/> 
                    <img src={images['australia']} className={styles.locationImage} alt='australia dome'/>
                </div>
                <h3 className={styles.title}>
                    AUSTRALIA
                </h3>
                <button className={styles.locationButton} onClick={handleClick} data-location='australia'>
                    SEE LOCATION
                </button>
            </div>
            <div className={styles.location}>
                <div className={styles.imageContainer}>
                    <img src={images['circleImage']} className={styles.circleImage} id={styles.thirdCircle}/> 
                    <img src={images['uk']} className={styles.locationImage} alt='united kingdom bridge'/>
                </div>
                <h3 className={styles.title}>
                    UNITED KINGDOM
                </h3>
                <button className={styles.locationButton} onClick={handleClick} data-location='uk'>
                    SEE LOCATION
                </button>
            </div>
        </section>
    )
}

export default CompanyLocations;