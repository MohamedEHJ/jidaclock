import React from 'react';
import styles from './PrayerList.module.css';
import PrayerDescription from './PrayerDescription/PrayerDescription';

export default function PrayerList({ prayers, actualTime, prayerPosition }) {

  const prayerName = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

  // let color = actualTime > prayerPosition[index] ? styles.roundedDivGreen : '';

  // let color = actualTime > 



  return (
    <div className={`${styles.mainDiv} absolute `} >
      <div className={`flex flex-row space-x-4 `}>
        {prayers.map((prayer, index) => (
          <PrayerDescription key={index} prayer={prayer} prayerName={prayerName[index]} color={actualTime > prayerPosition[index] ? '#4d4847' : '#f4fff8'}/>
        ))}
      </div>
    </div>
  );
}
