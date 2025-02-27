"use client";
import { FaChartBar, FaClipboardList, FaUserTie, FaProjectDiagram, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

// Button

// end Button

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Risk Management",
      description:
        "Identifying, evaluating, and prioritizing risks to minimize impact and maximize opportunities with efficient resource application.",
      icon: <FaChartBar />,
      // gradient: "from-cyan-500 to-teal-400",
      gradient: "from-sky-900 to-slate-900",
    },
    {
      id: 2,
      title: "Portfolio Management",
      description:
        "Balancing investment mix and policy to match objectives, optimize asset allocation, and enhance performance.",
      icon: <FaClipboardList />,
      gradient: "from-sky-900 to-slate-900",
    },
    {
      id: 3,
      title: "Wealth Management",
      description:
        "Comprehensive financial planning and investment services tailored for individuals and institutions.",
      icon: <FaUserTie />,
      gradient: "from-sky-900 to-slate-900",
    },
    {
      id: 4,
      title: "Project Outsourcing",
      description:
        "Subcontracting project management or tasks to streamline operations and boost efficiency.",
      icon: <FaProjectDiagram />,
      gradient: "from-sky-900 to-slate-900",
    },
    {
      id: 5,
      title: "ERP & Customized Software",
      description:
        "Integrated software solutions to automate and manage business processes effectively.",
      icon: <FaCogs />,
      gradient: "from-sky-900 to-slate-900",
    },
  ];

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      rotateY: 10,
      rotateX: 5,
      z: 20,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.4 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 360],
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const glowVariants = {
    hover: {
      opacity: 0.3,
      scale: 1.2,
      transition: { duration: 0.4 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <section className="relative bg-gray-900 py-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 left-1/5 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-teal-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-0 right-1/5 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-fuchsia-400/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-6xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-white bg-clip-text  mb-6 tracking-tight"
          >
            Our Best Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-300 mb-12 text-lg"
          >
            Unmatched services driving growth across sectors. Explore our offerings below.
          </motion.p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="relative bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-700/30 group overflow-hidden"
                style={{ perspective: 1000 }}
              >
                {/* Gradient Overlay */}
                <motion.div
                  variants={glowVariants}
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0`}
                />

                {/* 3D Light Effect */}
                <motion.div
                  className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className={`text-5xl text-white mb-4 flex justify-center bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>

                {/* Enhanced Glow Effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(255,255,255,0.15)] rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Banner Section */}
      <div className="relative w-full h-40 overflow-hidden">
        <motion.img
          src="https://img.freepik.com/free-photo/woman-hacker-using-dangerous-virous-steal-bank-information-programmer-writing-malware-cyber-attacks-using-performance-laptop-midnight_482257-6694.jpg?t=st=1740553120~exp=1740556720~hmac=b4c7ff7208e5492954c8620d5c8a292da0c13fd7d08edcb680d7972d781b9249&w=996"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-stone-500 to-gold-600 mix-blend-multiply"
          animate={{ opacity: [0.7, 0.8, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 flex items-center justify-end pr-8 mr-20">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-6 py-3 text-white font-semibold bg-gold rounded-full shadow-lg"
          >
            Request Quote
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Services;