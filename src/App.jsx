import React from 'react';
import NavBar from './components/Navbar'
import Counters from './components/Counters';
import Example from './components/Example';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
      <Example />
    </React.Fragment>
  );
}

export default App;
