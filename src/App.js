import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar/navbar'
import LandingPage from './components/landing/landing'
import Sidebar from './components/sidebar/sidebar'
import Headline from './components/header/header'

class App extends Component {
  render() {
    return (
      <div>
      	<Headline />
      	<Sidebar />
        <LandingPage />
      </div>
    );
  }
}

export default App;