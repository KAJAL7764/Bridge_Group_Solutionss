
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import vdo1 from "./Videos/vdo1";
// import vdo2 from "./Videos/vdo2";
// import vdo3 from "./Videos/vdo3";

const videos = [
  {
    title: "Project Showcase",
    url: "https://media.istockphoto.com/id/1036743030/video/business-people-listening-to-their-asian-colleague-holding-a-presentation-in-the-glass.mp4?s=mp4-640x640-is&k=20&c=1EyI19ycNEjDHa1hJQPsYRzCABmwJ_NELuFniFo9JJs=",
  },
  {
    title: "Team Collaboration",
    url: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "Tech Innovations",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const VideoSlider = () => {
  return (
    <section className="w-full bg-white flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold  mb-6 text-center">Intern Testimonials</h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-[60vh]"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[60vh] flex justify-center items-center">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default VideoSlider;
