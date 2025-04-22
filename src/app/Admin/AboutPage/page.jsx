"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCity, FaUsers, FaHandshake, FaChartLine, FaChevronDown } from 'react-icons/fa';

const AboutPage = () => {
  const timeline = [
    { year: "2018", event: "Inception of the Smart City Lab as a research unit within NCAI" },
    { year: "2019", event: "Expansion to urban mobility and smart infrastructure research" },
    { year: "2021", event: "Established international research partnerships" },
    { year: "2023", event: "Launch of VisionDrive AI and SWAT Phase-I projects" }
  ];

  const visionPoints = [
    {
      icon: <FaCity className="text-4xl" />,
      title: "Intelligent Cities",
      description: "Develop AI systems that make urban spaces adaptive, efficient, and citizen-centric",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Bridging Gaps",
      description: "Connect academic research with practical smart city implementations",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Collaborative Ecosystem",
      description: "Bring together government, industry, and academia for innovation",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Future Leaders",
      description: "Train the next generation of AI and smart city experts",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-blue-900/30 z-10"></div>
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image 
            src="/images/hero1.jpg" 
            alt="Smart City" 
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
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
                Smart City Lab
              </span><br />
              <span className="font-light">at NCAI</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Pioneering AI research for the urban technologies of tomorrow
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium"
              >
                Explore Our Research
              </motion.button>
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-300 text-lg font-medium"
              >
                Meet Our Team
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <p className="text-sm text-white/80 mb-2">Scroll to explore</p>
              <FaChevronDown className="text-xl text-white animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lab Overview Section */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl opacity-20 blur-lg"></div>
            <Image 
              src="/images/meeting.jpg" 
              alt="NCAI Research Team" 
              className="relative rounded-2xl shadow-2xl w-full h-auto z-10"
              width={3000}
              height={3000}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Our Lab
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Shaping the future of <span className="text-blue-600">urban intelligence</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                The Smart City Lab at NCAI is at the forefront of AI research for urban technologies.
              </p>
              <p>
                Established as a specialized research initiative under the National Center for Artificial Intelligence, our lab focuses on developing innovative solutions for modern urban challenges through the application of cutting-edge AI technologies.
              </p>
              <p>
                Our interdisciplinary team brings together experts from artificial intelligence, data science, urban planning, and engineering to create integrated approaches to smart city development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History & Vision Section */}
      <section className="py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Journey</span> & <span className="text-blue-600">Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to the ambitious future we're building
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* History Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-12 pb-6 border-b border-gray-100">
                Our History
              </h3>
              <div className="space-y-10 relative">
                <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>
                
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-20 group">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="absolute left-0 w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg group-hover:bg-blue-700 transition-all"
                    >
                      {item.year}
                    </motion.div>
                    <div className="pt-4 pl-6">
                      <p className="text-lg font-medium text-gray-700">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Vision Section */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h3>
                <p className="text-xl text-gray-600">
                  We envision cities that are intelligent, responsive, and sustainable, where technology enhances the quality of life for all citizens while optimizing resource utilization.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {visionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className={`bg-gradient-to-br ${point.color} p-8 rounded-2xl shadow-lg text-white`}
                  >
                    <div className="mb-6 bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                      {point.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-3">{point.title}</h4>
                    <p className="text-white/90">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Interdisciplinary</span> Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experts from diverse fields working together to build smarter cities
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              name: "AI Research", 
              count: "12", 
              color: "bg-blue-600", 
              description: "Machine learning experts developing urban AI solutions" 
            },
            { 
              name: "Data Science", 
              count: "8", 
              color: "bg-green-600", 
              description: "Transforming urban data into actionable insights" 
            },
            { 
              name: "Urban Planning", 
              count: "5", 
              color: "bg-amber-600", 
              description: "Ensuring technology serves community needs" 
            },
            { 
              name: "Engineering", 
              count: "7", 
              color: "bg-violet-600", 
              description: "Building the physical-digital infrastructure" 
            },
          ].map((team, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`${team.color} p-8 rounded-2xl shadow-xl text-white overflow-hidden relative group`}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold mb-4">{team.count}</div>
                <h3 className="text-2xl font-bold mb-4">{team.name}</h3>
                <p className="text-white/90">{team.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Affiliation Section */}
<section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our <span className="text-blue-600">Affiliation</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Proudly affiliated with leading institutions in research and education
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-16">
      {/* NCAI Affiliation */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-50 p-10 rounded-3xl"
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          National Center for Artificial Intelligence
        </h3>
        <div className="space-y-6 text-gray-600">
          <p>
            The Smart City Lab is a core research unit under the National Center for 
            Artificial Intelligence (NCAI), Pakistan's premier AI research and 
            development institution. As part of NCAI, we benefit from a nationwide 
            network of researchers, resources, and collaborations that enhance our 
            research capabilities.
          </p>
          <p>
            Our lab is physically located at MED University of Engineering & Technology, 
            one of Pakistan's oldest and most respected engineering institutions. This 
            strategic placement allows us to leverage the university's strong engineering 
            foundation while focusing on advanced AI applications for urban environments.
          </p>
        </div>
      </motion.div>

      {/* Collaborations */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Collaborations & Partnerships
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Working together with leading organizations to advance smart city research and implementation
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Academic Partners
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>Massachusetts Institute of Technology (MIT)</li>
              <li>Stanford University</li>
              <li>LUMS School of Science & Engineering</li>
              <li>NUST School of Electrical Engineering & Computer Science</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Industry Collaborators
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>IBM Research</li>
              <li>Microsoft Research</li>
              <li>Siemens Smart Infrastructure</li>
              <li>Systems Limited</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Government Partners
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>Ministry of Science & Technology</li>
              <li>Karachi Metropolitan Corporation</li>
              <li>Punjab Information Technology Board</li>
              <li>Higher Education Commission of Pakistan</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
};

export default AboutPage;