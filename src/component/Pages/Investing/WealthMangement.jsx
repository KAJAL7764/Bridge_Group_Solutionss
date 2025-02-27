

const WealthManagement = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full bg-sky-950 text-white text-center py-36 px-8"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/portrait-smart-businesswoman-looking-away_23-2148452635.jpg?ga=GA1.1.793815406.1740464198&semt=ais_hybrid')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <h1 className="text-4xl font-bold">Wealth Management</h1>
        <p className="mt-2 text-sm">
          <span className="text-gray-300">HOME &gt; INVESTING &gt; </span>
          <span className="text-white font-semibold">Wealth Management</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Row 1 - Wealth Management Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Wealth Management</h2>
            <p className="text-gray-600 mt-4">
              Wealth management is an investment advisory service that combines
              financial services to address affluent clients' needs. Advisors
              gather client preferences and create tailored strategies using
              appropriate financial products.
            </p>
            <p className="text-gray-600 mt-4">
              A wealth management advisor is a high-level professional who
              provides financial and investment advice, estate planning, tax
              services, and retirement planning.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/credit-score-flat-background-with-male-character-holding-coin-surrounded-by-round-compositions-financial-icons-vector-illustration_1284-83829.jpg?t=st=1740639564~exp=1740643164~hmac=f3e0b5fb884856d5df061dbb2680561e5a5800bafc4aff222784e0fa04a0029d&w=996"
              alt="Wealth Management"
              className="rounded-lg shadow-lg border border-gray-300 w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>

        {/* Row 2 - Understanding Wealth Management */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          {/* Image */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="https://img.freepik.com/free-vector/investment-concept-illustration_114360-5161.jpg?w=996&t=st=1740642605~exp=1740643205~hmac=3a44a4171a1a1ac39c86a2d2e2a61f7dc3bda275f8d179c47c75c750061bcd2b"
              alt="Understanding Wealth Management"
              className="rounded-lg shadow-lg border border-gray-300 w-full max-w-sm md:max-w-md"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-gray-900">Understanding Wealth Management</h2>
            <p className="text-gray-600 mt-4">
              Wealth management goes beyond investment advice; it covers all financial aspects of an individual’s life. High-net-worth individuals benefit from a **holistic approach** where a single advisor oversees all financial services.
            </p>
            <p className="text-gray-600 mt-4">
              Some wealth managers specialize in **specific areas**, while others provide a broad range of services, often coordinating with **external financial experts** to optimize a client’s wealth management strategy.
            </p>
            <p className="text-gray-600 mt-4">
              Some advisors also offer banking services or guidance on **philanthropic activities**. While wealth management suits affluent clients, not all high-net-worth individuals require it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WealthManagement;

