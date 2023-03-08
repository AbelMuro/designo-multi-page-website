import React from 'react';
import RefCallback from './RefCallback';
import {useNavigate} from 'react-router-dom';
import iconRight from './icons/icon-right-arrow.svg';
import styles from './styles.module.css';
import {v4 as uuid} from 'uuid'


function PageLinks({pageLinks}){
    const navigate = useNavigate();

    const handleClick = (e) => {
        const route = e.target.getAttribute('data-route');
        window.scrollTo(0,0);
        navigate(route);
    };
    
    return(
        <section className={styles.container}>
          {pageLinks.map((link) =>{
                return(
                    <div className={styles.link} ref={RefCallback(link.bgImage)} key={uuid()}>
                        <div className={styles.overlay} onClick={handleClick} data-route={link.route}>
                            <div className={styles.flex}>
                                <h2 className={styles.title}>
                                    {link.title}
                                </h2>
                                <p className={styles.viewProjectsLink}>
                                    VIEW PROJECTS <img src={iconRight} className={styles.rightArrow}/>
                                </p>
                            </div>                            
                        </div>

                    </div>
                )
          })}
        </section>
    )

}

export default PageLinks;