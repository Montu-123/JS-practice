import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  return (
    <>
        {/* <Router> */}
      {/* <Navbar/> */}
      <Navbar title = "Navbar" about = "About"/>
      <div className = "container">
      {/* <Routes>
        <Route path="/" element={<Textarea />} >
        </Route>
          <Route path="/about" element={<About />} >
          </Route>
          <Route path="/home" element={<Textarea />} >
          </Route>
        </Routes> */}
          <Textarea heading = "Enter the text below"/>
        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;