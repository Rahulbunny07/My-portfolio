import React from "react";
import Rahul from './images/my_pic.jpg';

function Nav() {

  return (
    <>
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: `url(${Rahul})` }} />
              <h1 id="colorlib-logo"><a href="index.html">Rahul Taritla</a></h1>
              <span className="email"><i className="icon-mail"></i>rahultaritla@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#intro" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#certificate" data-nav-section="certificate">Certificates</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Education</a></li>
                  <li><a href="#skills" data-nav-section="skill">Skills</a></li>
                  <li><a href="#tools" data-nav-section="tools">Tools</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
              <li><a href="https://drive.google.com/file/d/1xAa-yS4Vyn7YkEcvhrK8py7ZsbbCB1KD/view" target="_blank" rel="noopener noreferrer">resume</a></li>
                <li><a href="https://www.linkedin.com/in/rahultaritla/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Rahulbunny07" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                Dream Without Fear !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Nav;