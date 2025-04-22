import React from "react";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const Events = () => {
  const events = [
    {
      title: "Industry Symposium & AI Working Group",
      date: "September 17, 2025",
      time: "9:00 AM - 4:00 PM",
      image: "/images/meeting.jpg",
      location: "Innovation Center, Berlin"
    },
    {
      title: "Girls' Day & Zukunftstag 2025",
      date: "September 19, 2025",
      time: "10:00 AM - 3:00 PM",
      image: "/images/research.jpg",
      location: "Main Campus, Munich"
    },
    {
      title: "Tech Startup Pitch Competition",
      date: "October 5, 2025",
      time: "1:00 PM - 6:00 PM",
      image: "/images/weedbot.jpg",
      location: "Digital Hub, Hamburg"
    },
    {
      title: "Sustainability in Tech Conference",
      date: "October 12, 2025",
      time: "8:30 AM - 5:30 PM",
      image: "/images/image.png",
      location: "Convention Center, Frankfurt"
    },
  ];

  return (
    <section className="bg-white px-6 py-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="text-left mb-6 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Upcoming <span className="text-green-600">Events</span>
          </h2>
          <p className="text-gray-600 max-w-lg">
            Join our exciting events and connect with industry leaders and innovators
          </p>
        </div>
        <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-xl">
          See All Events <FaArrowRight className="ml-2" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-500 ease-in-out overflow-hidden group border border-gray-100"
          >
            <div className="relative overflow-hidden h-48">
              <Image
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                width={400}
                height={300}  
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-green-700 flex items-center">
                <FaCalendarAlt className="mr-2" /> {event.date.split(" ")[0]}
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition duration-300">
                  {event.title}
                </h4>
              </div>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {event.time}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {event.location}
              </div>
              <button className="mt-4 w-full py-2 text-sm font-medium text-green-600 border border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition duration-300">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;