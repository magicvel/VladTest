import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Cat from './Cat';
import Dog from './Dog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Cat/>
    <Dog/>
  </React.StrictMode>
);
