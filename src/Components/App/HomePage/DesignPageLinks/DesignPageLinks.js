import React, {memo} from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import images from './images';

function DesignPageLinks() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        const route = e.target.getAttribute('data-route');
        navigate(route);
    }

    return(
        <section className={styles.grid}>
            <div className={styles.webDesign}>
                <div className={styles.overlay} onClick={handleClick} data-route='/webdesign'>
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

export default memo(DesignPageLinks);