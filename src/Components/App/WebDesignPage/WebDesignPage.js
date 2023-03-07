import React from 'react';
import WebPageHeader from '../ReusableComponents/WebPageHeader';
import PageDetails from '../ReusableComponents/PageDetails';
import PageLinks from '../ReusableComponents/PageLinks';
import images from './images';

/* dont forget to set the leaf images for the background*/
function WebDesignPage() {
    return(
        <main>
            <WebPageHeader title='Web Design' desc='We build websites that serve as powerful marketing tools and bring memorable brand experiences.' bgPosition='center right'/>
            <PageDetails details={[
                {image: images['express'], title: 'EXPRESS', desc: 'A multi-carrier shipping website for ecommerce businesses' },
                {image: images['transfer'], title: 'TRANSFER', desc: 'Site for low-cost money transfers and sending money within seconds'},
                {image: images['photon'], title: 'PHOTON', desc: 'A state-of-the-art music player with high-resolution audio and DSP effects'},
                {image: images['builder'], title: 'BUILDER', desc: 'Connects users with local contractors based on their location'},
                {image: images['blogr'], title: 'BLOGR', desc: 'Blogr is a platform for creating an online blog or publication'},
                {image: images['camp'], title: 'CAMP', desc: 'Get expert training in coding, data, design, and digital marketing'}
            ]}/>
            <PageLinks pageLinks={[
                {bgImage: images['appDesign'], title: 'APP DESIGN', route: '/appdesign'},
                {bgImage: images['graphicDesign'], title: 'GRAPHIC DESIGN', route: '/graphicdesign'}
            ]}/>
        </main>
    )
}

export default WebDesignPage;