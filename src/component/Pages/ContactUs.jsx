// import { NavLink } from 'react-router-dom'
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white text-center py-60"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg?t=st=1740474182~exp=1740477782~hmac=bfcef543e0d9d7c4a74627bfd378ea3a043cac41301dec50f91c06ddb6e1ffc5&w=740')",
        }}
      >
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-2">
          <a href="#" className="text-gray-200 hover:underline">
            Home
          </a>{" "}
          &gt; Contact
        </p>
      </section>

      {/* Contact Form */}
      <div className="container mx-auto px-4 py-10 max-w-3xl bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-center text-2xl font-semibold mb-6">Get in Touch</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address 2</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Address 2"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">State/Country</label>
              <select className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200">
                <option>-Select-</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Zip</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Zip"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 focus:ring focus:ring-blue-200 border rounded"
              id="checkMeOut"
            />
            <label htmlFor="checkMeOut" className="text-sm">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-950 text-white py-2 rounded-md hover:bg-sky-900 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
