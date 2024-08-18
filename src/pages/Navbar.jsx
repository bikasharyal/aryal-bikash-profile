import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon, IdentificationIcon } from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub, FaHome, FaSun, FaMoon } from "react-icons/fa";

import { Link } from "react-scroll";

import { useTheme } from "../context/ThemeContext";

const Navbar = ({ onLogout }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const { darkMode, toggleDarkMode } = useTheme();

  const navLinks = ["About", "Skills", "Work", "Contact"];

  return (
    <div className="w-full flex fixed h-20 px-4 items-center bg-primary justify-between text-gray-100">
      <div className="flex items-center space-x-4 font-medium">
        <Link
          className="hover:text-700 ml-2 hover:font-medium hover:text-4xl text-[#800000] text-3xl mr-2"
          to={"home"}
          smooth={true}
          duration={500}
        >
          [BA]
        </Link>
      </div>

      <ul className="hidden md:flex md:w-full items-center justify-center gap-7 font-light">
        <li className="cursor-pointer text-4xl font-bold font-medium">
          <Link
            className="hover:text-[#800000] hover:font-large"
            to={"home"}
            smooth={true}
            duration={500}
          >
            {"</>"}
          </Link>{" "}
        </li>
        {navLinks.map((route, index) => (
          <li key={index} className="cursor-pointer">
            <Link
              className="hover:text-[#800000] hover:font-medium"
              to={route.toLowerCase()}
              smooth={true}
              duration={500}
            >
              {route}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-end w-full md:w-auto">
        <button
          className="rounded-lg px-2 py-1 font-bold text-md duration-50"
          onClick={toggleDarkMode}
          style={{
            backgroundColor: darkMode ? "#fff" : "#0A192F",
            color: darkMode ? "#0A192F" : "#fff",
            border: darkMode ? "1px solid #0A192F" : "1px solid #fff",
          }}
        >
          {darkMode ? (
            <FaSun className="hover:text-[#800000] hover:font-medium" />
          ) : (
            <FaMoon className="hover:text-[#800000] hover:font-medium" />
          )}
        </button>
      </div>
      <div onClick={toggleMenu} className="md:hidden z-10">
        {showMenu ? (
          <XMarkIcon className="h-10 w-10" />
        ) : (
          <Bars3Icon className="h-10 w-10" />
        )}
      </div>

      <ul
        className={`md:hidden w-full h-screen absolute flex flex-col gap-6 bg-primary top-0 left-0 items-center justify-center text-4xl ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <li className="cursor-pointer">
          <Link
            className="hover:text-700 ml-2 hover:font-medium hover:text-4xl text-[#800000] text-3xl mr-2"
            to={"home"}
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            <FaHome />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="hover:text-700 ml-2 hover:font-medium hover:text-4xl hover:text-[#800000] text-3xl mr-2"
            to={"skills"}
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="hover:text-700 ml-2 hover:font-medium hover:text-4xl hover:text-[#800000] text-3xl mr-2"
            to={"work"}
            smooth={true}
            duration={1000}
            onClick={() => setShowMenu(false)}
          >
            Work
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="hover:text-700 ml-2 hover:font-medium hover:text-4xl hover:text-[#800000] text-3xl mr-2"
            to={"about"}
            smooth={true}
            duration={1000}
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            className="hover:text-700 ml-2 hover:font-medium hover:text-4xl hover:text-[#800000] text-3xl mr-2"
            to={"contact"}
            smooth={true}
            duration={1000}
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </li>
        <div class="flex space-x-4 mt-[10px]">
          <a
            href="https://www.linkedin.com/in/bikash-aryal-5904/"
            target="blank"
            class="flex items-center text-white text-base space-x-2 group"
          >
            <FaLinkedin class="h-[30px] w-[30px]" />
          </a>
          <a
            href="https://github.com/bikasharyal"
            target="blank"
            class="flex items-center text-white text-base space-x-2 group"
          >
            <FaGithub class="h-[30px] w-[30px]" />
          </a>
          <a
            href="mailto:mearyalbikash@gmail.com"
            class="flex items-center text-white text-base space-x-2 group"
          >
            <EnvelopeIcon class="h-[30px] w-[30px]" />
          </a>
          <a
            href="https://drive.google.com/file/d/1-Pb3qIrkkbdVYkmKSGSTi2z9JLqtrR65/view?usp=sharing"
            target="blank"
            class="flex items-center text-white text-base space-x-2 group"
          >
            <IdentificationIcon class="h-[30px] w-[30px]" />
          </a>
        </div>
      </ul>

      <div className="hidden fixed md:flex flex-col top-[35%] left-0">
        <div className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#003166]">
          <a
            href="https://www.linkedin.com/in/bikash-aryal-5904/"
            target="blank"
            className="flex justify-center items-center w-full text-white font-normal text-base px-4"
          >
            <span>LinkedIn</span>
            <FaLinkedin className="h-[30px] w-[30px] ml-auto" />
          </a>
        </div>
        <div className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#141414]">
          <a
            href="https://github.com/bikasharyal"
            target="blank"
            className="flex justify-center items-center w-full text-white font-normal text-base px-4"
          >
            <span>Github</span>
            <FaGithub className="h-[30px] w-[30px] ml-auto" />
          </a>
        </div>
        <div className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4A6378]">
          <a
            href="mailto:mearyalbikash@gmail.com"
            className="flex justify-center items-center w-full text-white font-normal text-base px-4"
          >
            <span>Contact</span>
            <EnvelopeIcon className="h-[30px] w-[30px] ml-auto" />
          </a>
        </div>
        <div className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#222222]">
          <a
            href="https://drive.google.com/file/d/1-Pb3qIrkkbdVYkmKSGSTi2z9JLqtrR65/view?usp=sharing"
            target="blank"
            className="flex justify-center items-center w-full text-white font-normal text-base px-4"
          >
            <span>Resume</span>
            <IdentificationIcon className="h-[30px] w-[30px] ml-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
