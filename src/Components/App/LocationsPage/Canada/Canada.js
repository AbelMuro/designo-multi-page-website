import React from 'react';
import styles from './styles.module.css';


/* this is where i left off, i will need to style .addressTitle and .address below*/
function Canada() {
    return(
        <section className={styles.container}>

            <div className={styles.content}>

                <div className={styles.flex}>
                    <h2 className={styles.title}>
                        Canada
                    </h2>
                    <div className={styles.addresses}>
                        <p className={styles.address}>
                            <span className={styles.addressTitle}>
                                Designo Central Office<br/>
                            </span>
                            3886 Wellington Street <br/>
                            Toronto, Ontario M9C 3J5
                        </p>  
                        <p className={styles.address}>
                            <span className={styles.addressTitle}>
                                Contact <br/>
                            </span>
                            P : +1 253-863-8967<br/>
                            M : contact@designo.co
                        </p>                  
                    </div>               
                 </div>

            </div>

        </section>
    )
}

export default Canada;