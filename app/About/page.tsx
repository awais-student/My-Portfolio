"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-800 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          {/* Image Animation: Trigger on Scroll */}
          <motion.div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}  // Trigger animation on scroll
            transition={{ duration: 1 }}
          >
            <Image
              className="object-cover object-center rounded-md"
              alt="hero"
              src="/Image/coding.jpg"
              width={720}   // Set width
              height={600}  // Set height
            />
          </motion.div>

          {/* Text Section Animation */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <motion.h1
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}  // Trigger animation on scroll
              transition={{ duration: 1 }}
            >
              About Me
              <br className="hidden lg:inline-block" />
            </motion.h1>

            {/* Description Text Animation */}
            <motion.p
              className="mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}  // Trigger animation on scroll
              transition={{ duration: 1, delay: 0.5 }}
            >
              I am a motivated and dedicated individual with a solid educational foundation and a passion for continuous learning. Having completed my Intermediate, I am currently advancing my technical skills by pursuing an IT course. My journey in IT, particularly through the UP IT program, has been marked by a strong commitment to understanding the latest tools and technologies.
            </motion.p>

            {/* Social Media Icons Animation */}
            <div className="flex gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}  // Trigger animation on scroll
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Link target="_blank" href={"https://www.linkedin.com/in/awais-professionail/"}>
                  <FaLinkedin className="text-[20px]" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}  // Trigger animation on scroll
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Link target="_blank" href={"https://github.com/awais-student"}>
                  <FaGithub className="text-[20px]" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


