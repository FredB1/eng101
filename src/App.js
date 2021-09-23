import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import {About, Header, Home, Journals, Footer} from './components'

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/journals" exact component={() => <Journals />} />
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
