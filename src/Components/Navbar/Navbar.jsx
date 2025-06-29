import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(function () {
    window.onscroll = function () {
      var navbar = document.querySelector("nav");
      if (window.scrollY > 50) {
        navbar.style.paddingTop = "10px";
        navbar.style.paddingBottom = "10px";
      } else {
        navbar.style.paddingTop = "24px";
        navbar.style.paddingBottom = "24px";
      }
    };
  });

  return (
    <>
      <nav className="py-6 bg-[#2C3E50] text-white fixed top-0 right-0 left-0 transition-all duration-500 z-50">
        <div className="container flex items-center justify-between px-3 m-2">
          <Link to="/" className="py-1.5 text-[25px] md:text-[40px] lg:text-4xl font-bold uppercase">Start Framework</Link>

          <ul className="lg:flex gap-2 hidden">
            <li>
              <Link to="/About" className="p-2 me-3 text-lg font-bold focus:bg-[#1ABC9C] rounded-md">ABOUT</Link>
            </li>
            <li>
              <Link to="/Portfolio" className="p-2 me-3 text-lg font-bold focus:bg-[#1ABC9C] rounded-md">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/Contact" className="p-2 me-3 text-lg font-bold focus:bg-[#1ABC9C] rounded-md">CONTACT</Link>
            </li>
          </ul>

          <svg
            onClick={() => setIsOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 lg:hidden cursor-pointer"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav>

      {/* مودال الموبايل */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 lg:hidden">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed top-0 left-0 right-0 bg-[#2C3E50] p-6 rounded-b-lg shadow-lg">
          <div className="flex items-center justify-between mb-4 text-white">
            <h3 className="text-xl font-bold">Menu</h3>
            <button onClick={() => setIsOpen(false)} className="text-2xl font-bold">×</button>
          </div>
          <ul className="flex flex-col gap-4 text-white font-bold">
            <li><Link to="/About" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
            <li><Link to="/Portfolio" onClick={() => setIsOpen(false)}>PORTFOLIO</Link></li>
            <li><Link to="/Contact" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
          </ul>
        </div>
      </Dialog>
    </>
  );
}