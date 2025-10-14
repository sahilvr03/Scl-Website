"use client";
import { motion } from "framer-motion";
import { FaVideo, FaChalkboardTeacher, FaTachometerAlt, FaCamera, FaWallet, FaChartBar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function SmartSchoolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-violet-50 text-gray-900 font-sans">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden bg-gradient-to-bl from-violet-100 to-white">
        {/* <Image
          src="/images/at.jpg"
          alt="Smart School Monitoring"
          fill
          className="object-cover opacity-95"
          sizes="100vw"
          priority
        /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-50/90" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Smart School Attendance & Monitoring System
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            The Smart School Attendance & Monitoring System introduces an AI-driven approach to automate attendance tracking and enhance classroom monitoring using existing IP camera infrastructure.
          </p>
          <div className="flex gap-4">
            <Link
              href="#overview"
              className="px-6 py-2 bg-violet-700 text-white rounded-full text-sm font-medium hover:bg-violet-800 transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="#impact"
              className="px-6 py-2 bg-white text-violet-800 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Impact
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section id="overview" className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Image
              src="/images/at.jpg"
              alt="Smart School Overview"
              width={700}
              height={460}
              className="rounded-xl object-cover shadow-lg"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              This project leverages camera feeds from classrooms to count students and verify teachers automatically. Through an integrated real-time dashboard, administrators can instantly view attendance records, monitor class participation, and ensure teaching compliance — all with minimal hardware setup and maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-violet-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Key Features</h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <FaVideo className="text-violet-700 text-4xl mb-4" />,
                title: "Student Counting via Camera Feeds",
                desc: "Student Counting via Camera Feeds: Detect and count students in classrooms automatically using AI-based vision algorithms.",
              },
              {
                icon: <FaChalkboardTeacher className="text-violet-700 text-4xl mb-4" />,
                title: "Teacher Verification",
                desc: "Teacher Verification: Employ face recognition to verify authorized teaching staff in real time.",
              },
              {
                icon: <FaTachometerAlt className="text-violet-700 text-4xl mb-4" />,
                title: "Real-Time Dashboard",
                desc: "Real-Time Dashboard: Provides instant visibility into class attendance and activity trends.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-xl border border-violet-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-700 text-base text-center">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCamera className="text-violet-700 text-4xl mb-4" />,
                title: "Easy Setup",
                desc: "Easy Setup: Works with standard IP cameras — no specialized hardware required.",
              },
              {
                icon: <FaWallet className="text-violet-700 text-4xl mb-4" />,
                title: "Low-Cost Solution",
                desc: "Low-Cost Solution: Minimal installation and maintenance cost, making it scalable for public and private institutions.",
              },
              {
                icon: <FaChartBar className="text-violet-700 text-4xl mb-4" />,
                title: "Impact Metrics",
                desc: "Impact: The system brings transparency, efficiency, and accountability to school operations.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-xl border border-violet-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-700 text-base text-center">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className=" text-violet-500 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Impact</h2>
          <p className="text-lg mb-6 text-violet-400">
            The system brings transparency, efficiency, and accountability to school operations. By eliminating manual attendance errors and enabling real-time supervision, it supports data-driven educational management — empowering institutions to improve classroom engagement and teacher performance monitoring.
          </p>
        </div>
      </section>
    </div>
  );
}
