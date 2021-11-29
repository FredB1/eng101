import React from "react";
import { HashRouter, Routes, Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import {About, Header, Home, Journals, Footer} from './components'
import {JournalPage} from './components/JournalPage';
function App() {
  return (
    <div className="App">
    <Router basename="/">
    <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/journals" element={<Journals />}/>
            <Route path="/journals/:title" element={<JournalPage />}/>
          </Routes>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
