import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('main-app'));

setTimeout(() => {
    root.render(

        // <React.StrictMode>
        <App />
        // </React.StrictMode>
    );

}, 3000);
