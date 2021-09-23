import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import {About, Header, Home, Journals, Footer} from './components'

function App() {
  return (
    <div className="App">
    <HashRouter basename="/">
    <Header/>
    <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/journals" exact component={() => <Journals />} />
        </Switch>
        <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
