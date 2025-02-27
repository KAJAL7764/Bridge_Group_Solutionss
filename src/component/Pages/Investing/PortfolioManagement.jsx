

const PortfolioManagement = () => {
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
        <h1 className="text-4xl font-bold">Portfolio Management</h1>
        <p className="mt-2 text-sm">
          <span className="text-gray-300">HOME &gt; Investing &gt; </span>
          <span className="text-white font-semibold">Wealth Management</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Row 1 - Wealth Management Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">What Is Portfolio Management?</h2>
            <p className="text-gray-600 mt-4">
            Portfolio management is the art and science of making decisions about investment mix and policy, matching investments to objectives, asset allocation for individuals and institutions, and balancing risk against performance. Portfolio management is all about determining strengths, weaknesses, opportunities and threats in the choice of debt vs. equity, domestic vs. international, growth vs. safety, and many other trade-offs encountered in the attempt to maximize return at a given appetite for risk.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-remote-recruitment-illustration_52683-144094.jpg?t=st=1740640832~exp=1740644432~hmac=4519dcbf12b3a0d92c0cfa88fd9a525ff3b5d47c64f20ada7556f21e8ddf79c4&w=740"
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
              src="https://img.freepik.com/free-photo/open-notebook-with-colorful-icons_1134-424.jpg?t=st=1740640783~exp=1740644383~hmac=75fff42bc05f5d6be9f14b6d50169f8c3af9281cb45d746b451d22976fae0995&w=996"
              className="rounded-lg shadow-lg border border-gray-300 w-full max-w-sm md:max-w-md"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-gray-900">Understanding Portfolio Management?</h2>
            <p className="text-gray-600 mt-4">
            Although it is common to use the terms "portfolio management" and "financial planning" as synonyms, these staples of the financial services industry are not the same. Portfolio management is the act of creating and maintaining an investment account, while financial planning is the process of developing financial goals and creating a plan of action to achieve them. Professional licensed portfolio managers are responsible for portfolio management on behalf of others, while individuals may choose to self-direct their own investments and build their own portfolio. Portfolio management's ultimate goal is to maximize the investments' expected return given an appropriate level of risk exposure.
            Portfolio management, in general, can by either passive or active in nature.. Passive management is a set-it-and-forget-it long-term strategy that often involves simply tracking a broad market index (or group of indexes), commonly referred to as indexing or index investing.
            </p>
            <p className="text-gray-600 mt-4">
            Active management instead involves a single manager, co-managers or a team of managers who attempt to beat the market return by actively managing a fund's portfolio through investment decisions based on research and decisions on individual holdings. Closed-end funds are generally actively managed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioManagement;

