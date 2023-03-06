import React, {useEffect} from 'react';
import Header from './Header';
import DesignPageLinks from './DesignPageLinks';
import CompanyDetails from './CompanyDetails';
import backgroundLeaf from './images/bg-pattern-leaf.svg';
import styles from './styles.module.css';
import useMediaQuery from './../ReusableComponents/useMediaQuery';

function HomePage(){
    const [tablet] = useMediaQuery('(max-width: 800px)');


    useEffect(() => {
        const leafOne = document.querySelector('.' + styles.bgLeafOne);
        const leafTwo = document.querySelector('.' + styles.bgLeafTwo);

        if(tablet){
            leafOne.style.display = 'none';
            leafTwo.style.display = 'none'; 
        }
        else{
            leafOne.style.display = '';
            leafTwo.style.display = '';
        }


    }, [tablet])

    return(
        <main>
            <img src={backgroundLeaf} className={styles.bgLeafOne}/>
            <img src={backgroundLeaf} className={styles.bgLeafTwo}/>
            <Header/>
            <DesignPageLinks/>
            <CompanyDetails/>
        </main>
    )
}

export default HomePage;