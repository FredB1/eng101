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
            <Route path="eng101/" element={<Home/>} />
            <Route path="eng101/about" element={<About />} />
            <Route path="eng101/journals" element={<Journals />}/>
            <Route path="eng101/journals/:title" element={<JournalPage />}/>
          </Routes>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
