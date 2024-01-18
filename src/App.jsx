import React from 'react';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';
import About from './sections/aboutme/About';
import Services from './sections/services/Services';
import Contact from './sections/contact/Contact';
import Portfolio from './sections/portfolio/Portfolio';

const App = () => {
  //app jsx code
  
  return (
      <main>
          <Navbar />
          <Header />
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
    </main>
    
  )
}

export default App;
//rafce