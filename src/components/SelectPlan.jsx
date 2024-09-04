import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SelectPlan = ({ prevStep }) => {
  const [billing, setBilling] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('arcade');
  const navigate = useNavigate(); // Initialize navigate

  const plans = [
    { id: 'arcade', name: 'Arcade', price: '$9/mo', icon: '/icon-arcade.svg' },
    { id: 'advanced', name: 'Advanced', price: '$12/mo', icon: '/icon-advanced.svg' },
    { id: 'pro', name: 'Pro', price: '$15/mo', icon: '/icon-pro.svg' },
  ];

  const handleBillingToggle = () => {
    setBilling(billing === 'monthly' ? 'yearly' : 'monthly');
  };
  const goBack = () => {
    navigate('/'); // Ensure '/select-plan' matches your routing configuration
  };

  const goToAddOns = () => {
    // Navigate to the Add-Ons page
    navigate('/addons'); // Ensure '/addons' matches your routing configuration
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
            <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center font-bold">1</div>
            <div>
              <p className="text-sm uppercase">Step 1</p>
              <p className="font-bold">Your Info</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-6">
            <div className="w-8 h-8 rounded-full bg-blue-200 text-blue-600 flex items-center justify-center font-bold">2</div>
            <div>
              <p className="text-sm uppercase">Step 2</p>
              <p className="font-bold">Select Plan</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-6">
            <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center font-bold">3</div>
            <div>
              <p className="text-sm uppercase">Step 3</p>
              <p className="font-bold">Add-Ons</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-6">
            <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center font-bold">4</div>
            <div>
              <p className="text-sm uppercase">Step 4</p>
              <p className="font-bold">Summary</p>
            </div>
          </div>
        </div>

        {/* Plan selection */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-14">
          <h2 className="text-2xl font-bold text-gray-800">Select Your Plan</h2>
          <p className="text-gray-600 mt-1">You have the option of monthly or yearly billing.</p>

          <div className="flex flex-wrap justify-between items-center mt-8 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`cursor-pointer border-2 rounded-lg p-6 md:p-8 lg:p-10 flex-1 flex flex-col items-center ${
                  selectedPlan === plan.id ? 'border-blue-600' : 'border-gray-300'
                }`}
              >
                <img src={plan.icon} alt={`${plan.name} icon`} className="w-16 h-16 mb-4" />
                <h3 className="font-bold mt-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.price}</p>
              </div>
            ))}
          </div>

          {/* Toggle switch */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-4">
              <span className={`font-bold ${billing === 'monthly' ? 'text-blue-600' : 'text-gray-600'}`}>Monthly</span>
              <div
                onClick={handleBillingToggle}
                className="cursor-pointer w-12 h-6 flex items-center bg-gray-200 rounded-full p-1 transition-colors duration-300 ease-in-out"
              >
                <div
                  className={`bg-blue-600 w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    billing === 'yearly' ? 'translate-x-6' : ''
                  }`}
                ></div>
              </div>
              <span className={`font-bold ${billing === 'yearly' ? 'text-blue-600' : 'text-gray-600'}`}>Yearly</span>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button onClick={goBack} className="text-blue-600 underline">
              Go Back
            </button>
            <button
              onClick={goToAddOns} // Use goToAddOns function to navigate
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
