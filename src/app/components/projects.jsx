import Head from 'next/head';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Prompted Redaktion",
      description: "Wie gehen deutsche Medienunternehmen mit KI um und was kann die Zukunft bringen?",
      date: "April 10, 2025",
      image: "/images/meeting.jpg",
      category: "Media & AI",
      color: "bg-green-"
    },
    {
      title: "Sustainable Data Centers",
      description: "Making AI models up to 90% more energy-efficient through innovative cooling and architecture.",
      date: "March 19, 2025",
      image: "/images/meeting.jpg",
      category: "Green Tech",
      color: "bg-white"
    },
    {
      title: "AI-Supported Personalized Medicine",
      description: "The AI4Not1 research project combines clinical research with individual patient care.",
      date: "March 17, 2025",
      image: "/images/weedbot.jpg",
      category: "Healthcare",
      color: "bg-white"
    },
    {
      title: "Agricultural Robotics",
      description: "Autonomous farming solutions that increase yield while reducing environmental impact.",
      date: "February 28, 2025",
      image: "/images/research.jpg",
      category: "AgriTech",
      color: "bg-white"
    }
  ];

  return (
    <>
      <Head>
        <title>Our Projects | Innovative AI Solutions</title>
        <meta name="description" content="Explore our latest projects in AI, media, and sustainable technology" />
      </Head>

      <main className="bg-white">
        {/* Hero Section
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Our <span className="text-amber-300">Innovative</span> Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl text-blue-100 max-w-2xl mx-auto"
            >
              Combining cutting-edge technology with practical applications to solve real-world challenges
            </motion.p>
          </div>
        </section> */}

        {/* Projects Grid */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="text-left mb-6 md:mb-0">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
              >
                Latest <span className="text-blue-500">Initiatives</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-600 max-w-lg"
              >
                Explore our portfolio of transformative projects across industries
              </motion.p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects <FaArrowRight className="ml-2" />
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
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-500 ease-in-out ${project.color === 'bg-white' ? 'border border-gray-100' : 'text-white'} h-full flex flex-col`}
              >
                {project.color === 'bg-white' ? (
                  <>
                    <div className="relative overflow-hidden h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        height={400}
                        width={400}
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <span className="text-xs font-semibold text-blue-600 mb-2">{project.category}</span>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition duration-300 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-5">{project.description}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-gray-500 text-sm">
                          <FaCalendarAlt className="mr-2" /> {project.date}
                        </div>
                        <button className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                          Details →
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-6 flex-grow flex flex-col relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-rose-500 opacity-100 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                    <span className="text-xs font-semibold text-white/80 mb-2 relative z-10">{project.category}</span>
                    <h3 className="text-xl font-bold mb-3 relative z-10">{project.title}</h3>
                    <p className="text-sm leading-relaxed mb-6 relative z-10">{project.description}</p>
                    <div className="flex items-center justify-between mt-auto relative z-10">
                      <div className="flex items-center text-white/80 text-sm">
                        <FaCalendarAlt className="mr-2" /> {project.date}
                      </div>
                      <button className="text-sm bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                        Explore
                      </button>
                    </div>
                  </div>
                )}
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
                  Project Impact Metrics
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Measuring the success of our innovative solutions
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Projects Completed", value: "48+", color: "text-blue-500" },
                  { label: "Client Partners", value: "32", color: "text-emerald-500" },
                  { label: "ROI Improvement", value: "75%", color: "text-amber-500" },
                  { label: "Innovation Awards", value: "12", color: "text-violet-500" }
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
      </main>
    </>
  );
}