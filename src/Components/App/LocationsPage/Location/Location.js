import React, {useCallback} from 'react';
import useMediaQuery from './../../ReusableComponents/useMediaQuery';
import Map from './Map';
import styles from './styles.module.css';

function Location({title, addressTitle, addressLineOne, addressLineTwo, contactInfoLineOne, contactInfoLineTwo, rowReverse , mapDesktop, mapTablet, lat, long, id}) {
    const [tablet] = useMediaQuery('(max-width: 800px)');
    const [mobile] = useMediaQuery('(max-width: 500px)');

    const containerRef = useCallback((ref) => {
        if(!ref) return;

        if(!tablet)
            ref.style.flexDirection = rowReverse ? 'row-reverse' : '';
        else
            ref.style.flexDirection = '';
    }, [tablet])


    const mapRef = useCallback((ref) => {
        if(!ref) return;

        if(mobile)
            ref.src = mapDesktop;
        else if (tablet)
            ref.src = mapTablet;
        else
            ref.src = mapDesktop
        
    }, [tablet, mobile])

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
                            {addressLineOne}<br/>
                            {addressLineTwo}
                        </p>  
                        <p className={styles.address}>
                            <span className={styles.addressTitle}>
                                Contact <br/>
                            </span>
                            {contactInfoLineOne}<br/>
                            {contactInfoLineTwo}
                        </p>                  
                    </div>               
                 </div>
            </div>    
            <Map lat={lat} long={long} id={id}/>       
        </section>
    )
}

export default Location;