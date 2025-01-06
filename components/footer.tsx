import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 bg-slate-900 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <h1 className="text-white text-[20px]">Awais Arain</h1>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 _
      <h4
        className="text-gray-600 ml-1"
      >
        @knyttneve
      </h4>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <Link target="_blank" href={"https://github.com/awais-student"}>
      <div className="ml-3 w-5 h-5  mt-0.5 text-gray-500"><FaGithub /></div>
      </Link>     
      <Link target="_blank" href={"https://www.linkedin.com/in/awais-professionail/"} className="ml-3  text-gray-500">
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0}
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke="none"
            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
          />
          <circle cx={4} cy={4} r={2} stroke="none" />
        </svg>
      </Link>
    </span>
  </div>
</footer>

    </div>
  );
};

export default Footer;
