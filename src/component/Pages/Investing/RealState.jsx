
  
const RealState = () => {
    return (
      <div>
        {/* Hero Section */}
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
          <h1 className="text-4xl font-bold">Real Estate</h1>
          <p className="mt-2 text-sm">
            <span className="text-gray-300">HOME &gt; Investing &gt; </span>
            <span className="text-white font-semibold">Real Estate</span>
          </p>
        </div>
  
        {/* Content Section */}
        <div className="max-w-7xl mx-auto py-16 px-6">
          {/* Row 1 - Real Estate Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Real Estate</h2>
              <p className="text-gray-600 mt-4">
                Real estate investing involves the purchase, ownership, management, rental and/or sale of real estate for profit. Improvement of realty property as part of a real estate investment strategy is generally considered to be a sub-specialty of real estate investing called real estate development.
              </p>
              <p className="text-gray-600 mt-4">
                Real Estate investment has always been a lucrative option. It still attracts a lot of investors for building on wealth as it promises good returns. Real Estate covers:
                <ul className="list-disc ml-6 mt-2">
                  <li>Housing sector</li>
                  <li>Retail</li>
                  <li>Hospitality</li>
                  <li>Commercial</li>
                </ul>
              </p>
            </div>
  
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/man-telescope-looking-chart-rating-architecture-elements_126523-2932.jpg?t=st=1740642078~exp=1740645678~hmac=b7158aa5c9b384405714ceccd4eb8aa4472d340c27fea8650c72276b18d0f19a&w=740"
                alt="Real Estate"
                className="rounded-lg shadow-lg border border-gray-300 w-full max-w-sm md:max-w-md"
              />
            </div>
          </div>
  
          {/* New Section - Real Estate Investment Decisions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold text-gray-900">Decisions</h2>
              <p className="text-gray-600 mt-4">
                There are many factors that influence Real Estate Investment Decisions:
              </p>
              <ul className="list-decimal ml-6 mt-4 text-gray-600 space-y-2">
                <li>Political Stability</li>
                <li>Infrastructural growth</li>
                <li>Connectivity of a place to airports and other major cities</li>
                <li>Government Policies in General and for the area – ease of business, transparency, speedy approvals</li>
                <li>Tax benefits</li>
                <li>Quality of Life – Basic Amenities, Education, and Health facilities</li>
                <li>High paying jobs – more beneficial for investment in the housing sector</li>
                <li>Migration – Inflow of people</li>
                <li>Prospects for future development</li>
                <li>Emotional bonding with hometown – especially for NRIs</li>
                <li>Affordability</li>
              </ul>
              <p className="text-gray-600 mt-4">
                When it comes to choosing cities for Indian Real Estate Investment, Delhi, Mumbai, Chennai, and Kolkata have always been favorites. However, due to saturation, future growth potential is limited.
              </p>
            </div>
  
            {/* Image */}
            <div className="flex justify-center order-1 md:order-2">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-rising-house-prices-illustration_23-2150815133.jpg?t=st=1740642062~exp=1740645662~hmac=d2dd28a5b5848a93a416012d9a6312d7c31143acb4fe058bc37bb5ce19bec8ad&w=740"
                className="rounded-lg shadow-lg border border-gray-300 w-full max-w-sm md:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RealState;
  