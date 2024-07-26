import React from 'react';
import ReactDOM from 'react-dom/client';
import RocketLaunch from './RocketLaunch';
import LaunchMap from './LaunchMap.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RocketLaunch /> */}
    <LaunchMap/>
  </React.StrictMode>
);