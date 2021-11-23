import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react'
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home';
import Card from './components/Card/Card.jsx';
import AddActivity from './components/addActivity/AddActivity';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Landing} />
        <Route exact path='/countries' component={Home} />
        <Route exact path="/countries/:id" component={Card} />
        <Route exact path='/activity' component={AddActivity} />
      </BrowserRouter>
    </div>
  );
}

export default App;