import React, { Component } from 'react'
import Clock from 'react-live-clock';
import ProgressBar from './ProgressBar/ProgressBar';
import { useState } from 'react';
import PrayerList from './PrayerList/PrayerList';

import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PrayerTime() {
  const [actualTime, setActualTime] = useState(0);
  const [actualDate, setActualDate] = useState(new Date().toLocaleDateString());

  // Fetch prayer times from API
  const { data, error } = useSWR('/api/staticData', fetcher);
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  const prayersPercentage = data[actualDate];

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

        <ProgressBar className='flex-grow' actualTime={actualTime} prayersPercentage={prayersPercentage} prayers={data[actualDate]}/>
      </div>
      {/* <div>
        <PrayerList prayers={data[actualDate]}></PrayerList>
      </div> */}
    </>
  )
}


