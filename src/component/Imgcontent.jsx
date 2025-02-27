import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Imgcontent = () => {
  const slides = [
    {
      image:
        "https://img.freepik.com/free-photo/business-meeting-office_1268-21542.jpg?t=st=1740651244~exp=1740654844~hmac=15d8d314b1e47d354b0294ab67c9c1f9f0e48af0c337d9741690332af6a3826d&w=996",
      text: "The Next Big Thing",
      buttonText: "Join Us",
    },
    {
      image:
        "https://img.freepik.com/free-photo/side-view-three-people-business-meeting_1098-19141.jpg?t=st=1740651216~exp=1740654816~hmac=59fb1cadf19581a3cad4241391382924018f56cc736143eb4dae7beb5a874405&w=996",
      text: "Taking Over The World",
      buttonText: "Click Here",
    },
    {
      image:
        "https://img.freepik.com/free-photo/workplace-violence-taking-place-colleagues_23-2149361875.jpg?ga=GA1.1.793815406.1740464198&semt=ais_hybrid",
      text: "The Game Changers",
      buttonText: "Join Us",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Animation Variants
  const slideVariants = {
    initial: { opacity: 0, scale: 0.9, x: 150 },
    animate: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 1.1, x: -150 },
  };

  const textVariants = {
    initial: { opacity: 0, y: 60, rotate: -15 },
    animate: { opacity: 1, y: 0, rotate: 0 },
  };

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.2,
      boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.8)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.9 },
  };

  const dotVariants = {
    active: { scale: 1.5, backgroundColor: "#3b82f6", opacity: 1 },
    inactive: { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.3)", opacity: 0.5 },
  };

  const overlayVariants = {
    animate: {
      background: [
        "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
        "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)",
        "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
      ],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Particle Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)",
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <AnimatePresence>
        {slides.map((slide, index) => (
          currentIndex === index && (
            <motion.div
              key={index}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Image with Enhanced Zoom and Parallax */}
              <motion.img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              />
              {/* Animated Overlay */}
              <motion.div
                variants={overlayVariants}
                animate="animate"
                className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-12"
              >
                {/* Text with Glow and Bounce */}
                <motion.h1
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  className="text-3xl sm:text-5xl font-extrabold uppercase mb-6 bg-gradient-to-r from-slate-950 to-slate-950 bg-clip-text text-transparent relative"
                >
                  {slide.text}
                  <motion.span
                    className="absolute inset-0 blur-md text-white text"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.h1>
                {/* Button with Shine and Pulse */}
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                  className="relative bg-gradient-to-r from-sky-900 to-slate-900 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full text-lg font-semibold overflow-hidden"
                >
                  <span className="relative z-10">{slide.buttonText}</span>
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows with Bounce */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.3, rotate: -15 }}
        whileTap={{ scale: 0.85 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-gray-900/90 text-white rounded-full hover:bg-gray-900 sm:p-4 z-10 shadow-lg"
      >
        ❮
      </motion.button>
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.3, rotate: 15 }}
        whileTap={{ scale: 0.85 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-gray-900/90 text-white rounded-full hover:bg-gray-900 sm:p-4 z-10 shadow-lg"
      >
        ❯
      </motion.button>

      {/* Dots with Pulse and Glow */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            animate={currentIndex === index ? "active" : "inactive"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-gray-200 relative"
            whileHover={{ scale: 1.8 }}
          >
            {currentIndex === index && (
              <motion.div
                className="absolute inset-0 bg-sky-950 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Imgcontent;