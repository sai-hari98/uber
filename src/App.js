import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';

import login1 from './components/login1';

import login2 from './components/login2';

import dsignup from './components/dsignup';

import usignup from './components/usignup';

import ride from './components/ride';

import transfer from './components/transfer';

import Navbar from './components/CustomNavbar';

import DriverRegistration from './components/dsignup';

class App extends Component {
  render() {
    return (
      <Router>

        <div>

          <Navbar />

          <Route exact path="/" component={Home} />

          <Route path="/login1" component={login1} />

          <Route path="/login2" component={login2} />

          <Route path="/dsignup" component={DriverRegistration} />

          <Route path="/usignup" component={usignup} />

          <Route path="/ride" component={ride} />

          <Route path="/transfer" component={transfer} />
          
        </div>

      </Router>
    );
  }
}
export default App;