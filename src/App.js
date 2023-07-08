import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Services from './components/pages/Services';



function App() {
  return (
    <Router>
       <Navbar></Navbar>
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Services" element={<Services/>}/>

          
        </Routes>
      
    </Router>
  );
}

export default App;
