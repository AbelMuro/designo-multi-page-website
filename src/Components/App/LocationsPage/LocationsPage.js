import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Location from './Location';
import styles from './styles.module.css';

function LocationsPage() {
    const {state} = useLocation();

    useEffect(() => {
        if(state)
            document.querySelector("#" + state).scrollIntoView({behavior: 'smooth'});
    }, [state])

    return(
        <main className={styles.container}>
            <Location 
                title='Canada' 
                addressTitle='Designo Central Office' 
                addressLineOne='3886 Wellington Street'
                addressLineTwo='Toronto, Ontario M9C 3J5'
                contactInfoLineOne='P : +1 253-863-8967'
                contactInfoLineTwo='M : contact@designo.co'
                rowReverse={false}
                lat={43.643579}
                long={-79.580322}
                id={'mapOne'}
                countryName={'canada'}
            />
            <Location 
                title='Australia' 
                addressTitle='Designo AU Office' 
                addressLineOne='19 Balonne Street'
                addressLineTwo='New South Wales 2443'
                contactInfoLineOne='P : (02) 6720 9092'
                contactInfoLineTwo='M : contact@designo.au'
                rowReverse={true}
                lat={-30.3291504}
                long={149.7884525}
                id={'mapTwo'}
                countryName={'australia'}
            />
            <Location 
                title='United Kingdom' 
                addressTitle='Designo UK Office' 
                addressLineOne='13 Colorado Way'
                addressLineTwo='Rhyd-y-fro SA8 9GA'
                contactInfoLineOne='P : 078 3115 1400'
                contactInfoLineTwo='M : contact@designo.uk'
                rowReverse={false}
                lat={51.7223}
                long={-3.8501}
                id={'mapThree'}
                countryName={'uk'}
            />
        </main>
    )
}

export default LocationsPage;