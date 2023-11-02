import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress'; // Assuming this is another component you have which displays IP addresses.
import LatencyDisplay from './LatencyDisplay'; // This is the updated LatencyDisplay component

function App() {
  return (
    <div className="App">
      <Banner bannerText="Cisco Sextant Dashboard" />
      <Exhibit name="IPv4 Address">
        <IPAddress version="v4" />
      </Exhibit>
      <Exhibit name="IPv6 Address">
        <IPAddress version="v6" />
      </Exhibit>
      <Exhibit name="Packet Latency">
        <LatencyDisplay />
      </Exhibit>
    </div>
  );
}

export default App;
