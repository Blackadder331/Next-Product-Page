import React from 'react'
import styles from './hero.module.scss'

export default function Hero(){
    console.log("hero loaded")
    
    return(
        <section className={styles.heroImage}>
            <div className={styles.heroText}>
                <h2>Text</h2>
            </div>
        </section>
    )
}