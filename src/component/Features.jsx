import { FaReact, FaCode, FaLaptopCode, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Features = () => {
  const cards = [
    {
      id: 1,
      text: "Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.",
      icon: <FaReact className="h-12 w-12 text-white" />,
    },
    {
      id: 2,
      text: "Easily test UI components, refine designs, and explore new frontend techniques.",
      icon: <FaCode className="h-12 w-12 text-white" />,
    },
    {
      id: 3,
      text: "An efficient way to create interactive web applications with modern styling and responsiveness.",
      icon: <FaLaptopCode className="h-12 w-12 text-white" />,
    },
    {
      id: 4,
      text: "A fast and lightweight approach to building stunning interfaces with Tailwind CSS and React.",
      icon: <FaPalette className="h-12 w-12 text-white" />,
    },
  ];

  return (
    <div className="flex  min-h-screen flex-col items-center justify-center bg-sky-10 py-12 px-4 sm:px-6 lg:px-8">
    <h2 className="mb-5 text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-500 dark:from-blue-900 dark:to-purple-800">
  Our Main Features
</h2>
     
      <motion.div
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:max-w-4xl mx-auto"
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-sky-200 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
          
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-sky-700 to-slate-700 opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-sky-500 shadow-lg transition-all duration-300 group-hover:bg-grenn">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  {card.icon}
                </motion.div>
              </div>
              <p className="mt-6 text-lg font-medium text-gray-700 transition-all duration-300 group-hover:text-white">
                {card.text}
              </p>
              <p className="mt-4 text-sm font-semibold">
                <a
                  href="#"
                  className="text-sky-500 transition-all duration-300 group-hover:text-white"
                >
                  Read the docs →
                </a>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
