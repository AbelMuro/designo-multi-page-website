import React, {useCallback} from 'react';
import Header from './Header';
import DesignPageLinks from './DesignPageLinks';
import CompanyDetails from './CompanyDetails';
import backgroundLeaf from './images/bg-pattern-leaf.svg';
import styles from './styles.module.css';
import useMediaQuery from './../ReusableComponents/useMediaQuery';

function HomePage(){
    const [tablet] = useMediaQuery('(max-width: 800px)');

    const bgLeafRef = useCallback((ref) => {
        if(!ref)
            return;
        else
            ref.style.opacity = tablet ? '0' : '';
    }, [tablet])


    return(
        <main>
            <div className={styles.containerOne} ref={bgLeafRef}>
                <img src={backgroundLeaf} className={styles.bgLeafOne}/>                
            </div>
            <div className={styles.containerTwo} ref={bgLeafRef}>
                <img src={backgroundLeaf} className={styles.bgLeafTwo}/>                
            </div>
            <Header/>
            <DesignPageLinks/>
            <CompanyDetails/>
        </main>
    )
}

export default HomePage;