import React, {memo} from 'react';
import styles from './styles.module.css';
import images from './images';

function CompanyDetails() {
    return(
        
            <section className={styles.flexContainer}>
                <div className={styles.item}>
                    <div>
                        <div className={styles.imageContainer}>
                            <img src={images['circlePattern']} className={styles.circle} id={styles.circleOne}/>
                            <img src={images['passionate']} className={styles.image}/>                        
                        </div>                        
                    </div>

                    <div className={styles.companyDesc}>
                        <h3 className={styles.title}>    
                            PASSIONATE
                        </h3>
                        <p className={styles.desc}>
                            Each project starts with an in-depth brand research 
                            to ensure we only create products that serve a purpose. 
                            We merge art, design, and technology into exciting new solutions.
                        </p>                        
                    </div>

                </div>                
                <div className={styles.item}>
                    <div className={styles.imageFlexItem}>
                        <div className={styles.imageContainer}>
                            <img src={images['circlePattern']} className={styles.circle} id={styles.circleTwo}/>
                            <img src={images['resourceful']} className={styles.image}/>
                        </div>                        
                    </div>
                    <div className={styles.companyDesc}>
                        <h3 className={styles.title}>
                            RESOURCEFUL
                        </h3>
                        <p className={styles.desc}>
                            Everything that we do has a strategic purpose. 
                            We use an agile approach in all of our projects 
                            and value customer collaboration. It guarantees 
                            superior results that fulfill our clients’ needs.
                        </p>                        
                    </div>

                </div>
                <div className={styles.item}>
                    <div className={styles.imageFlexItem}>
                        <div className={styles.imageContainer}>
                            <img src={images['circlePattern']} className={styles.circle} id={styles.circleThree}/>
                            <img src={images['friendly']} className={styles.image}/>                        
                        </div>                        
                    </div>

                    <div className={styles.companyDesc}>
                        <h3 className={styles.title}>
                            FRIENDLY
                        </h3>
                        <p className={styles.desc}>
                            We are a group of enthusiastic folks who know 
                            how to put people first. Our success depends on 
                            our customers, and we strive to give them the 
                            best experience a company can provide.
                        </p>                        
                    </div>
                </div>
            </section>        

        )
}

export default memo(CompanyDetails);