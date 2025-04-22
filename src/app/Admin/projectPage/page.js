"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaRobot, FaTree, FaCity, FaTractor } from 'react-icons/fa';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Smart Irrigation System');
  
  const categories = [
    { 
      name: 'Smart Irrigation System', 
      icon: <FaLeaf className="mr-3" />,
      description: 'IoT technology for efficient farming water usage',
      projects: [
        { name: 'Smart Irrigation System', completed: false },
        { name: 'Water Resource Management', completed: true },
        { name: 'Smart RFID Parking', completed: true },
        { name: 'Intelligent Hearing Assistant', completed: true }
      ]
    },
    { 
      name: 'Robotics', 
      icon: <FaRobot className="mr-3" />,
      description: 'Advanced robotic solutions for various applications',
      projects: [
        { name: 'RobotMan', completed: false },
        { name: 'Weedbot', completed: true },
        { name: 'Autonomous Vehicle', completed: true }
      ]
    },
    { 
      name: 'Environmental Sustainability', 
      icon: <FaTree className="mr-3" />,
      description: 'Eco-friendly solutions for urban environments',
      projects: [
        { name: 'Reverse Vending Machine', completed: false },
        { name: 'Green Area App', completed: false }
      ]
    },
    { 
      name: 'Smart City Management', 
      icon: <FaCity className="mr-3" />,
      description: 'Systems for efficient urban development',
      projects: [
        { name: 'Traffic Management', completed: true },
        { name: 'Citi-Pulse', completed: false }
      ]
    },
    { 
      name: 'Agriculture', 
      icon: <FaTractor className="mr-3" />,
      description: 'Technological solutions for modern farming',
      projects: []
    }
  ];

  const activeCategoryData = categories.find(cat => cat.name === activeCategory);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-800 to-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-blue-300">Innovative Projects</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Transforming ideas into reality through cutting-edge technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Side Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 px-4">Project Categories</h3>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center ${
                    activeCategory === category.name
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <div className="flex items-center mb-6">
                {activeCategoryData.icon}
                <h2 className="text-3xl font-bold text-gray-900 ml-3">
                  {activeCategory}
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                {activeCategoryData.description}
              </p>

              {activeCategory === 'Smart Irrigation System' && (
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Smart Irrigation System is the latest IoT technology which is helpful and leads to ease of farming. 
                    The engineers at the Smart City Lab has developed the IoT devices that will improve the process of 
                    Smart Irrigation. Approximately, 70% of the water withdrawn from various fresh water sources is 
                    used for agricultural activities.
                  </p>
                  <p className="text-gray-700">
                    Majority of the water is wasted due to over watering caused by inefficiencies in traditional 
                    irrigation methods and systems. Adopting the smart irrigation will be a best solution. This system 
                    monitors soil conditions and plant water use. By using this smart irrigation concept we can bring 
                    back the greenery which is going to be vanish because of the rapid urbanization. The system will 
                    help to get farmers good yield.
                  </p>
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">Projects in this category:</h3>
              
              <div className="space-y-4">
                {activeCategoryData.projects.map((project, index) => (
                  <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                      project.completed ? 'bg-green-500 text-white' : 'bg-gray-200'
                    }`}>
                      {project.completed ? '✓' : ''}
                    </div>
                    <span className={`text-lg ${project.completed ? 'text-gray-700' : 'text-gray-500'}`}>
                      {project.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;