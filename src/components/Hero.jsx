"use client";

import Image from "next/image";
import { FiSearch, FiMapPin } from "react-icons/fi";
import img from "@/images/globe.png";

const Hero = () => {
  return (
    <section className="relative flex min-h-svh w-full flex-col overflow-hidden font-sans">
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 flex w-full items-end justify-center">
        <div className="absolute bottom-[-10%] left-1/2 h-56 w-[90%] max-w-lx -translate-x-1/2 rounded-full bg-[#3B28CC]/40 blur-[80px] sm:h-80 sm:blur-[120px] md:w-[70%] lg:w-[60%]"></div>
        <div className="relative z-10 w-[140%] max-w-360 translate-y-[18%] opacity-90 sm:w-[120%] md:w-full lg:w-[92%]">
          <Image src={img} alt="World Globe Background" className="h-auto w-full object-cover object-top" priority />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <div className="mb-6 flex w-full justify-center sm:mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#282626] bg-[#141414]/90 px-4 py-2 shadow-xl sm:px-5 sm:py-2.5">
            <span className="text-lg sm:text-xl">💼</span>
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] sm:text-sm">
              <span className="font-bold tracking-wide text-white">50,000+</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400 sm:text-xs">New Jobs This Month</span>
            </div>
          </div>
        </div>

        <h1 className="mb-5 max-w-4xl text-center text-4xl font-bold tracking-tight text-white leading-[1.05] sm:mb-6 sm:text-5xl md:text-6xl lg:text-[64px]">
          Find Your Dream Job Today
        </h1>

        <p className="mb-8 max-w-2xl text-center text-sm leading-relaxed text-gray-400 sm:mb-10 sm:text-base md:text-lg">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role faster.
        </p>

        <div className="w-full max-w-4xl rounded-[28px] border border-white/10 bg-[#131313]/90 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md sm:rounded-full">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1px_1fr_auto] md:items-center md:gap-0">
            <div className="flex w-full items-center gap-3 rounded-2xl bg-white/2 px-4 py-3 md:rounded-none md:bg-transparent md:px-4 md:py-2">
              <FiSearch className="shrink-0 text-lg text-white sm:text-xl" />
              <input type="text" placeholder="Job title, skill or company" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500 sm:text-base" />
            </div>

            <div className="hidden h-6 w-px bg-white/10 md:block"></div>

            <div className="flex w-full items-center gap-3 rounded-2xl bg-white/2 px-4 py-3 md:rounded-none md:bg-transparent md:px-4 md:py-2">
              <FiMapPin className="shrink-0 text-lg text-white sm:text-xl" />
              <input type="text" placeholder="Location or Remote" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500 sm:text-base" />
            </div>

            <button className="mt-1 flex h-12 w-full items-center justify-center rounded-2xl bg-[#5932EA] transition-colors hover:bg-[#4a26cc] md:mt-0 md:ml-2 md:h-14 md:w-14 md:rounded-full">
              <FiSearch className="text-lg text-white sm:text-xl" />
            </button>
          </div>
        </div>

        <div className="mt-7 flex w-full flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
          <span className="mr-1 text-xs text-gray-400 sm:mr-2 sm:text-sm">Trending Position</span>
          {["Product Designer", "AI Engineering", "Dev-ops Engineer"].map((tag) => (
            <span key={tag} className="cursor-pointer rounded-full border border-white/10 bg-[#1a1a1a] px-3 py-1.5 text-[11px] text-gray-300 transition-colors hover:bg-[#252525] sm:px-4 sm:text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-20 mt-auto w-full px-4 pb-12 text-center sm:pb-16 lg:pb-20">
        <h2 className="text-2xl leading-snug tracking-tight text-gray-300 sm:text-3xl md:text-[32px]">
          Assisting over <span className="font-semibold text-white">15,000 job seekers</span>
          <br className="hidden sm:block" /> find their dream positions.
        </h2>
      </div>
    </section>
  );
};

export default Hero;