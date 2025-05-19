"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt, FaNewspaper, FaMicrophone, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';

const NewsEventsPage = () => {
  const news = [
    {
      title: "Smart City Lab Wins National Innovation Award",
      date: "May 15, 2023",
      excerpt: "Our research team received the prestigious National Innovation Award for developing Pakistan's first AI-powered autonomous weeding robot.",
      category: "Achievement",
      image: "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "New Partnership with MIT Urban Technology Lab",
      date: "April 3, 2023",
      excerpt: "We're proud to announce a strategic partnership with MIT to collaborate on next-generation urban mobility solutions.",
      category: "Partnership",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title: "Our Rice Quality Analyzer Now Deployed Nationwide",
      date: "March 22, 2023",
      excerpt: "After successful pilot testing, our AI-based rice quality control system is being adopted by major export processing plants across Pakistan.",
      category: "Deployment",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const events = [
    {
      title: "Smart Cities Summit 2023",
      date: "June 15-17, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Karachi Expo Center",
      description: "Join us as we showcase our latest innovations in urban technology and participate in panel discussions about the future of smart cities.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80"
    },
    {
      title: "AI in Agriculture Workshop",
      date: "July 8, 2023",
      time: "10:00 AM - 3:00 PM",
      location: "Lahore University of Management Sciences",
      description: "Hands-on workshop demonstrating how our AI solutions are transforming precision agriculture and food production.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Tech for Good Hackathon",
      date: "August 12-14, 2023",
      time: "All Day",
      location: "Virtual Event",
      description: "48-hour hackathon focused on developing technology solutions for environmental sustainability and social impact.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-blue-900/30 z-10"></div>
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
            alt="News & Events" 
            className="w-full h-full object-cover"
            height={3000}
            width={3000}
          />
        </motion.div>
        
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
                News & Events
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Stay updated with our latest achievements and upcoming activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FaNewspaper className="text-blue-600 text-2xl" />
            <h2 className="text-3xl font-bold text-blue-600">Latest News</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Achievements</span> & <span className="text-blue-600">Updates</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Breaking news about our research, partnerships, and technological breakthroughs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  width={600}
                  height={300}
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="text-blue-500" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="text-blue-600 font-medium flex items-center gap-2"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 text-lg font-medium"
          >
            View All News
          </motion.button>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <FaCalendarAlt className="text-blue-600 text-2xl" />
              <h2 className="text-3xl font-bold text-blue-600">Upcoming Events</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Us at These <span className="text-blue-600">Events</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conferences, workshops, and hackathons where were participating
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <Image
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <div className="space-y-3 text-gray-600 mb-4">
                      <div className="flex items-center gap-3">
                        <FaCalendarAlt className="text-blue-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaRegClock className="text-blue-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-blue-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium"
                    >
                      Register Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 text-lg font-medium"
            >
              View All Events
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest news, events, and research updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default NewsEventsPage;






