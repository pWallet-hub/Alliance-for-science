import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Header/Sidebar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import News from './Pages/News/News';
import Team from './Pages/Team/Team';
import Activities from './Pages/Activities/Activities';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="sidebar-content">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/activities" element={<Activities />} />
            </Routes>
          </div>
          <Footer />
        </div>
       
      </div>
    </Router>
  );
}

export default App;