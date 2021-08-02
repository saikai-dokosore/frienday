import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Calendar from './Calendar';

type Users = {
  name: string;
};


const Home: React.FC = () => {

  const { name } = useParams<Users>();
  console.log(name);
 
  return (
    <div>
      <div className="header">
        <h1>Frienday</h1>
        <p>{name}</p>
      </div>
      <div className="calendar">
        <Calendar />
      </div>
    </div>
  );
};

export default Home;
