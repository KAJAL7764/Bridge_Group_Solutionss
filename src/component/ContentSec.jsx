import { FaReact, FaCode, FaLaptopCode, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";
// import Meeting from '../component/assetes/undraw_meeting_dunc.svg'

const ContentSec = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, rotateX: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      scale: 1.15,
      transition: { duration: 0.5 },
    },
  };

  const features = [
    {
      id: 1,
      text: "We give our customers an unmatched personalized solutions as per their needs.",
      icon: <FaReact className="h-12 w-12 text-white" />,
      gradient: "from-sky-950 to-slate-950",
    },
    {
      id: 2,
      text: "We believe in customers delight rather than in number of customers.",
      icon: <FaCode className="h-12 w-12 text-white" />,
      gradient: "from-sky-950 to-slate-950",
    },
    {
      id: 3,
      text: "We provide premium 24x7 support to our customers.",
      icon: <FaLaptopCode className="h-12 w-12 text-white" />,
      gradient: "from-sky-950 to-slate-950",
    },
    {
      id: 4,
      text: "As a team of talented and young members we believe in fresh ideas.",
      icon: <FaPalette className="h-12 w-12 text-white" />,
      gradient: "from-sky-950 to-slate-950",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-screen-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 items-center"
      >
        {/* Features Section */}
        <div className="mb-12 lg:mb-0">
          <motion.h2
            variants={textVariants}
            className="text-4xl text-center md:text-5xl font-extrabold text-transparent bg-clip-text  mb-10 tracking-tight text-white lg:text-left"
          >
            Our Main Features
          </motion.h2>
          <motion.div
            variants={sectionVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-sky-950 backdrop-blur-md p-6 shadow-lg border border-gray-700"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 transition-all duration-500 group-hover:opacity-100`}
                />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className={`grid h-16 w-16 place-items-center rounded-full bg-gradient-to-r ${feature.gradient} shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>
                  <p className="mt-6 text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                    {feature.text}
                  </p>
                  <motion.p
                    className="mt-4 text-sm font-semibold"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a href="#" className="text-stone-400 group-hover:text-white">
                      Read the docs →
                    </a>
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Card Section */}
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="relative max-w-md mx-auto bg-slate-800 border border-black-700/30 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <motion.img
              className="w-full h-64 object-cover"
              src="https://img.freepik.com/free-vector/organic-flat-people-business-training-illustration_23-2148920667.jpg?t=st=1740464203~exp=1740467803~hmac=d60dbff9ae6980c37b27570094453f4abd909b8166f7e99e0a97ff9a6f2eec13&w=996"
              alt="Team Success"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
          </div>

          {/* Card Content */}
          <div className="p-6 relative z-10">
            <h5 className="text-2xl font-bold text-center text-white mb-3 tracking-tight">
              Be a part of success story building Teams
            </h5>
            <p className="text-gray-300 mb-4 font-normal">
              Good News is that we are hiring for various profiles and for various locations. We
              are also looking for interns for winter internship and live projects.
            </p>
            <motion.a
              href="#"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-500 to-gold-500 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-500/50"
            >
              Read More
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </motion.a>
          </div>

          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] rounded-2xl pointer-events-none" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContentSec;