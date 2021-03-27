import './App.css';
import Particles from "react-particles-js";
import LandingPage from './Components/LandingPage/LandingPage';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Dashboard /> */}
        
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
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
