import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react'
import Home from './components/Home/Home';
import Card from './components/Card/Card.jsx';
import AddActivity from './components/addActivity/AddActivity';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Nav />
        <Route exact path='/' component={Home} />
        <Route exact path='/countries/:id' component={Card} />
        <Route exact path='/activity' component={AddActivity} />
      </BrowserRouter>
    </div>
  );
}

export default App;