import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar/navbar'
import LandingPage from './components/landing/landing'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <LandingPage />
      </div>
    );
  }
}

export default App;
