import React, {useCallback} from 'react';
import WebPageHeader from '../ReusableComponents/WebPageHeader';
import PageDetails from './../ReusableComponents/PageDetails';
import PageLinks from './../ReusableComponents/PageLinks'
import useMediaQuery from './../ReusableComponents/useMediaQuery';
import images from './images';
import styles from './styles.module.css';

function GraphicDesignPage() {
    const [tablet] = useMediaQuery('(max-width: 800px)');

    const leafBGRef = useCallback((ref) => {
        if(!ref) return;

        ref.style.display = tablet ? 'none' : '';
    }, [tablet])

    return(
        <main>
            <div className={styles.container} ref={leafBGRef}>
                <img src={images['leafBG']} className={styles.leaf}/>
            </div>
            <WebPageHeader 
                title='GRAPHIC DESIGN' 
                desc='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
                bgImage={images['headerBG']}
                bgPosition='center left'
                />
            <PageDetails details={[
                {image: images['timBrown'], alt:'tim brown', title: 'TIM BROWN', desc: "A book cover designed for Tim Brown's new release, 'Change'"},
                {image: images['boxedWater'], alt:'boxed water', title: 'BOXED WATER', desc: 'A simple packaging concept made for Boxed Water'},
                {image: images['science'], alt:'science', title: 'SCIENCE!', desc: 'A poster made in collaboration with the Federal Art Project'}
            ]}/>
            <PageLinks pageLinks={[
                {bgImage: images['appDesign'], title: 'APP DESIGN', route: '/appdesign'},
                {bgImage: images['webDesign'], title: 'WEB DESIGN', route: '/webdesign'}
            ]}/>
        </main>
    )
}

export default GraphicDesignPage