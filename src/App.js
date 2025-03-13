import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen bg-blue-600 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">TalentBard</h1>
      <ul className="space-y-4">
        <li className="cursor-pointer">Register</li>
        <li className="cursor-pointer">Work Experience</li>
        <li className="cursor-pointer">Portfolio & References</li>
        <li className="cursor-pointer">Preferred Work Terms</li>
        <li className="cursor-pointer">Language Proficiency</li>
        <li className="cursor-pointer">Job Preferences</li>
      </ul>
    </div>
  );
};


const RegistrationForm = () => {
  return (
    <div className="w-3/4 flex justify-center">
      <div className="w-[90%] px-20 pt-3 bg-white rounded-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <h2 className="text-2xl font-bold mb-4">Company Registration</h2>
        <form className="space-y-4">
          {["Company Name", "Company's Phone Number", "About Company", "Company Website", "Company LinkedIn Profile", "Project Description", "Total Funding Raised ($/INR)", "Your Designation in the Organisation", "Personal Contact Number", "Personal LinkedIn Profile"].map((label, index) => (
            <div key={index}>
              <span className="block text-gray-600 font-medium mb-1">{label}</span>
              <input type="text" placeholder={label} className="w-full p-2 border rounded shadow-sm" />
            </div>
          ))}

          {/* Company Work Email */}
          <div>
            <span className="block text-gray-600 font-medium mb-1">Company’s Work Email</span>
            <input type="email" placeholder="name@companyname.com" className="w-full p-2 border rounded shadow-sm" />
          </div>

          {/* Company Size */}
          <div>
            <span className="block text-gray-600 font-medium mb-1">Company Size</span>
            <input type="number" placeholder="Enter number of employees" className="w-full p-2 border rounded shadow-sm" />
          </div>

          {/* Industry Dropdown */}
          <div>
            <span className="block text-gray-600 font-medium mb-1">Industry</span>
            <select className="w-full p-2 border rounded shadow-sm">
              <option>Technology</option>
              <option>Sports</option>
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Other</option>
            </select>
            <input type="text" placeholder="If Other, please specify" className="w-full p-2 border rounded shadow-sm mt-2" />
          </div>

          {/* Company Sector Dropdown */}
          <div>
            <span className="block text-gray-600 font-medium mb-1">Company Sector</span>
            <select className="w-full p-2 border rounded shadow-sm">
              <option>Edtech</option>
              <option>Fintech</option>
              <option>Healthtech</option>
              <option>E-commerce</option>
              <option>Other</option>
            </select>
            <input type="text" placeholder="If Other, please specify" className="w-full p-2 border rounded shadow-sm mt-2" />
          </div>

          {/* Primary Business Model Dropdown */}
          <div>
            <span className="block text-gray-600 font-medium mb-1">Company Primary Business Model</span>
            <select className="w-full p-2 border rounded shadow-sm">
              <option>B2C</option>
              <option>B2B</option>
              <option>B2G</option>
              <option>Other</option>
            </select>
            <input type="text" placeholder="If Other, please specify" className="w-full p-2 border rounded shadow-sm mt-2" />
          </div>

          {/* Funding Dropdowns */}
          <div>
            <span className="block text-gray-600 font-medium mb-1">Funding Raised?</span>
            <select className="w-full p-2 border rounded shadow-sm">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <span className="block text-gray-600 font-medium mb-1">Funding Rounds</span>
            <input type="number" placeholder="Funding Rounds (1,2,3,4)" className="w-full p-2 border rounded shadow-sm" />
          </div>

          <div>
            <span className="block text-gray-600 font-medium mb-1">Latest Round</span>
            <select className="w-full p-2 border rounded shadow-sm">
              <option>Pre-seed</option>
              <option>Seed</option>
              <option>Series A</option>
              <option>Series B</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded shadow-md">Register</button>
        </form>
      </div>
    </div>
  );
};






const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <RegistrationForm />
    </div>
  );
};

export default App;
