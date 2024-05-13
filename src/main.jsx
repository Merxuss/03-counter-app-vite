import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';
// import { App } from './HelloWorldApp';
// import { createRoot } from 'react-dom/client';



// const root = createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
// root.render(
//     <App />
//     );

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 20 } />
        {/* <FirstApp /> */}
        {/* <HelloWorldApp /> */}
    </React.StrictMode>
);