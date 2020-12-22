import './App.css';
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'
import AchieveDisplay from './components/pages/AchieveDisplay'
import React, { useState } from 'react'

function App() {

  const [navbar, setNavbar] = useState(false);
  const [topBtn, setTopBtn] = useState(false);


  window.onscroll = function () {
    let t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t >= 500) {
      if (!navbar) setNavbar(true);
      if (!topBtn) setTopBtn(true);
    } else if (t <= 120) {
      if (navbar) setNavbar(false);
      if (topBtn) setTopBtn(false);
    }
    else if (t >= 120 && t <= 500) {
      if (!navbar) setNavbar(true);
      if (topBtn) setTopBtn(false);
    }
  }



  return (
    <div className="app">
      <Navbar fixNavBar={navbar} />
      <div className="page_layout">
        <Route path="/" exact render={() => <Home topBtn={topBtn} />}></Route>
        <Route path="/achievement-display" component={AchieveDisplay}></Route>
        <Route path="/contact" component={Contact}></Route>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
