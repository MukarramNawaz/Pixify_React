// src/Services.js
import React from 'react';
import './Services.css';
import '../App.css';

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
function Services({ onViewProjects }) {
  return (
    
    <div className="services">
      <div className="service" id="web-design">
        <h3>Web Development</h3>
        <img src={require('../images/Banner 1.png')} alt="WEB DESIGN MAIN" />
        <p>Building Innovative Websites for Your Success</p>
      
        <button class="button" onClick={() => onViewProjects('Web Design')}>
   <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
  Explore
</button>
      </div>
      <div className="service" id="video-editing">
        <h3>Video Editing</h3>
        <img src={require('../images/Video Editing.gif')} alt="WEB DESIGN MAIN" />
        <p>Transforming Footage into Masterpieces</p>
        <button class="button" onClick={() => onViewProjects('Video Editing')}>
   <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
  Explore
</button>
      </div>
      <div className="service" id="Thumbanail-design">
        <h3>Thumbanail Design</h3>
        <img src={require('../images/Thumbanil_Main.png')} alt="WEB DESIGN MAIN" />
        <p>Eye-Catching Thumbnails for Maximum Clicks</p>
        <button class="button" onClick={() => onViewProjects('Thumbanail Design')}>
   <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
  Explore
</button>
      </div>
    </div>
  );
}

export default Services;
