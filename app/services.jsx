import React from 'react';

const Services = () => {
  return (
    <div className="services px-4 py-12">
      {/* Section Title */}
      <div className="text-center mb-10">
        <button className="bg-[#210375] hover:bg-[#11013f] text-white font-bold py-2 px-10 rounded-full transition duration-300">
          خدماتنا
        </button>
        <p className="text-gray-700 font-bold text-2xl md:text-3xl mt-4">اكتشف الخدمات المقدمة لك</p>
      </div>

      {/* First Row of Cards */}
      <div className="w-full md:w-4/5 mx-auto flex flex-wrap justify-between gap-6 mb-8">
        {[
          '/images/Group 4134.png',
          '/images/Group 4135.png',
          '/images/Group 4136.png',
        ].map((src, index) => (
          <div
            key={index}
            className="flex-1 min-w-[250px] h-[300px] bg-gray-100 rounded-lg shadow-md flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Card ${index + 1}`}
              className="object-fill w-full h-full p-4"
            />
          </div>
        ))}
      </div>

      {/* Second Row of Cards */}
      <div className="w-full md:w-4/5 mx-auto flex flex-wrap justify-between gap-6">
        {[
          '/images/Group 4137.png',
          '/images/Group 4138.png',
          '/images/Group 4139.png',
        ].map((src, index) => (
          <div
            key={index}
            className="flex-1 min-w-[250px] h-[300px] bg-gray-100 rounded-lg shadow-md flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Card ${index + 1}`}
              className="object-fill w-full h-full p-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
