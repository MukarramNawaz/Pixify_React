// src/GraphicDesignModal.js
import React from 'react';
import './Modal.css';

const GraphicDesignModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => e.stopPropagation()} className='modalContainer'>
        <p className='closeBtn' onClick={onClose}>X</p>
        <div className='content'>
          <img src={require('../images/Thumbanil_Main.png')} alt='Graphic Design Main' />
          <h1>Thumbanail Design</h1>
          <p className='modal_text_P'> Creative & Custom Thumbnails to Stand Out </p>
          <div className='projectsGrid'>
            <div className='projectCard'>
              <img src={require('../images/Mystic_Thumbanil 2.jpg')} alt='Project 1' />
           
            </div>
            <div className='projectCard'>
              <img src={require('../images/LALA_Thumbanil.jpg')} alt='Project 2' />
           
            </div>
            <div className='projectCard'>
              <img src={require('../images/Siraj_Thumbanil.jpg')} alt='Project 3' />
          
            </div>
            <div className='projectCard'>
              <img src={require('../images/Sherry_Thumbanil 2.jpg')} alt='Project 4' />
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignModal;
