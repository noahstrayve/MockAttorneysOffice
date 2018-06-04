import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar/navbar'
import LandingPage from './components/landing/landing'
import Sidebar from './components/sidebar/sidebar'
import Headline from './components/header/header'
import History from './components/about/about'
import Attorneys from './components/team/team'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Contact from './components/contact/contact'

class App extends Component {
  render() {
    return (
    <Router>
      <div>

        <Route exact path="/" 
                   render={() => <div>
                                    <Headline />
      								              <Sidebar />
        							               <LandingPage />
                                  </div>} />

      <Route exact path="/contact" 
                   render={() => <div>
                                    <Headline />
                                    <Sidebar /> 
                                    <Contact />
                                  </div>} />

      <Route exact path="/about" 
                   render={() => <div>
                                    <Headline />
                                    <Sidebar /> 
                                    <History />
                                  </div>} />

      <Route exact path="/team" 
                   render={() => <div>
                                    <Headline />
                                    <Sidebar /> 
                                    <Attorneys />
                                  </div>} />
                                  
      </div>
    </Router>
    );
  }
}

export default App;