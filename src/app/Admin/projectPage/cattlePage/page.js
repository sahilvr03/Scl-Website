"use client";
import { motion } from "framer-motion";
import {
  FaMicrochip,
  FaRobot,
  FaCloud,
  FaMobileAlt,
  FaHeartbeat,
  FaLeaf,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const CattleMonitoring = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-10 to-amber-10 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/cow.png"
          alt="AI-powered cattle monitoring"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 " />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-green-400 mb-3">
            Cattle Monitoring: AI-Powered Livestock Intelligence
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Revolutionizing livestock management through AI-driven behavior
            recognition and health analysis.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="px-6 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="#"
              className="px-6 py-2 bg-white text-green-800 rounded-full text-sm font-medium hover:bg-green-100 transition-colors"
            >
              Watch Overview
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/cow.png"
              alt="Cattle AI monitoring system"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-green-900">Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Cattle Monitoring Project leverages artificial intelligence
              and IoT-based sensing to transform traditional herd management
              into a data-driven, automated system. It continuously monitors
              cattle behavior, movement, and physiological parameters such as
              temperature and motion — empowering farmers with real-time
              insights for timely and informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="bg-green-100/50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-900">
            Key Objectives
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <FaRobot className="text-green-600 text-4xl mb-4" />,
                title: "Automate Behavior Recognition",
                desc: "AI models detect feeding, resting, walking, and other activity patterns using sensor data.",
              },
              {
                icon: <FaHeartbeat className="text-green-600 text-4xl mb-4" />,
                title: "Early Illness Detection",
                desc: "Identifies deviations in movement or body temperature to alert farmers before symptoms appear.",
              },
              {
                icon: <FaLeaf className="text-green-600 text-4xl mb-4" />,
                title: "Optimize Herd Management",
                desc: "Provides real-time dashboards and analytics to boost productivity, animal welfare, and efficiency.",
              },
            ].map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-green-200 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center">{objective.icon}</div>
                <h3 className="text-xl font-semibold text-green-900 mb-3 text-center">
                  {objective.title}
                </h3>
                <p className="text-gray-600 text-base text-center">
                  {objective.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-900 mb-3">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Integrating sensors, AI, and cloud systems for seamless monitoring
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaMicrochip className="text-green-600 text-5xl mb-4" />,
                title: "IoT Sensors",
                desc: "Collar-mounted motion and temperature sensors for continuous data collection.",
              },
              {
                icon: <FaRobot className="text-green-600 text-5xl mb-4" />,
                title: "AI & Computer Vision",
                desc: "Deep learning models analyze cattle behavior and detect health anomalies.",
              },
              {
                icon: <FaCloud className="text-green-600 text-5xl mb-4" />,
                title: "Cloud Integration",
                desc: "Centralized data storage and visualization enable real-time monitoring and scalability.",
              },
              {
                icon: <FaMobileAlt className="text-green-600 text-5xl mb-4" />,
                title: "Mobile Dashboard",
                desc: "Farmers receive alerts, performance metrics, and health insights anywhere, anytime.",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-green-50 p-6 rounded-xl border border-green-200 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center">{tech.icon}</div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-700 text-base">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className=" text-green-900 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Impact</h2>
          <p className="text-lg mb-10 text-gray-900">
            Advancing precision livestock farming in Pakistan
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg"
          >
            This project enhances livestock health management, reduces economic
            losses from delayed illness detection, and supports sustainable dairy
            and meat production through data-driven insights. By combining AI,
            IoT sensor networks, and cloud analytics, it marks a transformative
            leap toward smarter, more efficient livestock farming across
            Pakistan.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default CattleMonitoring;
