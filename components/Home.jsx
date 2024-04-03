import React, { useEffect, useState } from 'react';
import { useAnimate } from 'framer-motion';
export const Maestro = () => {
  const [scope, animate] = useAnimate();

  const [size, setSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    generateGridCount();
    window.addEventListener('resize', generateGridCount);

    return () => window.removeEventListener('resize', generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 75);
    const rows = Math.floor(document.body.clientHeight / 75);

    setSize({
      columns,
      rows,
    });
  };

  const handleMouseLeave = (e) => {
    // @ts-ignore
    const id = `#${e.target.id}`;
    animate(id, { background: 'rgba(129, 140, 248, 0)' }, { duration: 1.5 });
  };

  const handleMouseEnter = (e) => {
    // @ts-ignore
    const id = `#${e.target.id}`;
    animate(id, { background: 'rgba(0, 133, 255, 0.75)' }, { duration: 0.15 });
  };

  return (
    <div className='bg-black'>
      <div
        ref={scope}
        className='grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]'
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className='h-full w-full'
          />
        ))}
      </div>
      <div className='pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8'>
        <p className='tracking-tighest text-center text-7xl font-black uppercase tracking-tighter text-white sm:text-8xl md:text-9xl'>
          Maestro
        </p>
        <p className='text-center text-3xl lowercase tracking-tighter text-white md:text-3xl'>
          A Kubernetes-like Distributed Agent Network for Long-Context Tasks
        </p>
        <br></br>
        {/* <code className="tracking-tighter text-center text-medium text-white ">
          The Transformers / Attention Mechanism has a difficult time scaling to solve problems  &gt;100k Tokens. Utilizing <b>over a decade of experience in Distributed Networking, Operating Systems, and High Performance Computing</b>, we propose Maestro, a Distributed Network of Agents capable of solving problems beyond a single LLM's context-window utilizing sharding, load-balancing and task scheduling on the Agent level.
        </code> */}
        <br></br>
        <div className='flex flex-row space-x-3'>
          <a target='_blank' href='https://www.getwaitlist.com/waitlist/12014'>
            <button className=' text-md tracking-tigher font pointer-events-auto rounded-full bg-sky-500 p-4 px-4 py-2 text-white '>
              Join The Waitlist
            </button>
          </a>
          <a href='https://calendly.com/peregrine-labs/30min' target='_blank'>
            <button className=' tracking-tigher text-md pointer-events-auto rounded-full bg-sky-500 p-4 px-4 py-2 text-white '>
              Schedule A Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
