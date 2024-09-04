import React from 'react';
import { useNavigate } from 'react-router-dom';

const Summary = ({ prevStep }) => {
  const navigate = useNavigate();

  // Mock data for selected plan and add-ons
  const selectedPlan = { name: 'Arcade', price: '$9/mo', billing: 'Monthly' };
  const addOns = [
    { name: 'Online service', price: '$1/mo' },
    { name: 'Larger storage', price: '$2/mo' },
  ];

  const goBack = () => {
    navigate('/addons'); // Ensure '/select-plan' matches your routing configuration
  };

  const finish = () => {
    navigate('/thankyou'); // Ensure '/select-plan' matches your routing configuration
  };
  // Calculate total cost
  const totalCost = addOns.reduce((total, addOn) => total + parseFloat(addOn.price.slice(1)), parseFloat(selectedPlan.price.slice(1)));

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
            <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center font-bold">3</div>
            <div>
              <p className="text-sm uppercase">Step 3</p>
              <p className="font-bold">Add-Ons</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-6">
            <div className="w-8 h-8 rounded-full bg-blue-200 text-blue-600 flex items-center justify-center font-bold">4</div>
            <div>
              <p className="text-sm uppercase">Step 4</p>
              <p className="font-bold">Summary</p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-14">
          <h2 className="text-2xl font-bold text-gray-800">Finishing up</h2>
          <p className="text-gray-600 mt-1">Double-check everything looks OK before confirming.</p>

          <div className="bg-gray-100 rounded-lg p-4 mt-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold text-gray-800">{selectedPlan.name} ({selectedPlan.billing})</h3>
                <button onClick={() => navigate('/select-plan')} className="text-blue-600 underline text-sm">Change</button>
              </div>
              <p className="font-bold text-gray-800">{selectedPlan.price}</p>
            </div>
            <hr className="mb-4" />
            {addOns.map((addOn, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <p className="text-gray-600">{addOn.name}</p>
                <p className="text-gray-800">{addOn.price}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-600">Total (per month)</p>
            <p className="font-bold text-xl text-blue-600">+${totalCost}/mo</p>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button onClick={goBack} className="text-gray-600 underline">
              Go Back
            </button>
            <button
              onClick={finish}
              // onClick={() => alert('Confirmed!')}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
