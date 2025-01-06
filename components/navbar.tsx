import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <header className="text-gray-400 bg-slate-900 body-font fixed w-full z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Awais Arain</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-5 transition-all ease-in-out duration-500">
                    <Link href={"/"} className="hover:text-white transform transition-all hover:scale-110">Home</Link>
                    <Link href={"/About"} className="mr-5 hover:text-white transform transition-all hover:scale-110">About</Link>
                    <Link href={"/Projects"} className="mr-5 hover:text-white transform transition-all hover:scale-110">Project</Link>
                    <Link href={"/Contact"} className="mr-5 hover:text-white transform transition-all hover:scale-110">Contact</Link>
                    <Link href={""} className="mr-5 hover:text-white transform transition-all hover:scale-110">Skills</Link>
                </nav>
                <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 transform transition-all hover:scale-110">
                    <Link href={"./mycv/AwaisResume.pdf"} target='_blank'>MY CV</Link>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </header>
    </div>
  )
}

export default Navbar

