import React from "react";

const categories = [
  {
    title: "Kitchen Devices",
    image: "/cat1.jpg",
    items:
      "Microwave, Dishwasher, Microwave, Purifier, Dryer, Heater, Oven, Cookers, Coffee Machines, Cookware and Bake-ware, Small Kitchen Appliances",
  },
  {
    title: "Car Electric Products",
    image: "/cat2.png",
    items: "Automatic Car Seats, Remote Controls car systems",
  },
  {
    title: "Cell phones and mobiles",
    image: "/cat3.png",
    items:
      "Computers, Tablets, Desktops, Laptops, Monitors, Printers, Scanners, Networking Device, Storage Device, Software Devices, eReaders",
  },
  {
    title: "Computer and Printers",
    image: "/cat4.jpg",
    items:
      "Computers, Tablets, Desktops, Laptops, Monitors, Printers, Scanners, Networking Device, Storage Device, Software Devices, eReaders",
  },
  {
    title: "Cameras and DSLRs",
    image: "/cat5.png",
    items:
      "Mirrorless Cameras, DSLR Cameras, Zoom Cameras, Tough Cameras, Camera Accessories",
  },
  {
    title: "Home Devices",
    image: "/cat6.jpg",
    items:
      "Smart clocks, locks, bells, lights, Bluetooth devices, networking devices, etc..",
  },
  {
    title: "TV and Home Theatre",
    image: "/cat7.jpg",
    items:
      "TV Installation and Setup, Smart TVs, QLED, OLED, Mounting TV, TV accessories, Home cinema, projectors, graphic cards, memory",
  },
  {
    title: "Video Games",
    image: "/cat8.jpg",
    items:
      "Video games, remote controls, gaming consoles",
  },
  {
    title: "Portable Audio",
    image: "/cat9.jpg",
    items:
      "Headphones, speakers, soundbars, WIFI systems, players, audiovisual devices",
  },
];

export default function DeviceCategories() {
  return (
    <div className="min-h-screen bg-white flex justify-center py-10 px-4">
      <div className="w-[1140px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-white shadow-sm text-center flex flex-col items-center p-4 hover:shadow-md transition"
          >
            <div className="w-full h-[160px] bg-gray-100 flex items-center justify-center overflow-hidden mb-4">
              <img
                src={category.image}
                alt={category.title}
                className="object-cover max-h-full"
              />
            </div>
            <h3 className="text-[16px] font-semibold text-gray-800 mb-2">
              {category.title}
            </h3>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              {category.items}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
