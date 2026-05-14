import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/SecondsCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;

setInterval(() => {
    root.render(
        <React.StrictMode>
            <SecondsCounter seconds={counter} />
        </React.StrictMode>
    );
    counter++;
}, 1000);