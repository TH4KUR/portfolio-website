import React from 'react';

const Timeline = () => {
  return (
    <div className="grid justify-center max-w-screen-md mx-auto">
      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="font-caveat font-medium text-3xl text-hero-light/80 sm:mb-0">
          The beginning 📍
        </div>

        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-4 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-4 sm:after:left-0 after:w-4 after:h-4 after:bg-[#622618] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-lg font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-[#903c29] bg-hero-light/10 rounded-full">
            May, 2019
          </time>
          <div className="text-3xl font-bold text-slate-100">
            learnt HTML CSS in 2019
          </div>
        </div>
        <div className="text-slate-300 text-2xl">
          learnt basic HTML CSS & JavaScript in 2019. I was a beginner and was
          constantly making basic websites and learning new things. Made my
          first project called forkify (recipe app) with HTML CSS & JavaScript.
        </div>
      </div>

      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="font-caveat font-medium text-3xl text-hero-light/80 sm:mb-0">
          Competing
        </div>

        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-4 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-4 sm:after:left-0 after:w-4 after:h-4 after:bg-[#ff542d] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-lg font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-[#903c29] bg-hero-light/10 rounded-full">
            Feb, 2020
          </time>
          <div className="text-3xl font-bold text-slate-100">
            Deviated from development ⌛
          </div>
        </div>
        <div className="text-slate-300 text-2xl">
          I then deviated from learning to apply my knowledge. I started
          competing in hackathons, and CTFs and won a few. I was constantly
          learning new things and applying them to my projects.
        </div>
      </div>

      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="font-caveat font-medium text-3xl text-hero-light/80 sm:mb-0">
          First Freelancing project
        </div>

        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-4 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-4 sm:after:left-0 after:w-4 after:h-4 after:bg-[#ff542d] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-lg font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-[#903c29] bg-hero-light/10 rounded-full">
            May, 2024
          </time>
          <div className="text-3xl font-bold text-slate-100">
            Got my first paid project 🎉
          </div>
        </div>
        <div className="text-slate-300 text-2xl">
          Got my first freelancing project to make a dynamic events hosting page
          &nbsp;
          <span className=" text-emerald-200">
            (Nextjs+SanityCMS+payment gateway+users database)
          </span>{' '}
          for kriti, for KMC warangal. I was paid INR 75k for it. I was very
          happy and excited to get my first project. I learnt a lot from it and
          applied my knowledge to it.
        </div>
      </div>

      <div className="relative pl-8 sm:pl-32 py-6 group">
        <div className="font-caveat font-medium text-3xl text-hero-light/80 sm:mb-0">
          College
        </div>

        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-4 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-4 sm:after:left-0 after:w-4 after:h-4 after:bg-[#ff542d] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-lg font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-[#903c29] bg-hero-light/10 rounded-full">
            May, 2023
          </time>
          <div className="text-3xl font-bold text-slate-100">
            Joined IIIT Hyderabad
          </div>
        </div>
        <div className="text-slate-300 text-2xl">
          After i gave jee mains & advanced, i decided to join IIIT Hyderabad to
          purse my intrest in Computer Science.
        </div>
      </div>
    </div>
  );
};

export default Timeline;
