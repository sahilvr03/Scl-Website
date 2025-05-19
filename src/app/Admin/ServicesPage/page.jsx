"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMicrochip, FaEye, FaRobot, FaMobileAlt, FaCube, FaGlobe, FaLeaf, FaHeartbeat, FaTractor, FaHospital, FaCar, FaGraduationCap, FaIndustry, FaCity, FaTree, FaShoppingCart } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaMicrochip className="text-4xl" />,
      title: "IoT Services",
      description: "Cutting-edge IoT solutions that optimize operations and drive digital transformation",
      features: [
        "Real-time Water Tank Monitoring",
        "Gas Pressure Monitoring",
        "Smart Generator Monitoring",
        "Soil Probes for Agriculture",
        "IoT-based Smart Farming Decision Support"
      ],
      image: "/images/Iot.jpg",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaEye className="text-4xl" />,
      title: "AI & Computer Vision",
      description: "Empowering businesses with intelligent vision systems and machine learning",
      features: [
        "Rice Quality Analyzer for export control",
        "Advanced Driver Monitoring Systems",
        "AI-based Precise Robotic Weeding",
        "Lightweight CNNs for Autonomous Vehicles"
      ],
      image: "/images/macro.jpg",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "Robotics",
      description: "Advanced, customized robotics solutions across industries",
      features: [
        "3D Printed Humanoid Robot (JAZARI)",
        "Mobile agricultural robots",
        "Automated weed removal systems",
        "Cost-effective autonomous solutions"
      ],
      image: "/images/robotic.jpg",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Augmented Reality",
      description: "Immersive AR experiences for education and industry",
      features: [
        "AR-based Circuit Simulation",
        "Interactive training systems",
        "Maintenance assistance solutions",
        "Product visualization"
      ],
      image: "/images/AR.jpg",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaCube className="text-4xl" />,
      title: "3D Printing",
      description: "State-of-the-art additive manufacturing solutions",
      features: [
        "Rapid Prototyping",
        "Functional parts manufacturing",
        "Custom creative projects",
        "Industrial-grade materials"
      ],
      image: "/images/3d.jpg",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      title: "Web & GIS",
      description: "Digital solutions for agriculture and environment",
      features: [
        "Satellite-based Crop Monitoring",
        "Tree Tracker App",
        "Connect2Collab Portal",
        "Counterfeit Detection Apps"
      ],
      image: "/images/env.jpg",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Environment Sustainability",
      description: "Smart solutions for greener cities",
      features: [
        "Reverse Vending Machine (RVM)",
        "Plastic recycling with rewards",
        "Environmental monitoring apps",
        "Urban sustainability solutions"
      ],
      image: "/images/12.jpg",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <FaHeartbeat className="text-4xl" />,
      title: "AI in Healthcare",
      description: "Pioneering medical AI solutions",
      features: [
        "Wireless EEG Headsets",
        "Seizure Detection Systems",
        "Digital Stethoscopes",
        "ML for Infection Risk & Diagnosis"
      ],
      image: "/images/md.jpg",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const industries = [
    { name: "Agriculture", icon: <FaTractor className="text-4xl" />, count: "12+ projects" },
    { name: "Healthcare", icon: <FaHospital className="text-4xl" />, count: "8+ solutions" },
    { name: "Automotive", icon: <FaCar className="text-4xl" />, count: "5+ systems" },
    { name: "Education", icon: <FaGraduationCap className="text-4xl" />, count: "7+ applications" },
    { name: "Manufacturing", icon: <FaIndustry className="text-4xl" />, count: "10+ implementations" },
    { name: "Smart Cities", icon: <FaCity className="text-4xl" />, count: "15+ deployments" },
    { name: "Environmental", icon: <FaTree className="text-4xl" />, count: "6+ initiatives" },
    { name: "Retail", icon: <FaShoppingCart className="text-4xl" />, count: "4+ solutions" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-blue-900/30 z-10"></div>
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/hero1.jpg"
            alt="Our Services"
            className="w-full h-full object-cover"
            fill
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300">
                Shaping the Future
              </span>
              <br />
              <span className="text-blue-100">
                with Intelligent Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Comprehensive technology services driving innovation, efficiency, and excellence across global industries.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#services"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                Explore Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Industries with <span className="text-blue-600">Smart Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end solutions from concept to deployment
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white shadow-lg mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-3 flex-grow">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className={`bg-gradient-to-br ${service.color} w-2 h-2 rounded-full mt-2 mr-3`}></div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-6 w-full py-3 bg-gradient-to-br ${service.color} text-white rounded-lg font-medium`}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serving <span className="text-blue-600">Multiple Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions are transforming sectors across the economy
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center h-48"
              >
                <div className="text-4xl mb-4 text-blue-600">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{industry.name}</h3>
                <p className="text-gray-500 text-center">{industry.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

 
    </div>
  );
};

export default ServicesPage;