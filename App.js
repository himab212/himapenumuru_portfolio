import React from 'react';
import './App.css';
//import {HashLink as Link} from 'react-router-hash-link';
import Navbararea from './component/navbararea';
import Banner from './component/banner';
import Next from './component/next';
import Abt from './component/abt';
import Resume from './component/Resume';
import Project from './component/project';
import Footer from './component/footer';
import Certificate from './component/certificate';

//fetch("./detail.json")
// const data = require("./detail.json");
//  console.log(data);

function App() {
  return (
    <div className="App">
      <div id="home" className="App-header"> 
        <div className="navigation">
          <Navbararea></Navbararea> 
        </div>  
        <div className="banner-layout">
          <Banner></Banner> 
        </div>
        <div>
          <Next></Next>
        </div>
      </div>
      <div id="about" className="about">
        <Abt></Abt>
      </div>
      <div id="resume" className="resume">
        <Resume></Resume>
      </div>
      <div id="project" className="project">
        <Project></Project>
      </div>
      <div id="award">
        <Certificate></Certificate>
      </div>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
