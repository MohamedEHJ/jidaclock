import React from 'react';
import styles from './PrayerList.module.css';
import PrayerDescription from './PrayerDescription/PrayerDescription';

export default function PrayerList({ prayers }) {

  const prayerName = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

  return (
    <div className={`${styles.mainDiv} mt-5`}>
      <div className={styles.prayerList}>
        {prayers.map((prayer, index) => (
          <PrayerDescription key={index} prayer={prayer} prayerName={prayerName[index]} />
        ))}
      </div>
    </div>
  );
}
