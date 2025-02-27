

const ErpandCustom = () => {
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
          <h1 className="text-4xl font-bold">ERP & Customized Software</h1>
          <p className="mt-2 text-sm">
            <span className="text-gray-300">HOME &gt; Outsourcing  &gt; </span>
            <span className="text-white font-semibold">ERP & Customized Software</span>
          </p>
        </div>
  
        {/* Content Section */}
        <div className="max-w-7xl mx-auto py-16 px-6">
          {/* Row 1 - Wealth Management Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-bold text-xl text-sky-900">ERP</h2>
              <p className="text-gray-600 mt-4">
              The Enterprise Resource Planning program is a system of integrated applications that are designed to automate different department/office operations (product planning, development, manufacturing, sales and marketing) to a single database.
Nevertheless, not all ERP software will meet to every requirement of your organization. Therefore, when deciding on the ERP software to adopt, you need to choose the most reliable one as far as your business needs and processes are concerned. In turn, here are the two types of ERP systems:
              </p>
              <h4 className="font-bold text-xl text-sky-900">Off-the-shelf</h4>
              <p className="text-gray-600 mt-4">These are systems easy to implement due to the fact that they are developed out of the experience of other organizations (user groups) other than yours. From the discussions on how each of those companies’ best use the system, you acquire information on how best to adopt the system for your business.</p>
              <h4  className="font-bold text-xl text-sky-900">Custom ERP software</h4>
              <p className="text-gray-600 mt-4">With custom ERP, the system is developed based on your company’s experience. A programmer gets to design the ERP system in accordance what exactly you want the software to be able to do and ideally, the process it should follow in order to do perform and facilitate your operations.</p>
            </div>
  
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/people-analyzing-financial-charts-virtual-interface_1262-19289.jpg?ga=GA1.1.793815406.1740464198&semt=ais_hybrid"
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
                src="https://img.freepik.com/free-vector/erp-infographic_23-2149371098.jpg?ga=GA1.1.793815406.1740464198&semt=ais_hybrid"
                className="rounded-lg shadow-lg border border-gray-300 w-full max-w-sm md:max-w-md"
              />
            </div>
  
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-xl font-bold text-sky-900">A Brief History of ERP</h2>
              <p>Open vs. closed pension funds</p>
              <p className="text-gray-600 mt-4">
              The term ERP was coined in 1990 by Gartner1, but its roots date to the 1960s. Back then, the concept applied to inventory management and control in the manufacturing sector. Software engineers created programs to monitor inventory, reconcile balances, and report on status. By the 1970s, this had evolved into Material Requirements Planning (MRP) systems for scheduling production processes. In the 1980s, MRP grew to encompass more manufacturing processes, prompting many to call it MRP-II or Manufacturing Resource Planning. By 1990, these systems had expanded beyond inventory control and other operational processes to other back-office functions like accounting and human resources, setting the stage for ERP as we've come to know it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ErpandCustom;
  
  