"use client";
// // import { DialogDemo } from "@/components/dialog";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-800 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          {/* Left Section: Text Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* Title Animation: Fade In and Slide */}
            <motion.h1
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mt-36 sm:mt-[70px]"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              // Removed once: true to make it animate again on scroll
            >
              {"I'm"}
              <br className="hidden lg:inline-block" />
              Web Developer
            </motion.h1>

            {/* Description Animation: Slide and Fade */}
            <motion.p
              className="mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              // Removed once: true to make it animate again on scroll
            >
              {"I create responsive, user-friendly web applications using the latest technologies like TypeScript, React, Next, and Tailwind CSS. Passionate about building digital experiences that make a difference."}
            </motion.p>

            {/* Button Animation: Fade In and Scale */}
            <div className="flex justify-center">
              <motion.button
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Hire Me
              </motion.button>

              <motion.button
                className="ml-4 inline-flex text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                My Resume
              </motion.button>
            </div>
          </div>

          {/* Right Section: Image Animation */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <motion.img
              src="/Image/coder.jpg"
              alt="hero"
              className="object-cover object-center rounded"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

