import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.webp";

const Navbarb = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const dropdownItems = {
    Outsourcing: ["ERP & Customized Software", "Software Testing"],
    Investing: [
      "Mutual Fund",
      "Wealth Management",
      "Portfolio Management",
      "Pension Funds",
      "Real Estate",
    ],
    Careers: ["Internship", "Current Openings"],
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Animation Variants
  const navbarVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#60a5fa",
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  };

  return (
    <motion.nav
      variants={navbarVariants}
      animate={showNavbar ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-slate-900"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo with Spin Effect */}
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={logo}
            alt="Logo"
            className="w-16"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          />
          <h1 className="text-2xl font-bold text-white">Bridge Group Solutions</h1>
        </motion.div>

        {/* Desktop Email Section with Bounce */}
        <motion.div
          className="hidden md:flex items-center space-x-3 bg-gray-700/50 px-4 py-2 rounded-full text-gray-200"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <FaEnvelope className="w-6 h-6 text-white" />
          <p className="text-base font-medium">contactus@bridgegroupsolutions.com</p>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden focus:outline-none text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center bg-sky-950/90 backdrop-blur-md">
        <div className="container mx-auto flex space-x-8 p-3 text-lg font-medium">
          {["Home", "About", "Outsourcing", "Investing", "Careers", "Gallery", "Contact Us"].map(
            (name) => (
              <div
                key={name}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveDropdown(name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div
                  className="flex items-center space-x-1"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <a href={`/${name.toLowerCase().replace(/ /g, "")}`} className="text-white">
                    {name}
                  </a>
                  {dropdownItems[name] && (
                    <motion.div
                      animate={{ rotate: activeDropdown === name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={15} />
                    </motion.div>
                  )}
                </motion.div>
                <AnimatePresence>
                  {dropdownItems[name] && activeDropdown === name && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-full left-0 bg-white text-gray-800 shadow-xl py-2 w-56 rounded-lg z-50 border border-gray-200/50"
                    >
                      {dropdownItems[name].map((item) => (
                        <motion.a
                          key={item}
                          href={`/${item.toLowerCase().replace(/ /g, "")}`}
                          className="block px-4 py-2 hover:bg-gray-100"
                          whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                          transition={{ duration: 0.2 }}
                        >
                          {item}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md text-white p-4 space-y-2"
          >
            {["Home", "About", "Outsourcing", "Investing", "Careers", "Gallery", "Contact Us"].map(
              (name) => (
                <div key={name} className="relative">
                  <motion.div
                    className="flex justify-between items-center py-2 border-b border-gray-700 cursor-pointer"
                    onClick={() => toggleDropdown(name)}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{name}</span>
                    {dropdownItems[name] && (
                      <motion.div
                        animate={{ rotate: activeDropdown === name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    )}
                  </motion.div>
                  <AnimatePresence>
                    {dropdownItems[name] && activeDropdown === name && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="bg-gray-800 rounded-lg shadow-lg mt-1"
                      >
                        {dropdownItems[name].map((item) => (
                          <motion.a
                            key={item}
                            href={`/${item.toLowerCase().replace(/ /g, "")}`}
                            className="block px-4 py-2 hover:bg-gray-700"
                            whileHover={{ x: 5, backgroundColor: "#374151" }}
                            transition={{ duration: 0.2 }}
                          >
                            {item}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbarb;