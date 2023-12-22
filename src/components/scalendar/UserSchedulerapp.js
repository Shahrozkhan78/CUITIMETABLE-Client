import React, { useState, useEffect } from 'react';
import Scheduler from '../scalendar/Scheduler/Scheduler';

const UserSchedulerapp = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the admin API (adjust the URL accordingly)
    fetch('/client/src/Admin/components/calendar/Schedulerapp.js')
      .then(response => response.json())
      .then(data => {
        setEvents(data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div className='scheduler-container'>
      <Scheduler data={events} readonly={true} />
    </div>
  );
};

export default UserSchedulerapp;
