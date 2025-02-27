import { NavLink } from "react-router-dom";
import Historyimg from '../../assets/history-img.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation, Autoplay } from "swiper/modules";
import { FaPlay } from "react-icons/fa";


// Import Partner Logos
import partner1 from "../../assets/partner/partner1.jpg";
import partner2 from "../../assets/partner/partner2.jpg";
import partner3 from "../../assets/partner/partner3.jpg";
import partner4 from "../../assets/partner/partner4.jpg";
import partner5 from "../../assets/partner/partner5.jpg";
import coreValuesImage from "../../assets/partner/core-values.jpg";
import State from "../StatsSection";



// our clint section
const testimonials = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Doe",
    review:
      "Bridge Group Solutions provided outstanding service! Their team is professional, reliable, and highly skilled.",
    position: "CEO, TechCorp",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jane Smith",
    review:
      "A fantastic experience working with Bridge Group Solutions. They exceeded our expectations with their solutions.",
    position: "Marketing Director, Growth Inc.",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Robert Johnson",
    review:
      "Exceptional service and support! I highly recommend Bridge Group Solutions for their dedication and expertise.",
    position: "Founder, StartupHub",
  },
];

// out client section content

const About = () => {
  const partners = [partner1, partner2, partner3, partner4, partner5];

  return (
    <>
    {/* <h1 className="mt-20">About Us</h1> */}
    <div
       className="relative w-full h-[450px] flex items-center justify-center"
      style={{
        backgroundImage: "url('src/assets/about-img.jpg')", // Adjust path based on your public folder structure
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-500 bg-opacity-60 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white top-8">
        <h1 className="text-6xl font-extrabold mb-6">About Us</h1>
        <div className="text-xl">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>{" "}
          <span className="mx-2">›</span> About Us
        </div>
      </div>
    </div>
    {/* Left section */}
  
    <div className="flex flex-col md:flex-row justify-between items-start gap-10 p-10 ml-20">
  {/* Left Side - Overview Section */}
  <div className="md:w-2/3">
    <h1 className="text-3xl font-bold mb-8">Overview</h1>
    <p className="text-gray-700 dark:text-gray-600 leading-relaxed">
      B.G.S was found in 2014 as one of India's original Project Outsourcing start-ups, with
      <br />
       an aim to bridge gaps in process management and outsourcing. We started as a project
       <br />
        outsourcing firm and later on moved into different zones with a motto of providing 
        <br />
        high-quality, low-cost, and applicable interventions to handle gaps.
        <br /><br />
      
      Today, the BGS enterprise has its presence across varied sectors that include
      <br />
       technology, wealth management, and talent management solutions. We have
       <br />
        expanded to more than 5 cities in less than two years and are going at great velocity 
        <br />
        towards greater heights.
      <br /><br />
      This is where aspiration meets innovation, candor fuels collaboration, and impossible 
      <br />
      surrenders to teamwork. We champion the bold to achieve the extraordinary.
      <br /><br />
      Our energy has been focused on creating an experienced team, developing technology 
      <br />
      enablers, and institutionalizing standardized processes. Our strong research and 
      <br />
      consistent outperformance, while maintaining high standards of client servicing
      <br />
       are testaments to the robustness of the model.
      <br /><br />
      We have consistently grown with clients through referrals and have a very high customer 
      <br />
      retention rate.
      <br /> <br />
      We seek out people and clients who challenge themselves to be exceptional—and
      <br />
       champion that spirit in others. We’re guided by True North, our unwavering 
       <br />
       commitment to always do the right thing by our clients, people, and communities.
       <br /><br />
      We define a bold ambition with clients, then work together as one team to create such 
      <br />
      high levels of value that we set new standards of excellence for our industries.
    </p>
  </div>

 {/* Right Side - Card Section */}
 <div className="w-full md:w-2/3 lg:w-1/2 bg-white border border-gray-800 border-x-slate-500 pt-10 shadow-lg dark:bg-gray-800 dark:border-gray-700 mx-auto md:mr-20">
  <a href="#">
    <img
      className="rounded-t-lg w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover"
      src="https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Success Story"
    />
  </a>
  <div className="p-6 md:p-8">
    <a href="#">
      <h5 className="mb-4 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Be a part of success story building Team
      </h5>
    </a>
    <p className="mb-5 text-base md:text-lg font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
    <a
      href="#"
      className="inline-flex items-center px-4 py-3 md:px-6 md:py-4 text-sm md:text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Join Us
      <svg
        className="rtl:rotate-180 w-4 h-4 md:w-5 md:h-5 ml-2"
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
    </a>
  </div>
</div>
</div>

{/* // End of side section */}

{/* History Section */}
<div className="flex flex-col items-center justify-center text-center p-10">
      {/* Centered Heading */}
      <h1 className="text-4xl font-bold mb-6">History</h1>

      {/* Centered Image */}
      <div>
        <img
          src={Historyimg}
          alt="Office Content"
          className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg "
        />
      </div>
    </div>
{/* End of History Section */}
{/* Partners Section */}
<div className="w-full py-20">
      <h2 className="text-center text-3xl font-bold mb-6">Our Partners</h2>
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 1, // No delay, continuous scrolling
            disableOnInteraction: false,
          }}
          speed={3000} // Smooth scrolling speed
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="px-4"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="w-40 h-20 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

{/* End of Partners Section */}

{/* Our Core Values */}
<div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Left Side - Image Section */}
        <div className="lg:w-1/2 w-full flex items-stretch relative">
          <img
            src={coreValuesImage}
            alt="Core Values"
            className="w-full object-cover rounded-lg shadow-lg"
          />
          
          {/* Play Button (Overlay) */}
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg hover:bg-opacity-50 transition">
            <FaPlay className="text-white text-4xl"
            href="www.google.com" />
          </button>
        </div>

        {/* Right Side - Text Section */}
        <div className="lg:w-1/2 w-full text-left lg:pl-10">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Core Values</h2>
          <p className="text-gray-700 mb-4">
          Bridge Group Solutions hold our associates, customers, employees, as
          <br/>
           well as our community in the highest regard, where we incorporate 
           <br/> 
           both the needs of our company, as well as the needs of our 
           <br/>
           ever-changing world into our culture. Our core values are the backbone
           <br/> to
            our company which resonate with our vision:
          </p>

          {/* Core Values List */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">People</h3>
              <br/>
              <p className="text-gray-600">
              We must be caring, show respect, compassion and humanity for our
              <br/>
              colleagues, associates and customers around the world, and always
              <br/>
              work for the benefit of the communities we serve.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
              <br/>
              <p className="text-gray-600">
              We are committed to foster customer centric culture where our
              <br/>
              processes, services and innovations are aligned around
              <br/>
              customer / franchisee / business associate expectations.
               </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Customer Delight</h3>
              <br/>
              <p className="text-gray-600">
              We are committed to foster customer centric culture where our
              <br/>
              processes, services and innovations are aligned around
              <br/>
              customer/franchisee/business associate expectations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
              <br/>
              <p className="text-gray-600">
              We must constantly strive to achieve the highest possible standards in
              <br/>
              our execution and in the quality of the services we provide at
              <br/>
              affordable cost and need based solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Trust</h3>
              <br/>
              <p className="text-gray-600">
              We as team believe that the trust is the foundation of our relationship
              <br/>
              with our associates, franchisee, customer and employees and we
              <br/>
              cultivate it every day by being accountable of every single property
              <br/>
              transaction we offer.
             </p>
            </div>
          </div>
        </div>
      </div>
    </div>



<State />



<div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Clients Says
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full lg:w-3/4 mx-auto"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
              <p className="mt-4 text-gray-700 italic">{testimonial.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default About;
