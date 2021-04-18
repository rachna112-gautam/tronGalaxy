import React from 'react'
import './App.css';
import Particles from 'react-particles-js';
import LandingPage from './Components/LandingPage/LandingPage';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Blockchain from './BlockchainProvider/blockchain';

function App(props) {
	return (
    <div>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <Router>
        {/* <Route path="/dashboard" exact component={Dashboard} /> */}
        <Route path="/" exact component={LandingPage} />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contract: state.account,
    personalData: state.personalData
  };
};
export default connect(mapStateToProps)(App);
