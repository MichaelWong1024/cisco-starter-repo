import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress'; // Importing the IPAddress component

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="IPv4 Address">
        <IPAddress version="v4" />
      </Exhibit>
      <Exhibit name="IPv6 Address">
        <IPAddress version="v6" />
      </Exhibit>
    </div>
  );
}

export default App;
