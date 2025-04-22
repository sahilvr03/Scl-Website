import { FaFlask, FaHandshake, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Mission = () => {
  const stats = [
    { value: "30+", label: "Projects", icon: <FaFlask className="text-blue-500" /> },
    { value: "20+", label: "Collaborations", icon: <FaHandshake className="text-green-500" /> },
    { value: "99%", label: "Accuracy AI Systems", icon: <FaChartLine className="text-violet-500" /> },
    
  ];

  const missionPoints = [
    {
      title: "Research Excellence",
      description: "Conducting cutting-edge research to advance smart city technologies and applications.",
      icon: <FaFlask className="text-3xl text-blue-600" />
    },
    {
      title: "Collaborative Innovation",
      description: "Partnering with industry, government, and academia to develop practical smart urban solutions.",
      icon: <FaHandshake className="text-3xl text-green-600" />
    },
    {
      title: "Talent Development",
      description: "Nurturing the next generation of researchers and engineers specialized in smart city technologies.",
      icon: <FaUserGraduate className="text-3xl text-violet-600" />
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-blue-600">Mission</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Advancing urban intelligence through research and innovation
          </motion.p>
        </div>

        {/* Mission Highlights */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-white rounded-full shadow-md">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Stats */}
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-gradient-to-br from-yellow-500 to-rose-500 rounded-2xl p-8 md:p-12 shadow-xl"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center space-y-3"
      >
        <div className="p-4 bg-white/20 rounded-full">
          {stat.icon}
        </div>
        <div className="text-4xl font-bold text-white">{stat.value}</div>
        <div className="text-blue-100 font-medium">{stat.label}</div>
      </motion.div>
    ))}
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Mission;