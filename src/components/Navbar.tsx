"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/image/logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-10`}
      ></div>
      <nav className="bg-[#ECF4F1] border-b border-[#C4EDD7] z-10 ">
        <div className=" mx-auto flex items-center justify-between p-2  md:px-8">
          {/* Logo */}
          <div className="flex justify-between items-center py-2 px-4 md:px-8">
            <Image src={logo} width={0} height={0} alt="logo" />
          </div>

          {/* Hamburger Menu Button (Only visible on mobile) */}
          <button
            className="flex items-center px-3 py-2 border rounded border-slate-950 hover:text-[#C4EDD7] text-slate-950 md:hidden"
            onClick={toggleMenu}
          >
            <Bars3Icon className="h-5 w-5" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#"
              className="hover:text-[#43916F]  text-xs font-bold uppercase"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-[#43916F]   text-xs font-bold uppercase"
            >
              Features
            </a>
            <a
              href="#"
              className="hover:text-[#43916F]   text-xs font-bold uppercase"
            >
              About Us
            </a>
            {/* <a href="#" className="hover:text-gray-300">Contact</a> */}
            <button className="bg-[#105F62] text-white  py-2 px-4 rounded-sm  text-xs font-bold uppercase">
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 z-20 right-0 h-full w-64 bg-[#ECF4F1] text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {/* Close Button */}
          <button
            className="absolute top-8 right-4 flex items-center px-3 py-2 border rounded border-slate-950 hover:text-[#C4EDD7] text-slate-950"
            onClick={toggleMenu}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          <nav className="mt-16 space-y-4">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 text-[#072B2C]"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 text-[#072B2C]"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 text-[#072B2C]"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 text-[#072B2C]"
            >
              Contact
            </a>
            <button className="w-[50%] m-[5%] bg-[#105F62] text-white hover:bg-[#105F62] px-4 py-2 mt-2">
              Contact Us
            </button>
          </nav>
        </div>
      </nav>
    </div>
  );
}

// const navLinks = [
//   {
//     title: "Home",
//     path: "#Home",
//   },
//   {
//     title: "Features",
//     path: "#Features",
//   },
//   {
//     title: "About Us",
//     path: "#About Us",
//   },
//   {
//     title: "Contact Us",
//     path: "#Contact Us",
//   },
// ];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   return (
//     <>
//      <nav className="fixed top-0 left-0 right-0 z-[1] bg-[#ECF4F1] border-[#C4EDD7]  items-center ">
//       <div className=' flex-wrap  mx-auto flex justify-between items-center py-4 px-4 md:px-8'>
//       <div className='logo'>
//         <Image src={logo} width={0} height={0} alt='logo'></Image>
//       </div>
//       <div className='mobile-menu block md:hidden '>
//         {
//           !navbarOpen ? (
//             <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-950 hover:text-[#C4EDD7] text-slate-950'>
//               <Bars3Icon className='h-5 w-5' />
//             </button>
//           ) : (
//             <button onClick={() => setNavbarOpen(false)}  className='flex items-center px-3 py-2 border rounded border-slate-950 hover:text-[#C4EDD7] text-slate-950'>
//               <XMarkIcon className='h-5 w-5' />
//             </button>
//           )
//         }
//       </div>

//       <div className='menu hidden md:block md:w-auto' id='navbar'>
//       <ul className="flex gap-5 items-center uppercase">
//         {navLinks.map((link) => (
//           <li key={link.title} >
//             <NavLink href={link.path} title={link.title} />
//           </li>
//         ))}
//       </ul>
//       </div>
//       </div>
//       {navbarOpen ? <MenuOveray links={navLinks}/> : null}
//     </nav>
//     </>
//   )
// }

export default Navbar;
