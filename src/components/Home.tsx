import React, { useState, useEffect } from 'react';
import Calendar from './Calendar';

const Home: React.FC = () => {
 
  return (
    <div>
      <div className="header">
        <h1>Frienday</h1>
      </div>
      <div className="calendar">
        <Calendar />
      </div>
    </div>
  );
};

export default Home;
