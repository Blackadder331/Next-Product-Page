import React from "react";
import styles from './input.module.scss'

export default function TextInput () {
    return(
        <div className={styles.group}>
            <input type="text" className={styles.input} required={true} />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.label}>Sign up</label>
        </div>
    )
}