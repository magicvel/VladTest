import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Cat from './Cat';
import Dog from './Dog';
import Post from './Post';
import Form from './Form';

import './style/form.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Cat/> */}
    <br/>
    {/* <Dog/> */}

    {/* <Post/> */}
    <Form/>
  </React.StrictMode>
);
