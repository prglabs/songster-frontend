'use client';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React, { useState, useEffect } from 'react';
import { useAnimate } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/PeregrineLabsPage.module.css'; // Import custom CSS file for styles
import WaterDropGrid from '../components/WaterDropGrid'
import { TypeAnimation } from "react-type-animation";
import Image from 'next/image';
// import SquigglyLines from "./SquigglyLines";

const PeregrineLabsPage: React.FC = () => {
  const [scope, animate] = useAnimate();

  const [size, setSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    generateGridCount();
    window.addEventListener("resize", generateGridCount);

    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 75);
    const rows = Math.floor(document.body.clientHeight / 75);

    setSize({
      columns,
      rows,
    });
  };

  return (
    <div className=" flex justify-center items-center">
      <div className={`max-w-xs`}>
        <div className = "rounded-bg text-center rounded">   
        <br></br>
        <br></br>
          <WaterDropGrid/>
          <div className="">
            <p className="underline decoration-indigo-500 text-left justify-center tracking-tighter text-white font-bold text-6xl mb-4">peregrine labs.</p>
          </div>

              <div className='text-sm text-white text-left'>
              A Cloud-Native R&D firm with Subject Matter Expertise in <b>Artificial Intelligence, High Performance Computing, and Generative AI.</b>
            </div>
        </div>
        <div>
      </div>
      
      <div className="max-w-sm block text-white">
            <a
              href="https://www.linkedin.com/company/prglabs/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" style={{ marginRight: '10px' }}/>
              </a>
              {' '}
              <a
              href="https://github.com/prglabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" style={{ marginRight: '10px' }}/>
            </a>
            {/* <button className='text-right bg'>contact us</button> */}
          </div>  
      </div>
    </div>
  );
};

export default PeregrineLabsPage;


