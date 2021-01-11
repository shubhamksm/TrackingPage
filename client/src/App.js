import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import TrackingInfo from './Components/TrackingInfo';

const App = () => {

  const [trackingData, setTrackingData] = useState({});

  const fetchData = async (requestedId) => {
    const response = await axios({ method: 'get', baseURL: 'http://localhost:3000/orders/', url:`${requestedId}` });
    setTrackingData({ ...response.data });
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Main App</div>
        <SearchBar fetchData={fetchData} />
        <TrackingInfo trackingData={trackingData} />
      </header>
    </div>
  );
}

export default App;
