import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Gallery from './components/Gallery/Gallery';
import Price from './components/Price/Price';


import './App.css';

const App = () => {
  return (
      <div>
        <Header />
        <Main />
        <About />
        <Services />
        <Team />
        <Price />
        <Gallery />
        <Footer />
      </div>

  );
};

export default App;