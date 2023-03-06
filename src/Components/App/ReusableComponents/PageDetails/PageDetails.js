import React from 'react';
import styles from './styles.module.css';

function PageDetails({details}) {
    return(
        <section className={styles.grid}>
            {details.map((detail) => {

            })}
        </section>
    )
}

export default PageDetails;