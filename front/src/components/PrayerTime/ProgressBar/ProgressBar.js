import React from "react";
import styles from "./ProgessBar.module.css";
import PrayerList from "../PrayerList/PrayerList";

// Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format

const ProgressBar = ({ actualTime, prayersPercentage, prayers }) => {
  const prayerName = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

  const prayerPosition = prayersPercentage.map((prayer) => {
    const [hours, minutes] = prayer.split(":");
    const secs = parseInt(hours) * 3600 + parseInt(minutes) * 60;
    return ((secs / 86400) * 100).toFixed(1);
  });

  return (
    <div>
      <div className="w-full bg-[#4d4847] h-4 rounded-full relative w-[100%]">
        <div
          className="bg-[#998f8d] h-full rounded-full"
          style={{ width: `${actualTime + 1}%` }}
        ></div>
        {/* Iterate over the list of percentage */}

        <div className={styles.parentDiv}>
          {prayersPercentage.map((prayer, index) => (
            <>
              <div
                className={`${styles.roundedDiv} ${styles.roundedDiv} ${
                  actualTime > prayerPosition[index]
                    ? styles.roundedDivGreen
                    : ""
                }`}
                style={{ left: `${prayerPosition[index]}%` }}
              >
                <h1 className="mt-[60px] -ml-[55px] -rotate-[50deg] text-right">
                  {prayerName[index].toUpperCase()}
                </h1>
              </div>
            </>
          ))}
        </div>

        <PrayerList
          prayers={prayers}
          actualTime={actualTime}
          prayerPosition={prayerPosition}
        ></PrayerList>
      </div>
    </div>
  );
};

export default ProgressBar;
