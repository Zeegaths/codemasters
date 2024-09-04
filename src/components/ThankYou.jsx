import React from 'react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden w-full max-w-full lg:max-w-7xl h-auto">
        
        {/* Sidebar */}
        <div
          className="text-white w-full md:w-1/3 p-6 space-y-6 flex-shrink-0 h-64 md:h-full"
          style={{
            backgroundImage: `url('/bg-sidebar-desktop.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="flex items-center space-x-4 pt-6 md:pt-10">
            <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <p className="text-sm uppercase">Step 1</p>
              <p className="font-bold">Your Info</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-4 md:pt-6">
            <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <p className="text-sm uppercase">Step 2</p>
              <p className="font-bold">Select Plan</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-4 md:pt-6">
            <div className="w-8 h-8 rounded-full border-2 border-white text-white flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <p className="text-sm uppercase">Step 3</p>
              <p className="font-bold">Add-Ons</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-4 md:pt-6">
            <div className="w-8 h-8 rounded-full bg-blue-200 text-blue-600 flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <p className="text-sm uppercase">Step 4</p>
              <p className="font-bold">Summary</p>
            </div>
          </div>
        </div>

        {/* Thank You Section */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 text-center">
          <img
            src="/icon-thank-you.svg"
            alt="Thank you"
            className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Thank you!</h2>
          <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base">
            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at{' '}
            <a href="mailto:support@loremgaming.com" className="text-blue-600 underline">
              support@loremgaming.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
