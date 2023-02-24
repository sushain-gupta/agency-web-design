import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  let activeNav = "underlineNav";

  return (
    <>
      {/* <Header> */}
      <header className="absolute z-[999] flex justify-between px-10 h-20 bg-[#070D18] items-center text-gray-50 border-b border-gray-50/10 w-screen">
        <p className="font-bold text-3xl">LOGO</p>
        <nav className="flex gap-16 items-center text-base h-full">
          <ul className="flex gap-16 h-full items-center">
            <li className="flex h-full items-center">
              <NavLink
                to="/"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                className={({ isActive }) => (isActive ? activeNav : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li className="flex h-full items-center">
              <NavLink
                to="About"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                className={({ isActive }) => (isActive ? activeNav : undefined)}
              >
                About us
              </NavLink>
            </li>
            <li className="flex h-full items-center">
              <NavLink
                to="Services"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                className={({ isActive }) => (isActive ? activeNav : undefined)}
              >
                Services
              </NavLink>
            </li>
            <li className="flex h-full items-center">
              <NavLink
                to="News"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                className={({ isActive }) => (isActive ? activeNav : undefined)}
              >
                News
              </NavLink>
            </li>
          </ul>

          <button className="border border-sky-400 px-5 py-2 rounded-md">
            Contact us
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
