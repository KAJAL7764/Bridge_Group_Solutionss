import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const performers = [
  {
    name: "Sophia Miller",
    role: "Software Engineer",
    feedback: "Sophia delivered an outstanding project ahead of schedule with exceptional quality!",
    image: "https://www.bridgegroupsolutions.com/images/rolishri.jpg",
    gradient: "from-sky-900 to-slate-900",
  },
  {
    name: "Ethan Carter",
    role: "Product Manager",
    feedback: "Ethan's leadership and strategic thinking helped us close a major deal this week.",
    image: "https://www.bridgegroupsolutions.com/images/RISHIKA.jpg",
    gradient: "from-sky-900 to-slate-900",
  },
  {
    name: "Ava Johnson",
    role: "UI/UX Designer",
    feedback: "Ava introduced a fresh UI concept that significantly improved user engagement!",
    image: "https://www.bridgegroupsolutions.com/images/rolishri.jpg",
    gradient: "from-sky-900 to-slate-900",
  },
  {
    name: "Liam Smith",
    role: "Marketing Strategist",
    feedback: "Liam's innovative campaigns resulted in a 40% increase in customer engagement!",
    image: "https://www.bridgegroupsolutions.com/images/rolishri.jpg",
    gradient: "from-sky-900 to-slate-900",
  },
];

const InternTestimonials = () => {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.1,
      rotateY: 10,
      rotateX: 5,
      z: 20,
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.4 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.15,
      rotate: [0, 360],
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const glowVariants = {
    hover: {
      opacity: 0.4,
      scale: 1.2,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 left-1/5 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-gold-400/20 rounded-full blur-3xl"
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
          className="text-4xl md:text-5xl font-extrabold bg-clip-text bg-gradient-to-r text-white mb-12 tracking-tight"
        >
          Star Performer of the Week
        </motion.h2>

        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          speed={1200}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-full max-w-5xl"
        >
          {performers.map((performer, index) => (
            <SwiperSlide key={index} className="flex justify-center" style={{ width: "auto" }}>
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 max-w-sm text-center shadow-lg overflow-hidden group"
                style={{ perspective: 1000 }}
              >
                {/* Gradient Overlay */}
                <motion.div
                  variants={glowVariants}
                  className={`absolute inset-0 bg-gradient-to-br ${performer.gradient} opacity-0`}
                />

                {/* 3D Light Effect */}
                <motion.div
                  className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10">
                  <motion.div
                    variants={imageVariants}
                    whileHover="hover"
                    className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-gold-900 shadow-xl overflow-hidden"
                  >
                    <img
                      src={performer.image}
                      alt={performer.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">{performer.name}</h3>
                  <p className="text-sm text-gray-300">{performer.role}</p>
                  <p className="mt-3 text-gray-200 italic tracking-wide">{performer.feedback}</p>
                </div>

                {/* Enhanced Glow Effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.15)] rounded-2xl pointer-events-none" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default InternTestimonials;