
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold">Have a Questions?</h5>
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="150"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
            <p className="mt-2 flex items-center"><i className="fas fa-phone mr-2"></i> +91-8860060616</p>
            <p className="flex items-center"><i className="fas fa-envelope mr-2"></i> contactus@bridgegroupsolutions.com</p>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-lg font-semibold">Links</h5>
            <ul className="space-y-2">
              {["Home", "About", "Careers", "Gallery", "Contact Us", "Service"].map((link, index) => (
                <li key={index}><a href="#" className="hover:text-blue-400">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-lg font-semibold">Services</h5>
            <ul className="space-y-2">
              {["Mutual Funds", "Wealth Management", "Portfolio Management", "Pension Funds", "Real Estate", "Software Testing"].map((service, index) => (
                <li key={index}><a href="#" className="hover:text-blue-400">{service}</a></li>
              ))}
            </ul>
          </div>

          {/* Subscribe & Social Links */}
          <div>
            <h5 className="text-lg font-semibold">Subscribe Us!</h5>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full p-2 text-black rounded-md mt-2"
            />
            <button className="bg-sky-950 text-white w-full mt-2 py-2 rounded-md hover:bg-sky-900">
              Subscribe
            </button>
            <h5 className="mt-4 text-lg font-semibold">Connect With Us</h5>
            <div className="flex space-x-4 mt-2">
              {["linkedin", "facebook", "instagram"].map((platform, index) => (
                <a key={index} href="#" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-sky-900">
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <p className="bg-sky-950 text-center text-white py-3">
        MADE BY - KAJAL KUMARI! &copy; 2025 Bridge Group Clone. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
