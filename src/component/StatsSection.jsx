import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const videos = [
  {
    title: "Project Showcase",
    url: "https://www.w3schools.com/html/mov_bbbb.mp4",
  },
  {
    title: "Team Collaboration",
    url: "https://www.w3schools.com/html/movieb.mp4",
  },
  {
    title: "Tech Innovations",
    url: "https://www.w3schools.com/html/mov_bbbb.mp4",
  },
];

const StatsSection = () => {
  const stats = [
    { number: 259, label: "Projects Completed", gradient: "from-stone-300 to-stone-100" },
    { number: 10000, label: "Satisfied Customers", gradient: "from-stone-300 to-stone-100" },
    { number: 32, label: "Awards Received", gradient: "from-stone-300 to-stone-100" },
    { number: 10, label: "Years of Experience", gradient: "from-stone-300 to-stone-100" },
  ];

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const statCardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -30 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      rotateY: 10,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.4 },
    },
  };

  const numberVariants = {
    hover: {
      scale: 1.15,
      transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const swiperVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-gradient-to-br from-sky-950 to-sky-950 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 left-1/5 w-96 h-96 bg-gradient-to-r from-stone-500 to-stone-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 right-1/5 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-fuchsia-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Stats Section */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white mb-12 tracking-tight"
          >
            You Always Get the Best Guidancess
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statCardVariants}
                whileHover="hover"
                className="relative bg-sky-950 backdrop-blur-xl p-6 rounded-2xl border border-gray-500/10 shadow-lg group overflow-hidden"
                style={{ perspective: 1000 }}
              >
                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-30 transition-all duration-500`}
                />
                {/* 3D Light Effect */}
                <motion.div
                  className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10">
                  <motion.h3
                    variants={numberVariants}
                    whileHover="hover"
                    className="text-5xl font-extrabold text-white mb-4"
                  >
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={4.5}
                      separator=","
                      className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    />
                  </motion.h3>
                  <p className="text-gray-300 text-lg font-medium">{stat.label}</p>
                </div>
                <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(255,255,255,0.15)] rounded-2xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="mt-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white mb-8"
          >
            Intern Testimonials
          </motion.h2>

          <motion.div variants={swiperVariants}>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              className="w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl"
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="w-full h-full flex justify-center items-center relative"
                    initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <video
                      controls
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    >
                      <source src={video.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <motion.div
                      className="absolute bottom-4 left-4 bg-gray-900/70 backdrop-blur-md text-white px-4 py-2 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {video.title}
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;