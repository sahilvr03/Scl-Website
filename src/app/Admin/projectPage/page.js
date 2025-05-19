"use client";
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaRobot, FaCar, FaMicrochip, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => [
    {
      name: 'IoT Systems',
      icon: <FaMicrochip className="text-xl" />,
      description: 'Internet of Things solutions for smart environments',
      projects: [
        {
          id: 'iot-1',
          name: 'Crop Monitoring System',
          completed: true,
          details: 'Revolutionizing Agriculture with Space Technology.',
          image: '/images/im2.png',
          year: 2023,
          featured: true,
          href: '/Admin/projectPage/CropMonitoring',
        },
        {
          id: 'iot-2',
          name: 'Reverse Vending Machine',
          completed: true,
          details: 'Smart recycling system for plastic bottles with reward incentives.',
          image: '/images/rvm.jpg',
          year: 2023,
          featured: true,
          href: '/Admin/projectPage/Rvm',
        },
        {
          id: 'iot-3',
          name: 'Smart RFID Parking',
          completed: true,
          details: 'RFID-based parking system for seamless vehicle management.',
          image: '/images/rfid-parking.jpg',
          year: 2022,
          href: '#',
        },
        {
          id: 'iot-4',
          name: 'Industrial Automation through IoT',
          completed: true,
          details: 'Automating industrial processes using IoT for efficiency and scalability.',
          image: '/images/industrial-automation.jpg',
          year: 2023,
          featured: true,
          href: '#',
        },
      ],
    },
    {
      name: 'Agriculture',
      icon: <FaLeaf className="text-xl" />,
      description: 'Technologies for sustainable farming and resource management',
      projects: [
        {
          id: 'agr-1',
          name: 'Smart Irrigation System',
          completed: true,
          details: 'IoT and AI-based irrigation monitoring for optimized water usage.',
          image: '/images/smart-irrigation.jpg',
          year: 2023,
          featured: true,
          href: '/Admin/projectPage/CropMonitoring',
        },
        {
          id: 'agr-2',
          name: 'Water Resource Management',
          completed: false,
          details: 'Advanced systems for efficient water distribution and conservation.',
          image: '/images/water-management.jpg',
          year: 2024,
          href: '#',
        },
        {
          id: 'agr-3',
          name: 'Weed Removal Robot',
          completed: false,
          details: 'AI-powered robot for identifying and removing weeds to protect crops.',
          image: '/images/weedbot.jpg',
          year: 2024,
          href: '#',
        },
        {
          id: 'agr-4',
          name: 'Rice Quality Detection System',
          completed: true,
          details: 'AI system to measure rice length, width, broken percentage, and weight.',
          image: '/images/rice.jpg',
          year: 2023,
          featured: true,
          href: '#',
        },
      ],
    },
    {
      name: 'Transportation',
      icon: <FaCar className="text-xl" />,
      description: 'Smart solutions for urban mobility and safety',
      projects: [
        {
          id: 'trans-1',
          name: 'VisionDrive AI – The Future of Autonomous Mobility',
          completed: true,
          details: 'Empowering self-driving vehicles with intelligent perception, real-time decision-making, and cutting-edge road safety innovations.',
          image: '/images/AvCover.jpg',
          year: 2023,
          featured: true,
          href: '/Admin/projectPage/AvServices',
        },
        {
          id: 'trans-2',
          name: 'Intelligent Transportation',
          completed: true,
          details: 'AI-driven systems for traffic management and optimization.',
          image: '/images/intelligent-transport.jpg',
          year: 2023,
          featured: true,
          href: '#',
        },
        {
          id: 'trans-3',
          name: 'Advanced Driver Monitoring Systems (ADMS)',
          completed: true,
          details: 'Driver monitoring for fleet management and automotive safety.',
          image: '/images/adms.jpg',
          year: 2023,
          href: '#',
        },
        {
          id: 'trans-4',
          name: 'Vehicle Detection and Classification Module',
          completed: true,
          details: 'AI module for detecting and classifying vehicles in real-time.',
          image: '/images/vehicle-detection.jpg',
          year: 2023,
          href: '#',
        },
      ],
    },
    // Placeholder for additional projects from https://smartcitylab.neduet.edu.pk/projects.html
    // Please provide the full project list to add here
    // Example format:
    // {
    //   name: 'New Category',
    //   icon: <FaIcon className="text-xl" />,
    //   description: 'Category description',
    //   projects: [
    //     {
    //       id: 'unique-id',
    //       name: 'Project Name',
    //       completed: true/false,
    //       details: 'Project description',
    //       image: '/images/project-image.jpg',
    //       year: 202X,
    //       featured: true/false,
    //       href: '/path/to/details' or '#',
    //     },
    //   ],
    // },
  ], []);

  const featuredProjects = useMemo(() => {
    const projectOrder = [
      { id: 'iot-1', name: 'Crop Monitoring System' },
      { id: 'trans-1', name: 'VisionDrive AI – The Future of Autonomous Mobility' },
      { id: 'iot-2', name: 'Reverse Vending Machine' },
    ];

    return projectOrder.map(({ id }) =>
      categories
        .flatMap(category => category.projects)
        .find(project => project.id === id)
    ).filter(project => project !== undefined);
  }, [categories]);

  const activeCategoryData = useMemo(() =>
    activeCategory ? categories.find(cat => cat.name === activeCategory) : null,
    [activeCategory, categories]
  );

  const filteredProjects = useMemo(() => {
    if (!activeCategoryData) return null;
    return activeCategoryData.projects.filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.details.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activeCategoryData, searchTerm]);

  const filteredAllProjects = useMemo(() =>
    categories.map(category => ({
      ...category,
      projects: category.projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.details.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })).filter(category => category.projects.length > 0),
    [categories, searchTerm]
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-cyan-50 to-coral-50 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('/images/lab-pattern.png')] bg-repeat opacity-10"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 font-display tracking-tight text-gray-900">
            Innovate. Discover. Impact.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto">
            Explore our pioneering research projects
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium hover:bg-cyan-700 transition-colors"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            View Projects
          </motion.button>
        </motion.div>
      </section>

      {/* Filter and Search Section */}
      <section className="sticky top-0 z-20 bg-white/95 backdrop-blur-md py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <motion.button
              onClick={() => setActiveCategory(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === null
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </motion.button>
            {categories.map(category => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === category.name
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory || 'all'}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {activeCategoryData ? (
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{activeCategoryData.name}</h2>
                <p className="text-gray-600 mb-8">{activeCategoryData.description}</p>
                {filteredProjects.length === 0 ? (
                  <p className="text-gray-500 text-center py-12">No projects match your search.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-16">
                {/* Featured Projects Section */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Featured Projects</h2>
                  <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {featuredProjects.map(project => (
                      <motion.div
                        key={project.id}
                        className="flex-shrink-0 w-80"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          href={project.href}
                          className="block bg-white rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
                        >
                          <div className="relative h-40">
                            <Image
                              src={project.image}
                              alt={project.name}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                              sizes="320px"
                              priority={project.featured}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent" />
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-semibold line-clamp-1 text-gray-900">{project.name}</h3>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-2">{project.details}</p>
                            <div className="flex items-center justify-between">
                              {project.year && (
                                <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">{project.year}</span>
                              )}
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  project.completed ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                }`}
                              >
                                {project.completed ? 'Completed' : 'In Progress'}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* All Projects */}
                {filteredAllProjects.map(category => (
                  <div key={category.name}>
                    <div className="flex items-center mb-4">
                      {category.icon}
                      <h2 className="text-2xl font-bold ml-2 text-gray-900">{category.name}</h2>
                    </div>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    transition={{ duration: 0.3 }}
  >
    <Link
      href={project.href}
      className="block bg-white rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
    >
      <div className="relative h-56">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.id === 'agr-1'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold line-clamp-1 text-gray-900">{project.name}</h3>
          <div className="flex flex-col gap-1">
            {project.year && (
              <span className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">{project.year}</span>
            )}
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                project.completed ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              }`}
            >
              {project.completed ? 'Completed' : 'In Progress'}
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">{project.details}</p>
      </div>
    </Link>
  </motion.div>
);

export default ProjectsPage;