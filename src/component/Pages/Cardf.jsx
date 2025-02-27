
import { useNavigate } from "react-router-dom";

import image1 from "../../assets/style2/main-img/1.png";
import imghover1 from "../../assets/style2/hover-img/1.png";
import image2 from "../../assets/style2/main-img/2.png";
import imghover2 from "../../assets/style2/hover-img/2.png";
import image3 from "../../assets/style2/main-img/3.png";
import imghover3 from "../../assets/style2/hover-img/3.png";
import image4 from "../../assets/style2/main-img/4.png";
import imghover4 from "../../assets/style2/hover-img/4.png";
import image5 from "../../assets/style2/main-img/5.png";
import imghover5 from "../../assets/style2/hover-img/5.png";
import image6 from "../../assets/style2/main-img/6.png";
import imghover6 from "../../assets/style2/hover-img/6.png";

const Cardf = () => {
 const navigate = useNavigate();
 const handleButtonClick = () => {
   navigate("/contact");
 };

  const features = [
    {
      title: "Doctors Module",
      img: image1,
      hoverImg: imghover1,
      description:
        "This module contains details of the schedules, duties, and appointments of doctors. Doctors can easily check and monitor their activities so that they don't miss any appointments.",
    },
    {
      title: "Patient Management",
      img: image2,
      hoverImg: imghover2,
      description:
        "It helps to manage patients from appointments to admission and discharge, efficiently handling every aspect of the patient lifecycle.",
    },
    {
      title: "OT Management",
      img: image3,
      hoverImg: imghover3,
      description:
        "Check OT availability and keep records of the operation schedule through the HMS. Automate the whole OT management process.",
    },
    {
      title: "Pathology Management",
      img: image4,
      hoverImg: imghover4,
      description:
        "Manage your orders, generate reports automatically, and enable smart notifications. Pathologists can get detailed reports and analytics through the HMS.",
    },
    {
      title: "Pharmacy Module",
      img: image5,
      hoverImg: imghover5,
      description:
        "Our HMS assists pharmacies to manage their sales, distribution, and financial data efficiently.",
    },
    {
      title: "Billing Module",
      img: image6,
      hoverImg: imghover6,
      description:
        "Integrated billing ensures accurate and smooth workflow. You can manage bills from various departments in a single place.",
    },
  ];

  return (
    <>

<div className="bg-gray-100 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-semibold text-center mb-12">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <div className="relative group">
          <img
            className="w-full h-48 object-cover rounded-md transition duration-300 group-hover:opacity-0"
            src={image1}
            alt=""
          />
          <img
            className="absolute inset-0 w-full h-48 object-cover rounded-md opacity-0 transition duration-300 group-hover:opacity-100"
            src={imghover1}
            alt=""
          />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            <a href="software-development.html" className="text-blue-600 hover:underline">Doctors Module</a>
          </h3>
          <p className="text-gray-600 mt-2">
            This module contains details of the schedules, duties, and appointments of doctors.
            Doctors can easily check and monitor their activities so that they don’t miss any appointments.
            Check appointments, get schedule notifications, apply for leave, and access records.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



    {/* // */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Hospital Management System</h1>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative group">
                <img
                  className="w-full h-48 object-cover rounded-md transition duration-300 group-hover:opacity-0"
                  src={feature.img}
                  alt="Feature"
                />
                <img
                  className="absolute inset-0 w-full h-48 object-cover rounded-md opacity-0 transition duration-300 group-hover:opacity-100"
                  src={feature.hoverImg}
                  alt="Feature Hover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cardf;