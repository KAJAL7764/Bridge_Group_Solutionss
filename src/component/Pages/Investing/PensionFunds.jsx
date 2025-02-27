

const PensionFunds = () => {
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
          <h1 className="text-4xl font-bold">Pension Funds</h1>
          <p className="mt-2 text-sm">
            <span className="text-gray-300">HOME &gt; Investing &gt; </span>
            <span className="text-white font-semibold">Pension Funds</span>
          </p>
        </div>
  
        {/* Content Section */}
        <div className="max-w-7xl mx-auto py-16 px-6">
          {/* Row 1 - Wealth Management Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Pension Funds</h2>
              <p className="text-gray-600 mt-4">
              Pooled-contributions from pension plans set up by employers, unions, or other organizations to provide for the employees' or members' retirement benefits. Pension funds are the largest investment blocks in most countries and dominate the stock markets where they invest. When managed by professional fund managers, they constitute the institutional investor category with insurance companies and investment trusts. Commonly, pension funds are exempt from capital gains tax and the earnings on their investment portfolios are either tax deferred or tax exempt.
              </p>
            </div>
  
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/senior-grandparents-get-retirement-future-safety_33099-2214.jpg?t=st=1740641442~exp=1740645042~hmac=0a23ba54da8d257b16879563996a92a76cfc7e15d0f076d680839cccc2cc8814&w=996"
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
                src="https://img.freepik.com/free-vector/pension-plan-concept-illustration_114360-21223.jpg?t=st=1740641383~exp=1740644983~hmac=47e39edb5905861564c5cd3dc693b1516373b002e770ea1f759a44318e523c0a&w=996"
                className="rounded-lg shadow-lg border border-gray-300 w-full max-w-sm md:max-w-md"
              />
            </div>
  
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold text-gray-900">Classifications</h2>
              <p>Open vs. closed pension funds</p>
              <p className="text-gray-600 mt-4">
              Open pension funds support at least one pension plan with no restriction on membership while closed pension funds support only pension plans that are limited to certain employees. <br />

              Closed pension funds are further subclassified into: <br />
1. Single employer pension funds <br />
2. Multi-employer pension funds <br />
3. Related member pension funds <br />
4. Individual pension funds <br />
              </p>
              <h2 className="text-2xl font-bold text-gray-900">Public vs Private pension funds</h2>
              <p className="text-gray-600 mt-4">
              A public pension fund is one that is regulated under public sector law while a private pension fund is regulated under private sector law.
In certain countries the distinction between public or government pension funds and private pension funds may be difficult to assess. In others, the distinction is made sharply in law, with very specific requirements for administration and investment. For example, local governmental bodies in the United States are subject to laws passed by the states in which those localities exist, and these laws include provisions such as defining classes of permitted investments and a minimum municipal obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PensionFunds;
  
  