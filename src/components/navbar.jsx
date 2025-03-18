import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch ,FaUser} from "react-icons/fa";

const Login = ({ isMenu, theme }) => (
  <button
    className={`p-2 w-full text-center cursor-pointer font-semibold
      ${isMenu
        ? theme === "DARK"
          ? "text-white border p-4 border-gray-100 "
          : "text-black border border-gray-500 bg-white p-4"
        : theme === "DARK"
          ? "text-white hover:text-purple-400 hover:underline"
          : "text-black hover:text-purple-400 hover:underline"
      }`}
  >
    Login
  </button>
);



const Signup = ({ isMenu,theme }) => (
  <button
    className={`${
      isMenu
        ? `${theme ==="DARK"?"p-4 w-full text-center text-white font-semibold border border-gray-100"
        :"p-4 w-full text-center text-black font-semibold border border-gray-500"}`
        : "px-4 py-2 bg-purple-600 text-white rounded-lg cursor-pointer font-semibold hover:bg-purple-500"
    }`}
  >
    Signup
  </button>
);

const Cartify = () => <h1 className="text-3xl font-bold">Cartify</h1>;


const Navbar = ({ theme,search }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div
      className={`flex items-center justify-between w-full px-6 py-4 ${
        theme === "DARK"
          ? "bg-gray-900 text-white shadow-md"
          : "bg-white text-black shadow-md"
      }`}
    >
      <button
        className="text-2xl focus:outline-none lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <Link to="/Cartify" className="flex-1 text-center lg:text-left">
        <Cartify />
      </Link>

        <div className="hidden lg:flex gap-4">
          <Link to="/login">
            <Login isMenu={menuOpen} theme={theme}/>
          </Link>
          <Link to="/signup">
            <Signup isMenu={menuOpen} theme={theme} />
          </Link>
        </div>
      

      <div
        className={`fixed top-0 left-0 w-64 h-full transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } ${theme === "DARK" ? "bg-gray-800 text-white z-50" : "bg-gray-100 text-black"} shadow-lg z-50`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <button
            className="self-end text-2xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
             <h1 className="flex gap-2 text-2xl"><FaUser className="mt-2 text-lg"/>Account</h1>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <Login isMenu={menuOpen} theme={theme} />
          </Link>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            <Signup isMenu={menuOpen} theme={theme} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
