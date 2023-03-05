import React from 'react';
import styles from './styles.module.css';
import images from './images';

function DesignPageLinks() {


    return(
        <section className={styles.grid}>
            <div className={styles.webDesign} >
                <div className={styles.overlay}>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            WEB DESIGN
                        </h2>
                        <p className={styles.link}>
                            VIEW PROJECTS 
                            <img src={images['rightArrow']} className={styles.arrow}/>
                        </p>
                    </div>                    
                </div>

            </div>
            <div className={styles.appDesign} >
                <div className={styles.overlay}>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            APP DESIGN
                        </h2>
                        <p className={styles.link}>
                             VIEW PROJECTS
                             <img src={images['rightArrow']} className={styles.arrow}/>
                        </p>
                    </div>
                </div>

            </div>
            <div className={styles.graphicDesign} >
                <div className={styles.overlay}>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            GRAPHIC DESIGN
                        </h2>
                        <p className={styles.link}>
                             VIEW PROJECTS
                             <img src={images['rightArrow']} className={styles.arrow}/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DesignPageLinks;