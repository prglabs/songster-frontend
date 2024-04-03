import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useAnimation, useInView, motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
const WaterDropHero = () => {
  return (
    <section className='text-slat-100 overflow-hidden bg-black px-8 py-24 md:px-12 md:py-32'>
      <div className='relative mx-auto max-w-5xl'>
        <div className='pointer-events-none relative z-10'>
          <Reveal>
            <h1 className='pointer-events-auto text-6xl font-black tracking-tight text-slate-100 underline decoration-indigo-500 md:text-8xl'>
              Peregrine Labs
            </h1>
            <br></br>
          </Reveal>
          <Reveal>
            <h2 className='pointer-events-auto my-2 text-2xl text-slate-400 md:my-4 md:text-4xl'>
              A Cloud-Native Systems Integrator With Subject-Matter Expertise In{' '}
              <span className='font-semibold text-indigo-500'>
                <TypeAnimation
                  sequence={[
                    'Artificial Intelligence.',
                    1000,
                    'High-Performance Computing.',
                    1000,
                    'Data Analytics.',
                    1000,
                  ]}
                  wrapper='span'
                  speed={50}
                  repeat={Infinity}
                  className='font-bold '
                />
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className='pointer-events-auto max-w-xl text-sm text-slate-300 md:text-base'>
              <a
                href='https://www.linkedin.com/company/prglabs/about/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm'
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size='2x'
                  style={{ marginRight: '10px' }}
                />
              </a>{' '}
              <a
                href='https://github.com/prglabs'
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm'
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size='2x'
                  style={{ marginRight: '10px' }}
                />
              </a>
            </p>
          </Reveal>
          <Reveal>
            <a href='/contact'>
              <button className='pointer-events-auto mt-4 rounded bg-indigo-600 px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 md:mt-6'>
                Contact Us
              </button>
            </a>
          </Reveal>
        </div>
        <DotGrid />
      </div>
    </section>
  );
};

const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 250 },
        { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className='group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600'
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className='dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white'
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className='absolute right-0 top-[50%] z-0 grid max-w-[75%] -translate-y-[50%]'
    >
      {dots}
    </div>
  );
};

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} className='relative w-fit overflow-hidden'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className='absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600'
      />
    </div>
  );
};

export default WaterDropHero;
