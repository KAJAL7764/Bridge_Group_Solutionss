import { useState, useEffect } from "react";
import { Mail, Menu, X, ChevronDown } from "lucide-react";
import logo from "./assets/logo.webp"; // Ensure the path is correct

const Navbarb = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow-md fixed top-0 w-full z-[9999] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex flex-row justify-between items-center p-4">
        {/* ✅ Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-16" />
          <h1 className="text-2xl font-bold text-sky-900 whitespace-nowrap">
            Bridge Group Solutions
          </h1>
        </div>

        {/* ✅ Email Section (Hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-2">
          <Mail className="w-5 h-5 text-blue-500" />
          <span className="font-bold text-black">Email:</span>
          <h1 className="text-black-300">contactus@bridgegroupsolutions.com</h1>
        </div>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* ✅ Navigation Links (Responsive) */}
      <div
        className={`bg-blue-900 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
        } md:flex md:items-center md:justify-center`}
      >
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-8 p-4 text-white">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Investing", path: "/investing" },
            
          ].map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="hover:text-blue-300 text-lg font-medium transition-all duration-300 ease-in-out py-2"
            >
              {link.name}
            </a>
          ))}

          {/* ✅ Outsourcing Dropdown (Now in 3rd Position) */}
          <div className="relative group">
            <button
              onClick={toggleDropdown} // Click for mobile, hover for desktop
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="flex items-center text-lg font-medium transition-all duration-300 ease-in-out py-2 hover:text-blue-500"
            >
              Outsourcing <ChevronDown className="ml-2 w-5 h-5" />
            </button>

            {/* ✅ Dropdown Menu (Fixed on Top, Fully Responsive) */}
            <div
              className={`absolute md:fixed md:top-[160px] md:left-1/2 md:-translate-x-1/2 w-56 bg-white text-gray-800 shadow-xl rounded-lg z-[99999] border border-gray-200 transition-all duration-300 ${
                isDropdownOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
              }`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <a href="/outsourcing" className="block px-4 py-2 hover:bg-gray-200 rounded-t-md">
                Outsourcing Overview
              </a>
              <a href="/outsourcing/erp" className="block px-4 py-2 hover:bg-gray-200">
                ERP
              </a>
              <a href="/outsourcing/software-testing" className="block px-4 py-2 hover:bg-gray-200 rounded-b-md">
                Software Testing
              </a>
            </div>
          </div>

          {/* ✅ Remaining Links */}
          {[
            { name: "Careers", path: "/careers/intershipcard" },
            { name: "Careers", path: "/careers/Internshipcard" },
            { name: "Careers", path: "/careers/CurrentOpening" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact Us", path: "/contact" },
            { name: "Investing", path: "/investing/mutualfund" },
            
          ].map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="hover:text-blue-300 text-lg font-medium transition-all duration-300 ease-in-out py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbarb;
