import React from 'react';
import styles from './styles.module.css';
import images from './images';

function WorldClassTalent() {
    return(
        <section className={styles.container}>
            <img src={images['worldClassTalentImage']} className={styles.image}/>
            <div className={styles.flex}>
                <h2 className={styles.title}>
                    World-class talent
                </h2>
                <p className={styles.desc}>
                    We are a crew of strategists, problem-solvers, and technologists. 
                    Every design is thoughtfully crafted from concept to launch, 
                    ensuring success in its given market. We are constantly updating 
                    our skills in a myriad of platforms.  
                </p>
                <p className={styles.desc}>      
                    Our team is multi-disciplinary and we are not merely interested 
                    in form — content and meaning are just as important. 
                    We give great importance to craftsmanship, service, 
                    and prompt delivery. Clients have always been impressed 
                    with our high-quality outcomes that encapsulates their brand’s 
                    story and mission.
                </p>
            </div>
        </section>
    )
}

export default WorldClassTalent;