import React, {useCallback} from 'react';
import AboutUs from './AboutUs';
import WorldClassTalent from './WorldClassTalent';
import CompanyLocations from './CompanyLocations';
import TheRealDeal from './TheRealDeal';
import styles from './styles.module.css';
import leafBG from './images/bg-pattern-leaf.svg';
import useMediaQuery from './../ReusableComponents/useMediaQuery';

function OurCompanyPage() {
    const [tablet] = useMediaQuery('(max-width: 800px)')

    const leafRef = useCallback((ref) => {
        if(!ref)
            return;
        else 
            ref.style.display = tablet ? 'none' : '';
    }, [tablet])

    return(
        <main>
            <div className={styles.leafContainerOne} ref={leafRef}>
                <img className={styles.leafOne} src={leafBG}/>
            </div>
            <div className={styles.leafContainerTwo} ref={leafRef}>
                <img className={styles.leafTwo} src={leafBG}/>
            </div>
            <AboutUs/>
            <WorldClassTalent/>
            <CompanyLocations/>
            <TheRealDeal/>
        </main>
    )
}

export default OurCompanyPage;