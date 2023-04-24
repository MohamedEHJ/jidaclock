import React from 'react';
import styles from './PrayerDescription.module.css';

export default function PrayerDescription({ prayer, prayerName }) {

    return (
        <div className={styles.background}>
            <h1>{prayerName}</h1>
            <div>{prayer}</div>
        </div>
    )
}
