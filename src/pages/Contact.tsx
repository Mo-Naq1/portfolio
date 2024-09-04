import React from "react";

function Contact() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 p-8">
      {/* Left side with GitHub and Instagram */}
      <div className="flex flex-col space-y-8 lg:w-1/3">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-center h-1/2">
          {/* GitHub Section */}
          <a href="https://github.com/Mo-Naq1" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-700">
            GitHub
          </a>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-center h-1/2">
          {/* Instagram Section */}
          <a href="https://www.linkedin.com/in/mohammed-naqi-2b98002b6/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-700">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right side with Contact Form */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md flex-1 mt-8 lg:mt-0">
        <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="your-email@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your message"
              rows="10"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
