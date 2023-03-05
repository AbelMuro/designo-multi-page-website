import React from 'react';
import styles from './styles.module.css';
import images from './images';

function CompanyDetails() {
    return(
            <section className={styles.flexContainer}>
                <div className={styles.item}>
                    <div className={styles.imageContainer}>
                        <img src={images['passionate']} className={styles.image}/>                        
                    </div>

                    <h3 className={styles.title}>    
                            PASSIONATE
                    </h3>
                    <p className={styles.desc}>

                    </p>
                </div>                
                <div className={styles.item}>
                    <div className={styles.imageContainer}>
                        <img src={images['resourceful']} className={styles.image}/>
                    </div>
                    <h3 className={styles.title}>
                        RESOURCEFUL
                    </h3>
                    <p className={styles.desc}>
                        
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.imageContainer}>
                        <img src={images['friendly']} className={styles.image}/>                        
                    </div>

                    <h3 className={styles.title}>
                        FRIENDLY
                    </h3>
                    <p className={styles.desc}>
                            
                    </p>
                </div>
            </section>
        )
}

export default CompanyDetails;