import React from 'react'
import styles from './hero.module.scss'

export default function Hero(){
    console.log("hero loaded")
    
    return(
        <section className={styles.heroImage}>
            <div className={styles.heroTextContainer}>
            <div className={styles.heroText}>
                <h2>Liquify it</h2>
                <h3 className={styles.explainer}>Transmute organic material into liquid metal</h3>

            </div>
            </div>
            
        </section>
    )
}