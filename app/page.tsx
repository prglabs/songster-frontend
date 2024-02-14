'use client';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React, { useEffect, useState } from 'react';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import WaterDropGrid from '../components/WaterDropGrid';

const SongsterPage: React.FC = () => {
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
    <div className="sm:max-w-sm px-4 md:px-0 text-center">
      <div className="rounded mt-24">
        <WaterDropGrid />
        <h1 className="underline decoration-[#6366F2] justify-center tracking-tighter text-white font-bold text-4xl mt-8">Songster Capital</h1>
        <p className="text-sm text-white mt-6 md:w-[420px] md:-ml-[18px]">
          A global investment firm with subject matter expertise in cloud
          computing, artificial intelligence, and quantum mechanics
        </p>
        <div className="flex gap-6 text-white items-center justify-center mt-12">
          <a
            href="https://www.linkedin.com/company/songster-capital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm block"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a
            href="mailto: media@songstercapital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm block"
          >
            <Image src={"/mail-icon.svg"} width={48} height={48} alt='icon email' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SongsterPage;


