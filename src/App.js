import React from "react";
import Header from "./sections/header/Header";
import headerimg from "./images/header-img.jpg"
import Values from "./sections/values/Values"
import Services from "./sections/services/Services"
import Skills from "./sections/skills/Skills";
import Industries from "./sections/industries/Industries";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";


function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div class="container-fluid nav-menu">
            <a class="navbar-brand" href="./"><strong>SysTech</strong></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item menu-item">
                  <a class="nav-link " href="#header">Home</a>
                </li>
                <li class="nav-item menu-item" >
                  <a class="nav-link" href="#services">Services</a>
                </li>
                <li class="nav-item menu-item" >
                  <a class="nav-link" href="#skills">Technology</a>
                </li>
                <li class="nav-item menu-item" >
                  <a class="nav-link" href="#contact">Contact Us</a>
                </li>
                <li class="nav-item menu-item">
                  <a class="nav-link" href="#footer">About Us</a>
                </li>
                
              </ul>
            </div>
        </div>
        </nav>
        <section id="header">
          <Header img={headerimg}/>
        </section>
        <section id="values">
          <Values/>
        </section>
        <section id="services">
          <Services/>
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="industries">
          <Industries/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
        <section id="footer">
          <Footer/>
        </section>
      
      
      
      
      
      
      
    </div>
    
  );
}

export default App;
