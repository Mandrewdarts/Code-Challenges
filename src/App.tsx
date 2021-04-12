import React from 'react';
import './App.css';

import {FibComponent} from './components/FibComponent'
import { FizzBuzzComponent } from './components/FizzBuzzComponent';
import { FizzBuzzFibComponent } from './components/FizzBuzzFibComponent';

function App() {
  return (
    <div className="App">
      <div>
        <FibComponent/>
      </div>

      <div style={{ marginTop: 150 }}>
        <FizzBuzzComponent/>
      </div>

      <div style={{ marginTop: 150, marginBottom: 100 }}>
        <FizzBuzzFibComponent/>
      </div>
    </div>
  );
}

export default App;
