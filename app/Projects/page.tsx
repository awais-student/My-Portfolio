"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion

const Myprojects = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-800 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {`"My portfolio showcases diverse projects completed using HTML, CSS, TypeScript, Next.js, and Tailwind CSS. I'm passionate about expanding my skills and taking on more innovative challenges."`}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Card 1 */}
            <motion.div
              className="lg:w-1/3 sm:w-1/2 p-4"
              initial={{ opacity: 0, y: 100 }} // Start from bottom and hidden
              whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up to its original position
              transition={{ duration: 1 }} // Duration of animation
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is in view
            >
              <Link target="_blank" href={"https://my-calculator-project-eight.vercel.app/"}>
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/Image/calculator.jpg"
                    width={400}
                    height={400}
                  />
                  <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">
                      Calculator Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Created By Awais Arain
                    </h1>
                    <p className="leading-relaxed">
                      This project can vary in complexity, ranging from building a simple arithmetic calculator to developing advanced scientific or graphing calculators with more intricate features.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="lg:w-1/3 sm:w-1/2 p-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Link target="_blank" href={"https://governor-initiative-project.vercel.app/"}>
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full"
                    src="/Image/governorimage.jpg"
                    width={400}
                    height={400}
                  />
                  <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                      Governor Initiative Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Created By Awais Arain
                    </h1>
                    <p className="leading-relaxed">
                      This project involves the development of an official website for the Governor of Sindh, designed to provide a digital platform for public interaction, and access to important information.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="lg:w-1/3 sm:w-1/2 p-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Link target="_blank" href={"https://wordpress-landingpage.vercel.app/"}>
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full"
                    src="/Image/wordpress.jpg"
                    width={400}
                    height={200}
                  />
                  <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                      WordPress Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Created By Awais Arain
                    </h1>
                    <p className="leading-relaxed">
                      This project involves the creation of a WordPress-based website designed to showcase and manage the online presence of an organization, service, or initiative.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="lg:w-1/3 sm:w-1/2 p-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Link target="_blank" href={"https://cuberto-web-portfolio.vercel.app/"}>
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full"
                    src="/Image/cuberto.jpg"
                    width={400}
                    height={200}
                  />
                  <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                      Cuberto Landing Page
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Created By Awais Arain
                    </h1>
                    <p className="leading-relaxed">
                      This project involves the design and development of a modern, visually appealing website inspired by Cuberto, known for its sleek, user-centric design and innovative digital experiences.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="lg:w-1/3 sm:w-1/2 p-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Link target="_blank" href={"https://www.linkedin.com/feed/update/urn:li:activity:7179889915374014464/?originTrackingId=E2e3QXnNSi62UcNJMI6NpQ%3D%3D"}>
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full"
                    src="/Image/amazon.jpg"
                    width={400}
                    height={200}
                  />
                  <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                      Amazon Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Created By Awais Arain
                    </h1>
                    <p className="leading-relaxed">
                      Welcome to Meny 1, the ultimate e-commerce platform designed to enhance your shopping experience. Our website offers a seamless, fast, and secure environment.
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              className="lg:w-1/3 sm:w-1/2 p-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Link target="_blank" href={"https://figma-project-test-seven.vercel.app/"}>
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full"
                    src="/Image/foodtruck.jpg"
                    width={400}
                    height={400}
                  />
                  <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                      FoofTruck Project
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Created By Awais Arain
                    </h1>
                    <p className="leading-relaxed">
                      Our approach to food is about creating meals that not only taste amazing but also reflect quality, creativity, and passion.These all are delicious food in our Rasturant
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Myprojects;


