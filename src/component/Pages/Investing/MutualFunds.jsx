
const MutualFunds = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-sky-950 text-white py-36 px-8 text-center" style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/portrait-smart-businesswoman-looking-away_23-2148452635.jpg?ga=GA1.1.793815406.1740464198&semt=ais_hybrid')",
        }}>
        <h1 className="text-4xl font-bold">Mutual Funds</h1>
        <p className="mt-2 text-sm">
          <span className="text-gray-300">HOME &gt; INVESTING &gt; </span>
          <span className="text-white font-semibold">MUTUAL FUND</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl  lg:text-5xl  font-semibold text-gray-800">Mutual Funds</h2>
          <p className="mt-4 text-gray-600">
            To many people, Mutual Funds can seem complicated or intimidating. We
            are going to try and simplify it for you at its very basic level.
            Essentially, the money pooled in by a large number of people (or
            investors) is what makes up a Mutual Fund. This fund is managed by a
            professional fund manager.
          </p>
          <p className="mt-4 text-gray-600">
          It is a trust that collects money from a number of investors who share a common investment objective. Then, it invests the money in equities, bonds, money market instruments and/or other securities. Each investor owns units, which represent a portion of the holdings of the fund. The income/gains generated from this collective investment is distributed proportionately amongst the investors after deducting certain expenses, by calculating a scheme’s “Net Asset Value or NAV. Simply put, a Mutual Fund is one of the most viable investment options for the common man as it offers an opportunity to invest in a diversified, professionally managed basket of securities at a relatively low cost.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/financial-literacy-text-with-woman-man-reading-book-articles-internet-learn-how-plan-expenses-flat-vector-illustration_98292-9670.jpg?t=st=1740636513~exp=1740640113~hmac=b531a1467c579ef8de5a3dd188571b12a743a72367ccb5d63d28c8114de2ff2e&w=996"
            alt="Mutual Funds"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">What are the benefits of investing in Mutual Funds?</h2>
          <p className="mt-4 text-gray-600">
            Many of us dread the thought of managing our own investments. With a
            professional fund management company, people are put in charge of
            various functions based on their education, experience and skills.
            As an investor, you can either manage your finances yourself, or hire a
            professional firm. You opt for the latter when:
          </p>
          <ul className="mt-4 text-gray-600 list-disc list-inside">
            <li>You do not know how to do the job best – many of us hire someone to file our income tax returns, or almost all of us get an architect to do our house.</li>
            <li>You do not have enough time or inclination. It’s like hiring drivers even though we know how to drive.</li>
            <li>When you are likely to save money by outsourcing the job instead of doing it yourself. Like going on a journey driving your own vehicle is far costlier than taking a train.</li>
            <li>You can spend your time for other activities of your choice / liking. Professional fund management is one of the best benefits of Mutual Funds.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/pension-plan-concept-illustration_114360-19813.jpg?t=st=1740636730~exp=1740640330~hmac=8cfbae6b6ad273ab278625d75bcc7b848aaf79b3de681d1956619ef13d915915&w=740"
            alt="Benefits of Mutual Funds"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
          {/* New Section */}
          <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Why invest through Mutual Funds?</h2>
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Professional Money Management</h3>
          <p className="mt-2 text-gray-600">
            Fund managers are responsible for implementing a consistent investment strategy that reflects the goals of the fund.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Diversification</h3>
          <p className="mt-2 text-gray-600">
            Diversification is one of the best ways to reduce risk. Mutual funds offer investors an opportunity to diversify across assets.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Liquidity</h3>
          <p className="mt-2 text-gray-600">
            Investors can sell their mutual fund units on any business day and receive the current market value within a short time period.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Affordability</h3>
          <p className="mt-2 text-gray-600">
            The minimum initial investment for a mutual fund is fairly low for most funds (as low as Rs500 for some schemes).
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1653469894102-5e59f8d13900?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXV0dWFsJTIwZnVuZHMlMjAlMjBiZW5lZnRzfGVufDB8fDB8fHww"
            alt="Why Mutual Funds"
            className="rounded-lg shadow-lg"
          />
        </div>
     
        <p className="text-sky-950 font-medium bg-sky-100 border-l-4 border-blue-500 p-4 rounded-md">
  <span className="font-semibold text-red-500">Note:</span> Equity Funds are those where the investible funds are invested in equity shares in domestic companies to the extent of more than 65% of the total proceeds of such funds.</p>
    </div>




    </div>
  );
};

export default MutualFunds;
