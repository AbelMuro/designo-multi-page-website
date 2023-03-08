import React from 'react';
import PageDetails from './../ReusableComponents/PageDetails';
import PageLinks from './../ReusableComponents/PageLinks'
import images from './images';
import styles from './styles.module.css';

function GraphicDesignPage() {
    return(
        <main>
            <WebPageHeader 
                title='Web Design' 
                desc='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
                bgImage={images['leafBG']}
                bgPosition='center left'
                />
            <PageDetails details={[
                {image: images['timBrown'], title: 'TIM BROWN', desc: "A book cover designed for Tim Brown's new release, 'Change'"},
                {image: images['boxedWater'], title: 'BOXED WATER', desc: 'A simple packaging concept made for Boxed Water'},
                {image: images['science'], title: 'SCIENCE!', desc: 'A poster made in collaboration with the Federal Art Project'}
            ]}/>
            <PageLinks pageLinks={[
                {bgImage: images['appDesign'], title: 'APP DESIGN', route: '/appdesign'},
                {bgImage: images['appDesign'], title: 'APP DESIGN', route: '/webdesign'}
            ]}/>
        </main>
    )
}

export default GraphicDesignPage