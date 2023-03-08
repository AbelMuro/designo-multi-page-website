import React from 'react';
import WebPageHeader from '../ReusableComponents/WebPageHeader';
import PageDetails from './../ReusableComponents/PageDetails';
import PageLinks from './../ReusableComponents/PageLinks'
import images from './images';
import styles from './styles.module.css';

function GraphicDesignPage() {
    return(
        <main>
            <WebPageHeader 
                title='GRAPHIC DESIGN' 
                desc='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
                bgImage={images['headerBG']}
                bgPosition='center left'
                />
            <PageDetails details={[
                {image: images['timBrown'], title: 'TIM BROWN', desc: "A book cover designed for Tim Brown's new release, 'Change'"},
                {image: images['boxedWater'], title: 'BOXED WATER', desc: 'A simple packaging concept made for Boxed Water'},
                {image: images['science'], title: 'SCIENCE!', desc: 'A poster made in collaboration with the Federal Art Project'}
            ]}/>
            <PageLinks pageLinks={[
                {bgImage: images['appDesign'], title: 'APP DESIGN', route: '/appdesign'},
                {bgImage: images['webDesign'], title: 'WEB DESIGN', route: '/webdesign'}
            ]}/>
        </main>
    )
}

export default GraphicDesignPage