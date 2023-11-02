import { transitions150 } from "@/utils/constants";
import { mobileScroll } from "@/utils/handleScroll";
import React, { useRef, useState } from "react";
import { MdMenu, MdClear } from "react-icons/md";

const Navbar = ({ options, selectedOption }) => {
  const [nav, setNav] = useState(false);
  const topRef = useRef();

  function handleNav() {
    setNav(!nav);
  }

  return (
    <>
      <div className="sticky top-0 w-full bg-primary md:hidden p-2 z-30">
        <div className="w-full flex items-center h-[50px]" ref={topRef}>
          {!nav && (
            <MdMenu
              size={40}
              className="ms-auto cursor-pointer fill-lightGrey hover:fill-white"
              onClick={handleNav}
            />
          )}
        </div>

        <nav
          className={`fixed h-full w-[200px] top-0 bg-primary p-2 border-black ease-in-out duration-500 z-30 ${
            nav ? "right-0" : "right-[-100%] "
          }`}
        >
          <div className="w-full flex items-center h-[50px]">
            <MdClear
              size={40}
              className="ms-auto cursor-pointer fill-lightGrey hover:fill-white"
              onClick={handleNav}
            />
          </div>

          <ul className="flex flex-col gap-5">
            {options.map((option) => (
              <li
                key={option.name}
                onClick={() => mobileScroll(topRef, option.ref)}
                className={`font-bold cursor-pointer uppercase hover:translate-x-4 w-fit ${transitions150} ${transitions150} ${
                  option.ref === selectedOption ? "text-white" : "text-grey"
                }`}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {nav && (
        <div
          className={`md:hidden fixed w-[100vw] h-[100vh] top-0 right-0 bg-primary bg-opacity-60 z-10 ${transitions150}`}
        />
      )}
    </>
  );
};

export default Navbar;
