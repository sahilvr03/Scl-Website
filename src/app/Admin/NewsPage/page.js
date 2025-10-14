"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt, FaNewspaper } from 'react-icons/fa';

const NewsEventsPage = () => {
  const news = [
    {
      title: "NCAI–NEDUET Smart City Lab Participates in URAAN AI Techathon 1.0 Launch",
      date: "2023",
      excerpt: "The Smart City Lab, NCAI–NEDUET, was invited to the launch ceremony of URAAN AI Techathon 1.0 under the URAAN Pakistan E-Pakistan Mission.",
      description: "The event provided an excellent platform to showcase our innovative research projects and technological solutions. During the visit to NCAI at NUST, our team explored the Intelligent Robotics Lab, AI Experience Centre, and the National Science & Technology Park. We engaged in constructive discussions with researchers on potential collaborations, reflecting our lab’s commitment to innovation and partnerships.",
      highlights: [
        "Showcased AI-driven smart city applications",
        "Explored Intelligent Robotics Lab and NSTP",
        "Discussions for future collaborations"
      ],
      category: "Launch",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "NCAI–NEDUET Smart City Lab Joins Pakistan’s Historic Space Mission",
      date: "2028 (Planned)",
      excerpt: "We have been awarded a development project by SUPARCO’s RESOLVE South, contributing to the Chang’e-8 Lunar Mission.",
      description: "This collaboration represents a monumental step in Pakistan’s journey into space exploration, showcasing the nation’s growing research capabilities. The Smart City Lab team will design and deliver innovative systems to support lunar surface operations and scientific research.",
      highlights: [
        "Awarded SUPARCO RESOLVE South project",
        "Contributing to Chang’e-8 Lunar Mission",
        "Historic milestone for Pakistan"
      ],
      category: "Space Mission",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Exciting Collaboration with TPL Trakker Ltd",
      date: "2023",
      excerpt: "Partnered with TPL Trakker Ltd to develop an AI-powered Cattle Health Monitoring and Milk Production System.",
      description: "This system leverages computer vision to track and enhance cattle health and productivity in real time. It marks a major step toward integrating smart agriculture and sustainable food systems.",
      highlights: [
        "AI-powered livestock monitoring",
        "Improved cattle health and productivity",
        "Supporting sustainable agriculture"
      ],
      category: "Collaboration",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Revolutionizing Farming with AI and Remote Sensing",
      date: "2023",
      excerpt: "Our Crop Monitoring Platform is transforming agriculture in Sindh with real-time data and actionable insights.",
      description: "The platform provided clear evidence of crop progress, near harvest indicators, and weather updates, empowering farmers with data-driven decision-making.",
      highlights: [
        "Crop health tracking with real-time data",
        "Monitoring wheat and seasonal vegetables",
        "Weather updates for better planning"
      ],
      category: "AgriTech",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
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
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80" 
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
              Explore our latest achievements, collaborations, and innovations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive News Section */}
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
            Key <span className="text-blue-600">Highlights</span> & <span className="text-blue-600">Impact</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See detailed stories with summaries, highlights, and full descriptions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  width={600}
                  height={400}
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full text-sm font-medium shadow">
                  {item.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <FaCalendarAlt className="text-blue-500" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>

                {/* Highlights */}
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Full Description */}
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsEventsPage;