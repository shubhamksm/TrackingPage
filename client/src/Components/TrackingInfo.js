import React from 'react';

const TrackingInfo = ({ trackingData }) => {
  return <div>
    Tracking Details
    {JSON.stringify(trackingData)}
  </div>
}

export default TrackingInfo;