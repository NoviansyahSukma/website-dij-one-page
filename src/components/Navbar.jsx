import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logo from "../assets/dij-font-logo.png";

export default function Navbar({ activeId }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { id: "section1", label: "Home" },
    { id: "section2", label: "Product" },
    { id: "section3", label: "Client" },
    {
      id: "section4",
      label: "Subscribe",
      different: true,
    },
    { id: "section5", label: "Contact" },
  ];

  return (
    <>
      <div className="fixed z-[9999] top-0 right-0 left-0 2xl:px-16">
        <div className="bg-slate-100 relative z-20 flex items-center justify-between shadow-md pt-4 pb-2 md:pt-6 md:pb-3 lg:pt-8 lg:pb-4 xl:pt-4 2xl:pt-8 px-3 md:px-4 xl:px-6">
          <div className="w-[140px] md:w-[200px] lg:w-[250px] xl:w-[240px] 2xl:w-[260px]">
            <img src={Logo} alt="logo dij" />
          </div>

          <button
            className="xl:hidden text-purple-900 font-semibold focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <HiOutlineX className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            ) : (
              <HiOutlineMenuAlt3 className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            )}
          </button>

          <ul className="font-monserrat text-lg 2xl:text-xl hidden xl:flex space-x-6 2xl:space-x-8 text-purple-900 font-semibold">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.different
                    ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-blue-500 to-orange-500 hover:via-slate-300 hover:to-gray-400 bg-[length:200%_auto] animate-[shine_4s_linear_infinite]"
                    : "hover:text-slate-400 focus:text-slate-300"
                }`}
              >
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`inline-block cursor-pointer ${
                    activeId === item.id
                      ? "underline decoration-orange-500 underline-offset-7"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <a
              href="https://speedtest.detik.net.id/"
              target="blank"
              className={`inline-block cursor-pointer xl:text-lg rounded-xs hover:text-orange-500 focus:text-slate-300 shadow-sm shadow-slate-500 hover:shadow-slate-300 px-2`}
            >
              Speed Test
            </a>
          </ul>
        </div>

        <div
          className={`xl:hidden py-5 md:py-7 bg-slate-100 transition-[shadow, transform] duration-500 transform ease-in-out ${
            isOpen ? "shadow-md translate-y-0" : "shadow-none -translate-y-100"
          }`}
        >
          <ul className="font-monserrat text-lg lg:text-2xl text-center flex flex-col space-y-4 lg:space-y-6 text-purple-900 font-semibold">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`${
                  item.different
                    ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-blue-500 to-orange-500 bg-[length:200%_auto] animate-[shine_4s_linear_infinite]"
                    : "hover:text-slate-400 focus:text-slate-300"
                }`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    el?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                  className={`inline-block cursor-pointer ${
                    activeId === item.id
                      ? "underline decoration-orange-500 underline-offset-7"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <a
              href="https://speedtest.detik.net.id/"
              target="blank"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
              className={`inline-block cursor-pointer w-30 md:w-36 lg:w-40 m-auto rounded-xs hover:text-orange-500 focus:text-slate-300 shadow-sm shadow-slate-500 hover:shadow-slate-300 px-2`}
            >
              Speed Test
            </a>
          </ul>
        </div>
      </div>

      <style>
        {`
          @keyframes shine {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }
        `}
      </style>
    </>
  );
}
