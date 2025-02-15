import { useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }
  const handleLink = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -80;
      const elementPos = targetElement.getBoundingClientRect().top;

      const offsetPos = elementPos + window.scrollY + offset;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
      })
      setMobileMenuOpen(false);
    }
  }
  return (
    <div className="fixed left-0 right-0 lg:top-4 z-20 text-white">
      {/**DESKTOP */}
      <div className="mx-auto hidden md:block max-w-2xl items-center justify-center rounded-lg
      border-stone-50/20 border-2 py-3 backdrop-blur-lg lg:flex p-3">
        <div className="flex items-center justify-between gap-6">
          <div className="">
            <a href="#">
              <img src={logo} width={150} alt="logo" />
            </a>
          </div>
          <div>
            <ul className="flex justify-between gap-4 font-medium">
              {NAVIGATION_LINKS.map((item, index) => {
                return <li key={index}>
                  <a className="hover:text-yellow-400" href={item.href}
                    onClick={(e) => {
                      handleLink(e, item.href)
                    }}>
                    {item.label}
                  </a>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>

      {/** MOBILE */}
      <div className="rounded-lg backdrop-blur-md md:hidden">
        <div className="flex items-center justify-between mx-2">
          {/**LOGO */}
          <div>
            <a href="#">
              <img src={logo} alt="logo" width={90} className="m-2" />
            </a>
          </div>
          {/**LINKS */}
          <div className="flex items-center">
            <button className="focus:outline-none md:hidden" onClick={toggleMobileMenu}>
              {
                isMobileMenuOpen ? <FaTimes className="m-2 h-6 w-5" /> : <FaBars className="m-2 h-6 w-5" />
              }
            </button>
          </div>

        </div>
        {
          isMobileMenuOpen &&
          (<div>
            <ul className="flex flex-col gap-1 backdrop-blur-md items-center">
              {NAVIGATION_LINKS.map((item, index) => {
                return <li key={index}>
                  <a className="hover:text-yellow-400" href={item.href}
                    onClick={(e) => {
                      handleLink(e, item.href)
                    }}>
                    {item.label}
                  </a>
                </li>
              })}
            </ul>
          </div>)
        }

      </div>
    </div>
  );
};

export default Navbar;