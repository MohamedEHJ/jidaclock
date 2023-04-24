import React from 'react';
import styles from './ProgessBar.module.css';

// Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format

const ProgressBar = ({ actualTime, prayersPercentage, prayers }) => {

  const prayerName = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

  const prayerPosition = prayersPercentage.map(prayer => {
    const [hours, minutes] = prayer.split(":");
    const secs = parseInt(hours) * 3600 + parseInt(minutes) * 60;
    return ((secs / 86400) * 100).toFixed(1);
  });

  return (
    <div>
      <div className="w-full bg-gray-300 h-4 rounded-full relative">
        <div
          className="bg-blue-500 h-full rounded-full"
          style={{ width: `${actualTime}%` }}
        ></div>
        {/* Iterate over the list of percentage */}
        {prayersPercentage.map((prayer, index) => (
          <div className={styles.parentDiv}>
            <div
              key={index}
              className={`${styles.roundedDiv} ${actualTime > prayerPosition[index] ? styles.roundedDivGreen : ''}`} style={{ left: `${prayerPosition[index]}%` }} // Set the left position based on the percentage
            ></div>
            <div
              key={index}
              className={`${styles.prayerDescription} ${actualTime > prayerPosition[index] ? styles.prayerDescriptionDivGreen : ''}`} style={{ left: `${prayerPosition[index]}%` }} // Set the left position based on the percentage
            >
              <h1>{prayerName[index]}</h1>
              <div>{prayers[index]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;