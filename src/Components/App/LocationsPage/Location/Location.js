import React, {useCallback} from 'react';
import useMediaQuery from './../../ReusableComponents/useMediaQuery';
import styles from './styles.module.css';

function Location({title, addressTitle, address, contactInfo, rowReverse}) {
    const [tablet] = useMediaQuery('(max-width: 800px)');

    const containerRef = useCallback((ref) => {
        if(!ref)
            return;

        else  
            ref.style.flexDirection = rowReverse ? 'row-revese' : '';
            
    }, [])

    return(
        <section className={styles.container} ref={containerRef}>

            <div className={styles.pinkBox}>

                <div className={styles.content}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <div className={styles.addresses}>
                        <p className={styles.address}>
                            <span className={styles.addressTitle}>
                                {addressTitle}<br/>
                            </span>
                            {address}
                        </p>  
                        <p className={styles.address}>
                            <span className={styles.addressTitle}>
                                Contact <br/>
                            </span>
                            {contactInfo}
                        </p>                  
                    </div>               
                 </div>
            </div>
            <img className={styles.map}/>                
        </section>
    )
}

export default Location;