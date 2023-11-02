import React from 'react';
import './App.css';
import Banner from './Banner'; // Importing the Banner component
import Exhibit from './Exhibit'; // Importing the Exhibit component

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="Exhibit Title">
        {/* Other components or content will go here */}
      </Exhibit>
    </div>
  );
}

export default App;
