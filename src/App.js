// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';

import LifePage from './components/LifePage';



const App = () => {
    return (
      
        <div className="App">
          <HomePage /> 
          <LifePage />
        
        </div>
    );
  };
  
  export default App;