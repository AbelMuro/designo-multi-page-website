import React from 'react';
import styles from './styles.module.css';

function PageDetails({details}) {
    return(
        <section className={styles.grid}>
            {details.map((detail) => {
                return(
                    <div className={styles.detailContainer}>
                        <img src={detail.image} className={styles.image}/>
                        <div className={styles.flex}>
                            <h3 className={styles.title}>
                                {detail.title}
                            </h3>
                            <p className={styles.desc}>
                                {detail.desc}
                            </p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default PageDetails;