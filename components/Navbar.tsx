// import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faContactBook,
  faContactCard,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const Navbar = () => {
  return (
    <header className='header sticky top-0 flex flex-col items-center justify-between bg-black px-8 py-2 shadow-md md:flex-row md:text-xs'>
      {/* <!-- logo --> */}
      <h1 className='w-3/12'>
        <a href=''></a>
      </h1>

      {/* <!-- navigation --> */}
      <nav className='fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 px-2 py-1.5 text-sm text-neutral-500'>
        <ul className='flex items-center  font-bold'>
          <li>
            <a href='/' rel='nofollow' className=''>
              <div className='group relative w-fit px-1.5 font-medium text-neutral-300 transition-transform duration-300 active:scale-95'>
                <button className='relative z-10 rounded-lg p-0.5 duration-300 group-hover:scale-110'>
                  {/* <FontAwesomeIcon icon={faHome}/> */}
                  <Image
                    className='text-center text-white'
                    src='/home.svg'
                    width={20}
                    height={20}
                    alt='Picture of the author'
                    style={{ marginTop: '3px', opacity: 0.9 }} // Add margin-top: 2px inline style
                  />
                </button>
                <span className='pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-50 group-active:opacity-0' />
              </div>
            </a>
          </li>
          <li>
            <a href='/contact'>
              <div className='group relative w-fit px-4 font-medium text-neutral-300 transition-transform duration-300 active:scale-95'>
                <button className='relative z-10 rounded-lg p-0.5 duration-300 group-hover:scale-110'>
                  <FontAwesomeIcon icon={faPhone} />
                </button>
                <span className='pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-50 group-active:opacity-0' />
              </div>
            </a>
          </li>
          <li>
            <a href='/services'>
              <div className='group relative w-fit px-3 font-medium text-neutral-300 transition-transform duration-300 active:scale-95'>
                <button className='relative z-10 rounded-lg p-0.5 duration-300 group-hover:scale-110'>
                  Services
                </button>
                <span className='pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-50 group-active:opacity-0' />
              </div>
            </a>
          </li>
          {/* <li>
          <a href="/solutions">
          <div className="font-medium text-neutral-300 px-3 group relative w-fit transition-transform duration-300 active:scale-95">
             <button className="relative z-10 rounded-lg p-0.5 duration-300 group-hover:scale-110">
                Solutions
              </button>
              <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-50 group-active:opacity-0" />
            </div>
          </a>
          </li> */}
          {/* <li>
          <a href="/startups">
          <div className="font-medium text-neutral-300 px-3 group relative w-fit transition-transform duration-300 active:scale-95">
             <button className="relative z-10 rounded-lg p-0.5 duration-300 group-hover:scale-110">
                Startups
              </button>
              <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-50 group-active:opacity-0" />
            </div>
          </a>
          </li> */}

          {/* <a href="/faq">
            <li className="text-white p-4 border-b-2 border-indigo-600 border-opacity-0 hover:border-opacity-100 hover-text-indigo-600 duration-200 cursor-pointer">
              FAQ
            </li>
          </a> */}
          <br></br>
          {/* <br></br> */}
          <a href='/maestro'>
            <button
              className={`
            relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
            border-neutral-700 px-2 py-1.5 font-medium
            text-neutral-300 transition-all duration-300
            
            before:absolute before:inset-0
            before:-z-10 before:translate-y-[200%]
            before:scale-[2.5]
            before:rounded-[100%] before:bg-neutral-50
            before:transition-transform before:duration-1000
            before:content-[""]
    
            hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
            hover:before:translate-y-[0%]
            active:scale-100`}
            >
              Checkout Maestro!
            </button>
          </a>
          {/* Add more menu items here */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
