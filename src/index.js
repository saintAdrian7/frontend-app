import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {WorkoutContextProvider} from './context/Workoutscontext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <WorkoutContextProvider>
    <App />
    </WorkoutContextProvider>
    
  
);