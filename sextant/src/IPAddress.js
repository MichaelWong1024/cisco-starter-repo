import React, { useEffect, useState } from 'react';
import axios from 'axios';

function IPAddress({ version }) {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    const fetchIP = async () => {
      let url = 'https://api64.ipify.org?format=json'; // default to v6
      if (version === 'v4') {
        url = 'https://api.ipify.org?format=json'; // set to v4 if prop is v4
      }

      try {
        const response = await axios.get(url);
        setIPAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address: ', error);
      }
    };

    fetchIP();
  }, [version]);

  return (
    <div>
      <h3>Public IP{version.toUpperCase()} Address:</h3>
      <p>{ipAddress || 'Fetching...'}</p>
    </div>
  );
}

export default IPAddress;
