'use client';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FAQ from '../../components/FAQ';
const ServicesPage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-r from-black via-black to-black'>
      <br></br>
      <br></br>
      <iframe
        src='https://peregrine-app-hrg6u8a6vub6q76measau9.streamlit.app/?embed=true'
        width='900'
        height={500}
        className=''
      ></iframe>
    </div>
  );
};

export default ServicesPage;
