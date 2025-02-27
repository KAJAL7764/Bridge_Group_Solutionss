
const InternshipCard = () => {
  const internships = [
    {
      title: "Marketing",
      eligibility: "Pursuing MBA",
      stipend: "INR 8,000/- (based on training completion & performance)",
      location: "Gurugram",
      responsibilities: [
        "Desktop research & gathering information",
        "Attending clients, meeting, staffs, workshops, events, exhibitions",
        "Liaising with clients, vendors, and suppliers",
        "Updating documents and sales records",
        "Reviewing sales performance of targets",
        "Observing and carrying out the sales process",
      ],
    },
    {
      title: "Human Resource",
      eligibility: "Pursuing MBA",
      stipend: "INR 8,000/- (based on training completion & performance)",
      location: "Gurugram",
      responsibilities: [
        "Updating company databases by inputting new employee details",
        "Identifying suitable candidates to fill company job vacancies",
        "Organizing interviews with shortlisted candidates",
        "Posting job notifications in social media",
        "Assisting HR staff",
        "Sending emails, letters to candidates",
      ],
    },
    {
      title: "Finance",
      eligibility: "Pursuing MBA",
      stipend: "INR 8,000/- (based on training completion & performance)",
      location: "Gurugram",
      responsibilities: [
        "Meet with clients to determine their investment needs",
        "Monitor client investments",
        "Analyze financial holdings",
        "Advise clients on best investment strategies",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-40">
      {/* Internship Description Section */}
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
        {/* Text Content */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Internship</h2>
          <p className="text-gray-700 mb-4">
            Knowledge, Initiative & Talent Excellence Series is BGS's Summer Internship Programme designed to provide tomorrow's leaders a unique platform to learn, experience and manage real business situations.
            Indeed Our Internship Program is a one of its kind programme! Students are given the opportunity to experience the rigours of actual work/business scenarios, apply their theoretical learnings 'on the job' and gain precious insights into management, leadership and everyday challenges. In fact, Internship works both ways - while you get to intern with any of our businesses and understand the core process of value-creation, we get re-energised by the host of new ideas, fresh perspectives and compelling observations that you bring to the table!

          </p>
          <p className="text-gray-700 mb-4">
            Selected interns from premier management campuses across the country. We offer projects in the following fields:
            Projects are carefully selected to offer interns an experience of real life business problems/situations that foster enhanced appreciation of business complexities besides providing a detailed insight into their chosen functional domain.
            The two-month internship comes with tremendous opportunities to 'learn' and to 'make things happen' to create a real and everlasting impact.
          </p>

          <ul className="list-disc list-inside text-gray-700">
            <li>Cloud Computing</li>
            <li>.NET Developer</li>
            <li>Supply Chain/Operations</li>
            <li>Assure Developer</li>
            <li>Customer & Service</li>
            <li>Data Science</li>
            <li>AI/ML</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center items-center  mt-9 md:mt-0">
          <img
            src="https://img.freepik.com/free-photo/happy-female-leader-meeting-with-employees_1262-2129.jpg?t=st=1740574867~exp=1740578467~hmac=0c4d2e894ad19b34a27bc7e39ada21f3a11bbc8140bfeeeacd0fb2d5a001c144&w=996"
            alt="Internship"
            className="w-[350px] h-[250px] md:w-[400px] md:h-[300px] rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-gray-800 my-8">
        We're Hiring Interns
      </h2>

      {/* Internship Cards */}
      <div className="max-w-7xl mx-auto space-y-10">
        {internships.map((internship, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">
              {internship.title}
            </h3>

            <p className="text-gray-700">
              <strong>Eligibility Criteria:</strong> {internship.eligibility}
            </p>
            <p className="text-gray-700">
              <strong>Stipend:</strong> {internship.stipend}
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> {internship.location}
            </p>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Key Responsibilities */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Key Responsibilities
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  {internship.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
                <p className="text-sm text-red-600 mt-2">
                  * Depending on performance throughout the internship period
                </p>
              </div>

              {/* Rewards & Certifications */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Rewards & Recognitions
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Attractive performance-based incentives</li>
                  <li>Domestic/International trips</li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 mt-4">
                  Certifications
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Internship Completion Certificate</li>
                  <li>Performance Certificate</li>
                  <li>Letter of Recommendation</li>
                  <li>Pre-Placement Offer</li>
                </ul>
              </div>
            </div>

            {/* Apply Button */}
            <div className="flex justify-end mt-6">
              <button className="bg-sky-950 text-white px-6 py-2 rounded-lg font-semibold hover:bg-sky-900 transition">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipCard;
