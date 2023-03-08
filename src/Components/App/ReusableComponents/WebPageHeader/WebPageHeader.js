import React, {useCallback} from 'react';
import useMediaQuery from './../useMediaQuery';
import styles from './styles.module.css';


function WebPageHeader({title, desc, bgImage, bgPosition}) {
    const [mobile] = useMediaQuery('(max-width: 500px)');

    const backgroundImageRef = useCallback((ref) => {
        if(!ref)
            return;
        else{
            ref.style.backgroundImage = `url('${bgImage}')`;
            ref.style.backgroundPosition = mobile ? 'top right' : bgPosition;
        }
    }, [mobile])

    return(
        <header className={styles.container} ref={backgroundImageRef}>
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