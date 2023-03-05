import React from 'react';
import Header from './Header';
import DesignPageLinks from './DesignPageLinks';
import CompanyDetails from './CompanyDetails';

function HomePage(){
    return(
        <main>
            <Header/>
            <DesignPageLinks/>
            <CompanyDetails/>
        </main>
    )
}

export default HomePage;