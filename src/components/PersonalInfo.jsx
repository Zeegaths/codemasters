import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    phone: '',
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate the phone field
    if (name === 'phone' && value.trim() === '') {
      setErrors((prev) => ({ ...prev, phone: 'This field is required' }));
    } else {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data before submission
    if (!formData.phone) {
      setErrors((prev) => ({ ...prev, phone: 'This field is required' }));
      return;
    }

    // Form submission logic here (e.g., send to backend)
    console.log('Form Data Submitted:', formData);

    // Navigate to the Select Plan page
    navigate('/select-plan'); // Ensure '/select-plan' matches the route path in your routing configuration
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden w-full max-w-full lg:max-w-7xl h-auto md:h-auto lg:h-auto">
        {/* Sidebar */}
        <div className="text-white w-full md:w-1/3 p-6 space-y-6 flex-shrink-0" style={{
          backgroundImage: `url('/bg-sidebar-desktop.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="flex items-center space-x-4 pt-10">
            <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">1</div>
            <div>
              <p className="text-sm uppercase">Step 1</p>
              <p className="font-bold">Your Info</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center font-bold">2</div>
            <div>
              <p className="text-sm uppercase">Step 2</p>
              <p className="font-bold">Select Plan</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center font-bold">3</div>
            <div>
              <p className="text-sm uppercase">Step 3</p>
              <p className="font-bold">Add-Ons</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center font-bold">4</div>
            <div>
              <p className="text-sm uppercase">Step 4</p>
              <p className="font-bold">Summary</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-16">
          <h2 className="text-2xl font-bold text-gray-800">Personal Info</h2>
          <p className="text-gray-600 mt-1">Please provide your name, email address, and phone number.</p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full h-8 sm:h-10 md:h-12 lg:h-12 rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full h-8 sm:h-10 md:h-12 lg:h-12 rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 flex justify-between">
                Phone Number {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full h-8 sm:h-10 md:h-12 lg:h-12 rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white`}
                placeholder="e.g. +1 234 567 890"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full md:w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors ml-auto block"
            >
              Next Step
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
