"use client";

import Image from 'next/image';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import img from '@/images/globe.png';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden font-sans w-full">
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-end z-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[90%] max-w-250 h-75 sm:h-100 bg-[#3B28CC]/40 blur-[90px] sm:blur-[120px] rounded-[50%] z-0"></div>
        <div className="relative z-10 w-[200%] sm:w-[150%] md:w-[120%] lg:w-full max-w-300 opacity-90 translate-y-[15%] sm:translate-y-[20%]">
          <Image src={img} alt="World Globe Background" className="w-full h-auto object-cover object-top" priority/>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 pt-28 sm:pt-36 w-full max-w-5xl">
        <div className="relative flex items-center justify-center w-full max-w-md mb-8">
          <div className="absolute left-0 right-0 bg-linear-to-r  from-transparent via-white/10 to-transparent"></div>
          <div className="relative z-10 flex items-center gap-2  border border-white/5 rounded-full px-4 py-1.5 shadow-xl">
            <span className="text-lg">💼</span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm">
              <span className="font-bold text-white tracking-wide">50,000+</span>
              <span className="text-gray-400 font-semibold tracking-widest uppercase text-[10px] sm:text-xs">
                New Jobs This Month
              </span>
            </div>
          </div>
        </div>


        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-center text-white mb-6 leading-tight">
          Find Your Dream Job Today
        </h1>

        <p className="text-gray-400 text-center max-w-2xl text-sm sm:text-base md:text-lg mb-12 leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </p>

        <div className="w-full max-w-4xl bg-[#131313]/90 backdrop-blur-md border border-white/10 rounded-full p-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <div className="flex-1 flex items-center px-4 py-2 sm:py-0 gap-3 w-full">
            <FiSearch className="text-gray-400 text-lg sm:text-xl shrink-0" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent border-none outline-none text-white placeholder-gray-500 text-sm sm:text-base"
            />
          </div>

          <div className="hidden sm:block  h-6 bg-white/10 mx-2"></div>
          <div className="sm:hidden w-full  bg-white/10 my-1"></div>
          <div className="flex-1 flex items-center px-4 py-2 sm:py-0 gap-3 w-full">
            <FiMapPin className="text-gray-400 text-lg sm:text-xl shrink-0" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent border-none outline-none text-white placeholder-gray-500 text-sm sm:text-base"
            />
          </div>


          <button className="w-full sm:w-auto bg-[#5932EA] hover:bg-[#4a26cc] transition-colors rounded-full p-3 sm:p-4 flex items-center justify-center mt-2 sm:mt-0 shrink-0">
            <FiSearch className="text-white text-lg sm:text-xl" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
          <span className="text-gray-400 text-xs sm:text-sm mr-1 sm:mr-2">Trending Position</span>
          {['Product Designer', 'AI Engineering', 'Dev-ops Engineer'].map((tag) => (
            <span
              key={tag}
              className="bg-[#1a1a1a] hover:bg-[#252525] transition-colors border border-white/10 rounded-full px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs text-gray-300 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-20 text-center w-full px-4 mt-auto pb-16 sm:pb-24 pointer-events-none">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] tracking-tight text-gray-300 leading-snug">
          Assisting over <span className="font-semibold text-white">15,000 job seekers</span>
          <br className="hidden sm:block" /> find their dream positions.
        </h2>
      </div>

    </section>
  );
};

export default Hero;

