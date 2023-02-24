import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  let activeClassName = "underline";

  return (
    <>
      {/* <Header> */}
      <header className="absolute z-[999] flex justify-between px-10 py-5 bg-transparent items-center text-gray-50 border-b border-gray-50/10 w-screen">
        <p className="font-bold text-3xl">LOGO</p>
        <nav className="flex gap-16 items-center text-base h-full">
          <ul className="flex gap-16 h-full">
            <li>
              <NavLink
                to="Messages"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Messages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="About"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Services"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="News"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
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
