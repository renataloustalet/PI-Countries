import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react'
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import AddActivity from './components/addActivity/AddActivity';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path='/' component={Landing} />
        <Route exact path='/countries' component={Home} />
        <Route exact path="/countries/:id" component={Details} />
        <Route exact path='/activity' component={AddActivity} />
      </BrowserRouter>
    </div>
  );
}

export default App;