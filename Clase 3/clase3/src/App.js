import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import './app.css'

function App() {
  return (
    <div id="wrapper">
      <Sidebar/>
      
      <Content/>
    </div>
  
  );
}

export default App;
