import React, {useEffect} from 'react';
import useMediaQuery from './../useMediaQuery';
import styles from './styles.module.css';


function WebPageHeader({title, desc, bgPosition}) {
    const [mobile] = useMediaQuery('(max-width: 500px)');


    useEffect(() => {
        const container = document.querySelector('.' + styles.container);

        if(mobile)
            container.style.backgroundPosition = 'top right'
        else
            container.style.backgroundPosition = bgPosition;
    }, [mobile])

    return(
        <header className={styles.container}>
            <section className={styles.flex}>
                <h1 className={styles.title}>
                    {title}
                </h1>
                <p className={styles.desc}>
                    {desc}
                </p>
            </section>
        </header>
    )
}

export default WebPageHeader;