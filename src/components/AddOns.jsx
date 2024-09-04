import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const AddOns = () => {
  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineService: true,
    largerStorage: true,
    customizableProfile: false,
  });

  const navigate = useNavigate(); // Assign navigate function

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prev) => ({
      ...prev,
      [addOn]: !prev[addOn],
    }));
  };

  const addOns = [
    { id: 'onlineService', name: 'Online service', description: 'Access to multiplayer games', price: '+$1/mo' },
    { id: 'largerStorage', name: 'Larger storage', description: 'Extra 1TB of cloud save', price: '+$2/mo' },
    { id: 'customizableProfile', name: 'Customizable Profile', description: 'Custom theme on your profile', price: '+$2/mo' },
  ];

  const goToSummary = () => {
    navigate('/summary'); // Ensure '/summary' matches your routing configuration
  };

  const goBack = () => {
    navigate('/select-plan'); // Ensure '/select-plan' matches your routing configuration
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
            <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center font-bold">2</div>
            <div>
              <p className="text-sm uppercase">Step 2</p>
              <p className="font-bold">Select Plan</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-6">
            <div className="w-8 h-8 rounded-full bg-blue-200 text-blue-600 flex items-center justify-center font-bold">3</div>
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

        {/* Add-Ons Selection */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-gray-800">Pick add-ons</h2>
          <p className="text-gray-600 mt-1">Add-ons help enhance your gaming experience.</p>

          <div className="mt-6 space-y-4">
            {addOns.map((addOn) => (
              <div
                key={addOn.id}
                className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer ${
                  selectedAddOns[addOn.id] ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                }`}
                onClick={() => toggleAddOn(addOn.id)}
              >
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={selectedAddOns[addOn.id]}
                    onChange={() => toggleAddOn(addOn.id)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{addOn.name}</h3>
                    <p className="text-sm text-gray-600">{addOn.description}</p>
                  </div>
                </div>
                <p className="font-bold text-blue-600">{addOn.price}</p>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button onClick={goBack} className="text-blue-600 underline">
              Go Back
            </button>
            <button
              onClick={goToSummary}
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

export default AddOns;
