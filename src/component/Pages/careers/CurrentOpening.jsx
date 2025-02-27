
const CurrentOpenings = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="bg-sky-950 text-white text-center p-38  bg-cover bg-center"  style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/portrait-smart-businesswoman-looking-away_23-2148452635.jpg?ga=GA1.1.793815406.1740464198&semt=ais_hybrid')",
        }}>
        <h2 className="text-3xl font-bold">Current Openings</h2>
        <p className="mt-2 text-sm sm:text-base">
          <a href="/" className="text-gray-200 hover:underline">Home</a> &gt;
          <a href="/careers" className="text-gray-200 hover:underline"> Careers</a> &gt;
          <span className="text-gray-300"> Current Openings</span>
        </p>
      </div>

      {/* Job Listing Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        {/* Job Description */}
        <div className="lg:w-2/3 w-full">
          <p className="text-gray-600 text-sm sm:text-base">
            Good news, we are expanding! Come join us and feel the difference. We need passionate
            team members who want to contribute to creating a smile on our customers by helping
            them achieve their personal goals.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold mt-4 text-blue-900">
            Job Profile: Sales Executive, Delhi NCR
          </h3>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            <b>No of Openings:</b> 10 openings for Gurgaon
          </p>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            <b>Package:</b> Between Rs 1.50 LPA - Rs 3.00 LPA, + Incentives + Conveyance
            (Candidate must have their own bike)
          </p>

          {/* Job Description */}
          <h4 className="text-lg sm:text-xl font-semibold mt-4 text-gray-800">Job Description:</h4>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 text-sm sm:text-base">
            <li>Develop and execute a sales strategy for increasing interactive penetration and improving operational economics.</li>
            <li>Develop linkages with the implementation team to facilitate fast and efficient implementations of won business.</li>
            <li>Retaining and growing the margins in our new business wins.</li>
            <li>Mapping of the overall market potential within prescribed territory to determine Property’s current market share.</li>
            <li>Monitor and set strategies to overcome key competition.</li>
            <li>Directly selling through new customer acquisitions.</li>
          </ul>

          {/* Skills */}
          <h4 className="text-lg sm:text-xl font-semibold mt-6 text-gray-800">Skills:</h4>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2 text-sm sm:text-base">
            <li>Personal pipeline management experience, including ability to make cold calls on prospects.</li>
            <li>Result-oriented with experience in developing and executing successful sales strategies.</li>
            <li>Self-motivated with strong time management skills.</li>
            <li>Strong oral and written communication skills.</li>
            <li>Strong Microsoft Word, PowerPoint, and Excel skills preferred.</li>
            <li>Build relationships with decision-makers and influencers with the client.</li>
          </ul>

          {/* Join Us Button */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="bg-sky-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-950 transition">
              Join us
            </button>
          </div>
        </div>

        {/* Job Image */}
        <div className="lg:w-1/3 w-full flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-photo/young-business-people_1098-3293.jpg?w=996&t=st=1740574867~exp=1740578467~hmac=0c4d2e894ad19b34a27bc7e39ada21f3a11bbc8140bfeeeacd0fb2d5a001c144"
            alt="Current Openings"
            className="w-full max-w-[400px] h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentOpenings;

