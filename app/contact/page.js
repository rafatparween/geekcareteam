import React from "react";

export default function Contact() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-white text-3xl font-bold tracking-tight mb-2">
            What Our Clients Have to Say
          </h2>
          <div className="h-1 w-24 bg-white bg-opacity-50 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-500 text-4xl mb-2">"</div>
            <p className="text-gray-700 text-lg italic">
              "The great thing about geek care is that there is no deductible for replacing
              my electronics."
            </p>
            <p className="font-bold text-indigo-600 mt-4">— Marry G., WA</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-500 text-4xl mb-2">"</div>
            <p className="text-gray-700 text-lg italic">
              "Geek care is the main reason I purchase tech products online. Every time
              I've had to utilize my Geek care Protection Plans, it has been a positive
              experience."
            </p>
            <p className="font-bold text-indigo-600 mt-4">— Scott R., TX</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                ></textarea>
              </div>
              <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg">
                Submit
              </button>
            </form>
          </div>

          {/* Help Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-3 rounded-t-lg font-semibold text-lg">
              Getting Help Is Easy
            </div>
            <div className="space-y-6 mt-6">
              <p className="text-center text-gray-700 font-medium">
                Instant Services Required? Have questions? Geek Care is available 24/7
              </p>
              <p className="text-center text-indigo-600 font-bold text-xl">
                Call +1-801-880-7434
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-800">In-Store</p>
                  <p className="text-gray-600">
                    Contact the geek care team to get the remote support for your devices online.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-gray-800">In Home</p>
                  <p className="text-gray-600">
                    Get setup, tune-up, installation and diagnostic services for your products.
                  </p>
                </div>
              </div>

              <p className="text-center text-indigo-600 font-bold text-xl mt-6">
                Call +1-801-880-7434
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}