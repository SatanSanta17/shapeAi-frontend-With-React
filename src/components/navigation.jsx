import React from 'react'
import styles from "./navigation.module.css";
import { Link } from 'react-router-dom';

export default function navigation() {
    return (
        <div>
            <div className={styles.navigation}>
                <h1>Navigation Bar</h1>
                <div className={styles.navigationButtonContainer}>
                    <Link to="/"><button className={styles.navButton}>Home</button></Link>
                    <Link to="/contact"><button className={styles.navButton}>Contact</button></Link>
                </div>
            </div>
        </div>
    )
}
