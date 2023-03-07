import React from 'react';
import WebPageHeader from './../ReusableComponents/WebPageHeader';
import PageDetails from '../ReusableComponents/PageDetails';
import PageLinks from '../ReusableComponents/PageLinks';
import images from './images';

function AppDesignPage() {
    return(
        <main>
            <WebPageHeader title='App Design' desc='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'/>
            <PageDetails details={[
                {image: images['airfilter'], title: 'AIRFILTER', desc: 'Solving the problem of poor indoor air quality by filtering the air'},
                {image: images['eyecam'], title: 'EYECAM', desc: 'Product that lets you edit your favorite photos and videos at any time'},
                {image: images['faceit'], title: 'FACEIT', desc: 'Get to meet your favorite internet superstar with the faceit app'},
                {image: images['todo'], title: 'TODO', desc: 'A todo app that features cloud sync with light and dark mode'},
                {image: images['loopstudios'], title: 'LOOPSTUDIOS', desc: 'A VR experience app made for Loopstudios'}
            ]}/>
            <PageLinks pageLinks={[
                {bgImage: images['webDesign'], title: 'WEB DESIGN', route: '/webdesign'},
                {bgImage: images['graphicDesign'], title: 'GRAPHIC DESIGN', route: '/graphicdesign'}
            ]}/>
        </main>
    )
}

export default AppDesignPage;