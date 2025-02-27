
const SoftwareTesting = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Header Section */}
      <div
        className="relative w-full bg-sky-950 text-white text-center py-36 px-8"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/portrait-smart-businesswoman-looking-away_23-2148452635.jpg?ga=GA1.1.793815406.1740464198&semt=ais_hybrid')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <h1 className="text-4xl font-bold">ERP & Customized Software</h1>
        <p className="mt-2 text-sm">
          <span className="text-gray-300">HOME &gt; Outsourcing &gt; </span>
          <span className="text-white font-semibold">ERP & Customized Software</span>
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-6xl w-full px-6 py-10">
        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center bg-white gap-8">
          {/* Text Section */}
          <div className="md:w-1/2 text-gray-900">
            <h2 className="text-3xl font-bold text-sky-950">Software Testing</h2>
            <p className="mt-4 text-gray-700">
              <strong>Ensuring High-Quality and Reliable Software:</strong> 
              At Bridge Group Solutions, we understand that software quality is paramount for business success. Our comprehensive Software Testing Services are designed to help your business deliver reliable, secure, and high-performance software solutions that exceed user expectations.
            </p>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li><strong>Manual Testing:</strong>We offer meticulous manual testing processes to ensure your software performs optimally under all conditions. Our experienced testers identify potential bugs and performance issues through rigorous functional and non-functional testing techniques.</li>
              <li><strong>Automation Testing:</strong> Speed up your testing cycles with our advanced automation testing solutions. We use the latest automation tools and frameworks to create reusable test scripts, ensuring consistent and efficient test execution. This reduces the risk of human error while ensuring faster releases.</li>
              <li><strong>Performance Testing:</strong>Our performance testing services ensure your software can handle high user loads and stressful conditions without compromising speed, stability, or functionality. We focus on load testing, stress testing, and scalability testing to guarantee top-tier performance.</li>
              <li><strong>Security Testing:</strong>With cybersecurity risks on the rise, safeguarding your software against vulnerabilities is more important than ever. Our security testing services identify potential threats, protect sensitive data, and ensure your software meets compliance standards.</li>
              <li><strong>Mobile Testing:</strong> Mobile applications demand seamless performance across a variety of devices, operating systems, and network conditions. Our mobile testing services ensure your app delivers a consistent user experience, no matter the platform.</li>
              <li><strong>API Testing:</strong>APIs are the backbone of modern software architecture. Our API testing ensures that your integrations and third-party services function flawlessly, supporting secure and robust communication across all systems.</li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://img.freepik.com/free-photo/teleworking-programmer-designing-developing-software-using-tablet_482257-98295.jpg" 
              alt="Software Testing" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white gap-8 mt-10">
          {/* Text Section */}
          <div className="md:w-1/2 text-gray-900">
            <h2 className="text-3xl font-bold text-sky-950">Why Choose Bridge Group Solutions?</h2>
            <p className="mt-4 text-gray-700">
              <strong>Expertise Across Domains:</strong> : Our team has extensive experience testing software across various industries, including finance, healthcare, retail, and more.
            </p>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li><strong>Comprehensive Test Coverage:</strong> We follow a holistic approach, ensuring every component of your software undergoes rigorous testing for optimal functionality and user experience.</li>
              <li><strong>Cost-Effective Solutions:</strong>We offer flexible and scalable testing solutions to meet your specific business needs without exceeding your budget.</li>
              <li><strong>Dedicated Support:</strong> Our team provides continuous support throughout the software lifecycle, from planning and development to deployment and maintenance.</li>
            </ul>
            <div>
            <h1  className="text-3xl mt-6 font-bold text-sky-950">Achieve Seamless Software Performance</h1>
            <p  className="mt-4 text-gray-700">Whether you're developing a new application or maintaining an existing one, Bridge Group Solutions is your trusted partner in delivering high-quality software. With our robust testing methodologies and expert team, we ensure your software is reliable, scalable, and ready to meet the challenges of tomorrow.</p>
            </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://img.freepik.com/free-photo/ai-robotic-operations-tablet_1387-647.jpg?t=st=1740648816~exp=1740652416~hmac=691dc32ea7861dea0761adf122f718ffb5d454da06819108824b02fad2336317&w=740" 
              alt="Why Choose Us"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareTesting;
