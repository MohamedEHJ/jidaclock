import React, { Component } from 'react'
import Clock from 'react-live-clock';
import ProgressBar from './ProgressBar/ProgressBar';
import { useState } from 'react';
import PrayerList from './PrayerList/PrayerList';

import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.text());

export default function PrayerTime() {
  const [actualTime, setActualTime] = useState(0);
  const [actualDate, setActualDate] = useState(new Date().toLocaleDateString());

  // Fetch prayer times from API
  const { data, error, isLoading } = useSWR('https://raw.githubusercontent.com/MohamedEHJ/jidaclock/crongenerated/back/horraires.csv', fetcher);
  console.log("data", data)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const separatedData = data.split('\n');
  const keyValueDatePrayers = separatedData.reduce((acc, cur) => {
    const [date, fajr, dhuhr, asr, maghrib, isha] = cur.split(',');
    acc[date] = [fajr, dhuhr, asr, maghrib, isha];
    return acc;
  }, {});
  console.log("dict", keyValueDatePrayers)

  // Update sharedData when onChange event is triggered in component B
  const handleTimeChange = (event) => {
    let curDate = new Date();
    let curSeconds = (curDate.getHours() * 3600 + curDate.getMinutes() * 60 + curDate.getSeconds());
    setActualTime((curSeconds / 86400) * 100);
  };

  return (
    <>
      <div className="flex flex-col mx-auto">
        <Clock
          className='text-center'
          format={'HH:mm:ss'}
          style={{ fontSize: '10em' }}
          ticking={true}
          onChange={handleTimeChange}
        />

        <ProgressBar className='flex-grow' actualTime={actualTime}  prayers={keyValueDatePrayers[actualDate]}/>
      </div>
      {/* <div>
        <PrayerList prayers={data[actualDate]}></PrayerList>
      </div> */}
    </>
  )
}


