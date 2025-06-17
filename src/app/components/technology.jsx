"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaRobot, FaDatabase, FaNetworkWired, FaMobileAlt, FaArrowRight } from "react-icons/fa";

const technologies = [
  {
    title: "Artificial Intelligence",
    description: "We're crafting smart systems for agriculture automation, predictive healthcare, and more.",
    icon: <FaRobot className="text-3xl" />,
    image: "/images/AI.jpg",
    color: "bg-blue-500"
  },
  {
    title: "Internet of Things (IoT)",
    description: "Connecting the physical and digital with smart devices for seamless insights.",
    icon: <FaNetworkWired className="text-3xl" />,
    image: "/images/Wasl.png",
    color: "bg-violet-500"
  },
  {
    title: "Robotics & Automation",
    description: "Building intelligent machines for agriculture, industry, and research—customized for efficiency and precision.",
    icon: <FaMobileAlt className="text-3xl" />,
    image: "/images/jazari.png",
    color: "bg-amber-500"
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Teach machines to understand and generate human language—enabling smarter communication and automation",
    icon: <FaNetworkWired className="text-3xl" />,
    image: "/images/nlp.png",
    color: "bg-green-500"
  },
];

export default function TechnologyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      
      {/* Technologies Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-left mb-6 md:mb-0">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            >
              Our <span className="text-blue-600">Core Technologies</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-lg"
            >
              Cutting-edge solutions powering the next generation of digital transformation
            </motion.p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Explore All Tech <FaArrowRight className="ml-2" />
          </motion.button>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-500 ease-in-out bg-white border border-gray-100"
            >
              <div className="relative overflow-hidden h-48">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                  height={2000}
                  width={3000} 
                />
                <div className={`absolute top-4 right-4 ${tech.color} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center`}>
                  {tech.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition duration-300 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-5">{tech.description}</p>
                <button className="w-full py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="bg-white rounded-2xl shadow-sm p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Technology Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Quantifying our commitment to technological excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Process Automation", value: "95%", color: "text-blue-500" },
                { label: "AI Solutions", value: "40+", color: "text-emerald-500" },
                { label: "IoT Devices", value: "10K+", color: "text-violet-500" },
                { label: "Client Satisfaction", value: "100%", color: "text-amber-500" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}