import './App.css';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import React from 'react'
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Landing />
    </div>
  );
}

export default App;