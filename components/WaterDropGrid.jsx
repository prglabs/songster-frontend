import anime from 'animejs';
import { useEffect, useRef } from 'react';

const WaterDropGrid = () => {
  const dotGridRef = useRef();
  useEffect(() => {
    if (dotGridRef.current) {
      // Trigger a click event on the top-left corner dot when the component loads
      const topLeftDot = dotGridRef.current.querySelector(
        '.dot-point[data-index="0"]'
      );
      if (topLeftDot) {
        topLeftDot.click();
      }
    }
  }, []);
  return (
    <div className='bg-white-900 relative grid place-content-center px-1 py-1'>
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 23;
const GRID_HEIGHT = 23;

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 150 },
        { value: 1, easing: 'easeInOutQuad', duration: 200 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 150 },
        { value: 0, easing: 'easeInOutQuad', duration: 200 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 150 },
        { value: 0.5, easing: 'easeInOutQuad', duration: 300 },
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
          className='group cursor-crosshair rounded-full p-1 transition-colors hover:bg-slate-600'
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className='dot-point h-1 w-1 rounded-full bg-gradient-to-b from-slate-200 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white md:h-2 md:w-2'
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
      className='grid w-fit'
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
