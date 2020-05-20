//Acts as the "main" that executes everything

import React from 'react';
import './App.css';

// BrowserRouter is the parent component that holds <Route> components. <Route> tells app which other components to render based on the route.
//"as" assigns alias for BrowserRouter called Router
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

// <Route> we use to decide what content to be rendered based on the URL path
// "exact path" - used when we have multiple identical paths
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/education">
          <Education />
        </Route>

        <Route path="/skills">
          <Skills />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

      </div>
    </Router>
    )
}

export default App;
