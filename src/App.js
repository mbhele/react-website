import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import image4 from './4.png';
import image2 from './3.png';
import image3 from './2.png';
import image1 from './1.png';
import logo from './logo.png';

function Home() {
  return (
    <div className="header" style={{ backgroundColor: '#374eff', marginTop: '60px' }}>
      <Carousel showThumbs={false} autoPlay={true} interval={5000} infiniteLoop={true}>
        <div>
          <img className="one" src={image1} alt="Slide 1" />
        </div>
        <div>
          <img className="one" src={image2} alt="Slide 2" />
        </div>
        <div>
          <img className="one" src={image3} alt="Slide 3" />
        </div>
        <div>
          <img className="one" src={image4} alt="Slide 4" />
        </div>
      </Carousel>
    </div>
  );
}

function About() {
  return (
    <div id="about" className="section">
      <h2>About</h2>
      <p>Your about content goes here.</p>
    </div>
  );
}

function Summaries() {
  return (
    <div id="summaries" className="section">
      <h2>Summaries</h2>
      <p>Your summaries content goes here.</p>
    </div>
  );
}

function Apply() {
  return (
    <div id="apply" className="section">
      <h2>Apply to be a Tutor</h2>
      <p>Your application form goes here.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <div className="navigation">
          <ul>
            <li className="nav-item">
              <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
            </li>
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/summaries">Summaries</Link></li>
            <li className="nav-item"><Link to="/apply">Apply to be a Tutor</Link></li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/summaries" element={<Summaries />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
