import React from 'react';
import WebPageHeader from '../ReusableComponents/WebPageHeader';
import PageDetails from '../ReusableComponents/PageDetails';
import styles from './styles.module.css';

function WebDesignPage() {
    return(
        <section>
            <WebPageHeader title='Web Design' desc='We build websites that serve as powerful marketing tools and bring memorable brand experiences.' bgPosition='center right'/>
            <PageDetails details={[{}, {}, {}, {}, {}, {}]}/>
        </section>
    )
}

export default WebDesignPage;