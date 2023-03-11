import React from 'react';
import styles from './styles.module.css';

function TheRealDeal() {
    return(
        <section className={styles.container}>
            <div className={styles.flex}>
                <h2 className={styles.title}>
                    The real deal
                </h2>
                <p className={styles.desc}>
                    As strategic partners in our clients’ businesses, 
                    we are ready to take on any challenge as our own. 
                    Solving real problems require empathy and collaboration, 
                    and we strive to bring a fresh perspective to every opportunity. 
                    We make design and technology more accessible and give you tools 
                    to measure success.
                </p>
                <p className={styles.desc}>
                    We are visual storytellers in appealing and captivating ways. 
                    By combining business and marketing strategies, we inspire audiences 
                    to take action and drive real results.
                </p>
            </div>
            <img className={styles.image} alt='person putting up photos on a wall'/>
        </section>
    )
}

export default TheRealDeal;