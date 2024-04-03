'use client';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React, { useState, useEffect } from 'react';
import ServiceSlider from '../../components/ServiceSlider';
import Navbar from '../../components/Navbar';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <br></br>
      <ServiceSlider></ServiceSlider>
      <br></br>
      <br></br>
    </div>
  );
};

export default ServicesPage;
