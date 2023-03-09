import React from 'react';
import Location from './Location';
import styles from './styles.module.css';

function LocationsPage() {
    return(
        <main>
            <Location 
                title='Canada' 
                addressTitle='Designo Central Office' 
                address='3886 Wellington Street Toronto, Ontario M9C 3J5'
                contactInfo='P : +1 253-863-8967M : contact@designo.co'
            />
        </main>
    )
}

export default LocationsPage;