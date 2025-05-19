"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFileAlt, FaDownload, FaQuoteLeft, FaUniversity } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";

const PublicationsPage = () => {
  const publications = [
    {
      title: "An Experimental Comparison of IoT-Based and Traditional Irrigation Scheduling on a Flood-Irrigated Subtropical Lemon Farm",
      authors: "Unknown Authors",
      journal: "Sensors",
      year: 2021,
      link: "https://www.mdpi.com/1424-8220/21/12/4175",
      image: "/images/Iot.jpg",
      category: "Agriculture",
    },
    {
      title: "Rapid Testing System for Rice Quality Control through Comprehensive Feature and Kernel-Type Detection",
      authors: "Unknown Authors",
      journal: "Foods",
      year: 2022,
      link: "https://www.mdpi.com/2304-8158/11/18/2723",
      image: "/images/rice.jpg",
      category: "Food Technology",
    },
    {
      title: "A lightweight Convolutional Neural Network for End to End Autonomous Driving",
      authors: "Unknown Authors",
      journal: "SSRN",
      year: 2022,
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4055035",
      image: "/images/image.png",
      category: "Autonomous Vehicles",
    },
    {
      title: "Autonomous vehicle navigation using high-definition maps through CARLA-ROS simulator bridge",
      authors: "Unknown Authors",
      journal: "Journal of Physics: Conference Series",
      year: 2022,
      link: "https://ui.adsabs.harvard.edu/abs/2022JPhCS2330a2016F/abstract",
      image: "/images/weed.jpg",
      category: "Robotics",
    },
    {
      title: "Formation of a Lightweight, Deep Learning-Based Weed Detection System for a Commercial Autonomous Laser Weeding Robot",
      authors: "Unknown Authors",
      journal: "Applied Sciences",
      year: 2023,
      link: "https://www.mdpi.com/2076-3417/13/6/3997",
      image: "/images/weed.jpg",
      category: "Agriculture",
    },
    {
      title: "Development of Cost-Effective and Easily Replicable Robust Weeding Machine-Premiering Precision Agriculture in Pakistan",
      authors: "Unknown Authors",
      journal: "Machines",
      year: 2023,
      link: "https://www.mdpi.com/2075-1702/11/2/287",
      image: "/images/weedbot.jpg",
      category: "Agricultural Engineering",
    },
    {
      title: "Plastic Waste Management through the Development of a Low Cost and Light Weight Deep Learning Based Reverse Vending Machine",
      authors: "Unknown Authors",
      journal: "Recycling",
      year: 2022,
      link: "https://www.mdpi.com/2313-4321/7/5/70",
      image: "/images/rvm.jpg",
      category: "Environmental Technology",
    },
    {
      title: "Machine Learning Model for Assessment of Risk Factors and Postoperative Day for Superficial vs Deep/Organ-Space Surgical Site Infections",
      authors: "Unknown Authors",
      journal: "Surgical Innovation",
      year: 2023,
      link: "https://journals.sagepub.com/doi/abs/10.1177/15533506231170933",
      image: "/images/md.jpg",
      category: "Medical AI",
    },
    {
      title: "Machine learning to differentiate cerebral tuberculosis from brain tumors using neuroimaging features",
      authors: "Unknown Authors",
      journal: "ResearchGate",
      year: 2023,
      link: "https://www.researchgate.net/publication/367787286_Machine_learning_to_differentiate_cerebral_tuberculosis_from_brain_tumors_using_neuroimaging_features",
      image: "/images/macro.jpg",
      category: "Medical Imaging",
    },
    {
      title: "Machine Learning and Sampling Techniques to Enhance Radiological Diagnosis of Cerebral Tuberculosis",
      authors: "Unknown Authors",
      journal: "Unknown Journal",
      year: 2023,
      link: "https://www.researchgate.net/publication/367787286_Machine_learning_to_differentiate_cerebral_tuberculosis_from_brain_tumors_using_neuroimaging_features",
      image: "/images/robotic.jpg",
      category: "Medical Imaging",
    },
  ];

  // Dynamic categories based on publications
  const categories = [
    { name: "All", count: publications.length },
    {
      name: "Agriculture",
      count: publications.filter((p) => p.category === "Agriculture").length,
    },
    {
      name: "Food Technology",
      count: publications.filter((p) => p.category === "Food Technology").length,
    },
    {
      name: "Autonomous Vehicles",
      count: publications.filter((p) => p.category === "Autonomous Vehicles").length,
    },
    {
      name: "Robotics",
      count: publications.filter((p) => p.category === "Robotics").length,
    },
    {
      name: "Agricultural Engineering",
      count: publications.filter((p) => p.category === "Agricultural Engineering").length,
    },
    {
      name: "Environmental Technology",
      count: publications.filter((p) => p.category === "Environmental Technology").length,
    },
    {
      name: "Medical AI",
      count: publications.filter((p) => p.category === "Medical AI").length,
    },
    {
      name: "Medical Imaging",
      count: publications.filter((p) => p.category === "Medical Imaging").length,
    },
  ];

  // State for selected category and displayed publications
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedPublications, setDisplayedPublications] = useState(publications.slice(0, 6));

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    const filtered =
      category === "All"
        ? publications
        : publications.filter((pub) => pub.category === category);
    setDisplayedPublications(filtered.slice(0, 6));
  };

  // Handle load more
  const handleLoadMore = () => {
    const currentLength = displayedPublications.length;
    const filteredPublications =
      selectedCategory === "All"
        ? publications
        : publications.filter((pub) => pub.category === selectedCategory);
    setDisplayedPublications(
      filteredPublications.slice(0, currentLength + 6)
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
     <section className="relative h-screen min-h-[800px] overflow-hidden">
  {/* Background with parallax effect */}
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/50 to-transparent z-10"></div>
  <motion.div 
    className="absolute inset-0 w-full h-full"
    initial={{ scale: 1.3 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
    style={{
      willChange: 'transform',
      backgroundImage: 'url(/images/publication.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  >
    {/* Animated floating elements */}
    <motion.div 
      className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm"
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div 
      className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm"
      animate={{
        y: [0, 40, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.div>

  <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-20">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center max-w-4xl mx-auto"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tighter">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 relative">
          Research Publications
          {/* Animated underline */}
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        </span>
      </h1>
      
      <motion.p 
        className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Cutting-edge research contributing to advancements in AI and smart technologies
      </motion.p>
      
      {/* Interactive floating button */}
      <motion.div
        className="mt-8"
        whileHover={{ 
          y: -5,
          transition: { 
            type: "spring",
            stiffness: 300,
            damping: 10 
          } 
        }}
      >
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110 flex items-center mx-auto group">
          Explore Publications
          <motion.span 
            className="ml-2 inline-block group-hover:translate-x-2 transition-transform duration-300"
          >
            →
          </motion.span>
        </button>
      </motion.div>
    </motion.div>

    {/* Floating papers animation in background */}
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/80 rounded-md shadow-lg"
          style={{
            width: `${Math.random() * 60 + 40}px`,
            height: `${Math.random() * 80 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 60 - 30}deg`
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ 
            y: [0, Math.random() * 100 - 50],
            opacity: [0.3, 0.8, 0.3],
            x: [0, Math.random() * 50 - 25]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  </div>

  {/* Animated scroll indicator */}
  <motion.div 
    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
    animate={{ 
      y: [0, 15, 0],
      opacity: [0.6, 1, 0.6]
    }}
    transition={{ 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <div className="flex flex-col items-center">
      <span className="text-blue-200 text-sm mb-2">Scroll down</span>
      <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
        <motion.div 
          className="w-1 h-2 bg-blue-300 rounded-full mt-1"
          animate={{ y: [0, 4, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  </motion.div>
</section>
      {/* Publications Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Research Output</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peer-reviewed publications in top-tier journals and conferences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryFilter(category.name)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.name
                  ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPublications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  className="object-cover w-full h-full"
                  width={600}
                  height={300}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-xs font-medium px-3 py-1 bg-blue-600 text-white rounded-full">
                    {pub.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <FaUniversity className="text-blue-500" />
                  <span>{pub.journal}</span>
                  <span>•</span>
                  <span>{pub.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {pub.authors}
                </p>
                <div className="flex justify-between items-center">
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium text-sm flex items-center gap-2"
                  >
                    Read Publication <FiExternalLink />
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-500 hover:text-blue-600 p-2 rounded-full"
                    onClick={() => window.open(pub.link, "_blank")}
                  >
                    <FaDownload />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {displayedPublications.length < (selectedCategory === "All" ? publications : publications.filter((pub) => pub.category === selectedCategory)).length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLoadMore}
              className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 text-lg font-medium"
            >
              Load More Publications
            </motion.button>
          </motion.div>
        )}
      </section>

      {/* Research Impact Section */}
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
              Research <span className="text-blue-600">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work is making a difference in academia and industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">50+</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Citations</h3>
              <p className="text-gray-600">
                Our publications have been cited in top academic journals worldwide
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">12</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Industry Applications</h3>
              <p className="text-gray-600">
                Research findings implemented in commercial products and services
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">5</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Awards</h3>
              <p className="text-gray-600">
                Recognized for research excellence and innovation impact
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What <span className="text-blue-600">Experts Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feedback from peer researchers and industry professionals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <FaQuoteLeft className="text-4xl text-blue-600 opacity-20 mb-4" />
            <p className="text-xl text-gray-700 mb-6">
              "The work on autonomous vehicle navigation published by the Smart City Lab represents a significant leap forward in making self-driving technology more accessible in developing urban contexts."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 overflow-hidden">
                <Image
                  src="/images/team/expert1.jpg"
                  alt="Dr. Sarah Chen"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Dr. Sarah Chen</h4>
                <p className="text-sm text-gray-600">Robotics Researcher, MIT</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <FaQuoteLeft className="text-4xl text-blue-600 opacity-20 mb-4" />
            <p className="text-xl text-gray-700 mb-6">
              "Their innovative approach to precision agriculture has directly influenced our product development pipeline, resulting in more efficient farming solutions for emerging markets."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 overflow-hidden">
                <Image
                  src="/images/team/expert2.jpg"
                  alt="James Rodriguez"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">James Rodriguez</h4>
                <p className="text-sm text-gray-600">CTO, AgriTech Solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default PublicationsPage;