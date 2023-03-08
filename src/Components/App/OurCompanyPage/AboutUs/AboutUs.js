import React, {useCallback, useEffect} from 'react';
import styles from './styles.module.css';
import images from './images';
import useMediaQuery from './../../ReusableComponents/useMediaQuery';

function AboutUs() {
    const [tablet] = useMediaQuery('(max-width: 800px)');
    const [mobile] = useMediaQuery('(max-width: 500px)')

    const containerRef = useCallback((ref) => {
        if(!ref)
            return;
        else
            ref.style.backgroundImage = mobile ? `url(${images['circleImageMobile']})` : '';
    },[mobile]);


    useEffect(() => {
        const teamImage = document.querySelector('.' + styles.image);

        if(mobile)
            teamImage.src = images['teamImageMobile'];
        else if(tablet)
            teamImage.src = images['teamImageTablet'];
        else
            teamImage.src = images['teamImage'];
    }, [mobile, tablet])

    return(
        <section className={styles.container} ref={containerRef}>
            <div className={styles.flex}>   
                <h1 className={styles.title}>
                    About Us
                </h1>
                <p className={styles.desc}>
                    Founded in 2010, we are a creative agency 
                    that produces lasting results for our clients. 
                    We’ve partnered with many startups, corporations, 
                    and nonprofits alike to craft designs that make real impact. 
                    We’re always looking forward to creating brands, products, 
                    and digital experiences that connect with our clients’ 
                    audiences.
                </p>
            </div>
            <img className={styles.image}/>                

        </section>
    )
}

export default AboutUs;