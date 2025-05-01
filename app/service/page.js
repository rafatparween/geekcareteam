import React from "react";

export default function GeekCare() {
  const services = [
    { 
      icon: "/camera.png", 
      name: "Camera Repair", 
      desc: "Professional DSLR & mirrorless camera servicing" 
    },
    { 
      icon: "/car.png", 
      name: "Car Tech", 
      desc: "Diagnostics & entertainment system setup" 
    },
    { 
      icon: "/phone.png", 
      name: "Mobile Care", 
      desc: "Screen replacement & software solutions" 
    },
    { 
      icon: "/game.png", 
      name: "Gaming Gear", 
      desc: "Console repair & peripheral setup" 
    },
    { 
      icon: "/tv.png", 
      name: "Home Theater", 
      desc: "Installation & calibration services" 
    },
    { 
      icon: "/computer.png", 
      name: "Computer Help", 
      desc: "Hardware upgrades & virus removal" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-full">
          {/* Left Side - Services */}
          <div className="md:col-span-2 p-8 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-2xl font-bold p-5 rounded-xl mb-8 shadow-lg">
              <h1>Premium Tech Care Services</h1>
              <p className="text-sm font-normal opacity-90 mt-2">
                Certified experts for all your digital devices
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 flex-grow">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 transform hover:-translate-y-1.5 flex flex-col items-center"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-24 h-24 rounded-2xl flex items-center justify-center mb-4 p-4">
                    <img 
                      src={service.icon} 
                      alt={service.name} 
                      className="w-[100px] h-[100px] object-contain" 
                    />
                  </div>
                  <h3 className="text-gray-800 font-bold text-center text-lg">{service.name}</h3>
                  <p className="text-sm text-gray-600 text-center mt-2">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* Additional Content */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-blue-800">Fast Track Service</h3>
                  <p className="text-sm text-blue-600">Get priority service with our express 60-minute response guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Help Info */}
          <div className="bg-gradient-to-b from-indigo-50 to-blue-100 p-8 border-l border-indigo-200 flex flex-col">
            <div className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-2xl font-bold p-5 rounded-xl mb-8 shadow-lg">
              <h2>Instant Support</h2>
              <p className="text-sm font-normal opacity-90 mt-2">We resolve tech headaches fast</p>
            </div>
            
            <div className="space-y-6 flex-grow">
              {/* Call to Action */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">24/7 Support Line</h3>
                </div>
                <p className="text-gray-600 mb-5">
                  Speak directly with our certified technicians anytime - day or night.
                </p>
                <a
                  href="tel:+1-801-880-7434"
                  className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 text-lg"
                >
                  Call +1-801-880-7434
                </a>
              </div>

              {/* Service Options */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-100">
                <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Service Options
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">In-Store Service</h4>
                      <p className="text-sm text-gray-600">Full diagnostics at our state-of-the-art service centers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">At-Home Service</h4>
                      <p className="text-sm text-gray-600">We come to you for installations and repairs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Remote Support</h4>
                      <p className="text-sm text-gray-600">Instant help through secure screen sharing</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Our Guarantee
                </h3>
                <p className="text-sm opacity-90 mb-3">
                  100% satisfaction or we'll redo the service at no cost
                </p>
                <div className="flex items-center text-xs opacity-80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  90-day warranty on all repairs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}