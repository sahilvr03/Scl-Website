"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkedAlt, FaRobot, FaBrain, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const VisionDrive = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/smart.jpg"
          alt="Autonomous Vehicle"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            VisionDrive AI: Intelligent Driver & Road Monitoring
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Advancing Safety and Intelligence in Autonomous Vehicles
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full text-sm font-medium transition">
              Learn More
            </Link>
            <Link href="#" className="bg-white/90 hover:bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium transition">
              Watch Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Project Overview */}
      <section className="max-w-5xl mx-auto py-16 px-4 text-center">
        <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          Project Overview
        </motion.h2>
        <p className="text-gray-700 mb-6">
          Autonomous vehicles are reshaping the future with advanced sensing and AI technologies. At the heart of this innovation are three pillars:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            { icon: <FaMapMarkedAlt />, title: "Perception", desc: "Understanding the environment with stereo vision, LiDAR, and GPS." },
            { icon: <FaBrain />, title: "Localization", desc: "Pinpointing the vehicle’s exact position for safe navigation." },
            { icon: <FaRobot />, title: "Decision-Making", desc: "Executing intelligent, real-time driving actions." },
          ].map((item, i) => (
            <motion.div key={i} className="bg-gray-50 p-6 rounded-lg shadow-md" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="text-3xl text-cyan-600 mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Goal */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Project Goal</h2>
          <p className="text-gray-700 text-lg">
            Our objective is to develop an intelligent perception system that seamlessly integrates Stereo Vision Camera, LiDAR, and GPS technologies. This integration aims to enhance the safety, accuracy, and adaptability of self-driving cars, establishing new benchmarks in autonomous vehicle technology.
          </p>
        </div>
      </section>

      {/* R&D Activities */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Research & Development Activities</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Mapping & Data Collection</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>3D mapping of NEDUET Campus</li>
              <li>GPS correction implementation</li>
              <li>Visual data processing</li>
              <li>IMU pose information integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Simulation & Testing</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Virtual testing using CARLA Simulator</li>
              <li>MPC Controller implementation</li>
              <li>ROS integration for vehicle actuators</li>
              <li>Real-world performance validation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Directions */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Future Directions</h2>
          <p className="text-gray-700 text-lg">
            Plans to enhance AI models for various environmental conditions, implement V2X communication, ensure compliance with legal and safety regulations, and utilize RTK GPS for improved navigation.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Achievements</h2>
        <ul className="text-gray-700 space-y-4 text-lg">
          <li>🏆 Recognition as the Most Promising Innovation at the Computer Vision Projects Expo 2024.</li>
          <li>📄 Published paper: <br />
            <a href="https://doi.org/10.3390/futuretransp5010002" target="_blank" className="text-cyan-600 underline">
              Advancing Road Safety: A Comprehensive Evaluation of Object Detection Models for Commercial Driver Monitoring Systems
            </a>
          </li>
        </ul>
      </section>

     
    
    </div>
  );
};

export default VisionDrive;
