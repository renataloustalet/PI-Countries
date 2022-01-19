import { BrowserRouter, Route, useLocation } from 'react-router-dom';
import React from 'react'
import Home from './components/Home/Home';
import Card from './components/Card/Card.jsx';
import AddActivity from './components/addActivity/AddActivity';
import Nav from './components/Nav/Nav';
import "./App.scss"

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Route exact path='/countries' component={Home} />
        <Route exact path="/countries/:id" component={Card} />
        <Route exact path='/activity' component={AddActivity} />
      </BrowserRouter>
    </div>
  );
}

export default App;