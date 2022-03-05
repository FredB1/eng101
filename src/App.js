import React from "react";
import { HashRouter, Routes, Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import {About, Header, Home, Journals, Footer} from './components'
import {JournalPage} from './components/JournalPage';
import data from './data.json'
function App() {
  return (
    <div className="App">
    <HashRouter basename="/">
    <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/journals" element={<Journals data={data.blogs}/>}/>
            <Route path="/journals/:title" element={<JournalPage data={data.blogs}/>}/>
          </Routes>
        <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
