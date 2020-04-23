import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPanel from './components/MainPanel/MainPanel';
import { Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">       
      <MainPanel />
      {/* <Alerts /> */}
    </div>
  );
}

export default App;
