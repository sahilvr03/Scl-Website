"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCamera, FaBrain, FaFilePdf, FaCogs, FaLeaf, FaChartBar } from "react-icons/fa";

const RiceAnalyzerPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/ricee.jpeg" // 🔹 Put your rice image here (public/images/rice-hero.jpg)
          alt="National Grain Tech"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          className="relative z-10 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            National Grain Tech: Rice Quality Analyzer Software
          </h1>
          <p className="text-lg md:text-xl mb-6">
            AI-powered precision grading for rice quality assessment
          </p>
          {/* <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full text-sm font-medium transition"
            >
              Request Demo
            </Link>
            <Link
              href="/brochures/rice-quality-analyzer.pdf"
              className="bg-white/90 hover:bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium transition"
            >
              Download Brochure
            </Link>
          </div> */}
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto py-16 px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Overview
        </motion.h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          The National Grain Tech Rice Quality Analyzer is an AI-powered software solution designed to automate the
          quality evaluation of rice samples. Using image processing and machine learning algorithms, it analyzes grain
          images captured on a jet-black background to determine key parameters like grain length, width, chalkiness, and damage ratio.
        </p>
      </section>

      {/* Objective Section */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Objective
        </motion.h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
          To enable automated, precise, and data-driven analysis of rice samples—minimizing human error and ensuring standardized grading for the grain industry.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 text-left">
            {[
              {
                icon: <FaCamera />,
                title: "Automated Image Scanning",
                desc: "Captures and processes rice sample images with a single click.",
              },
              {
                icon: <FaBrain />,
                title: "AI-Based Image Processing",
                desc: "Detects and classifies grains based on shape, size, and color parameters.",
              },
              {
                icon: <FaChartBar />,
                title: "Dual Test Modes",
                desc: "Supports both 10g and 100g grain tests for flexible sample analysis.",
              },
              {
                icon: <FaFilePdf />,
                title: "Comprehensive Reporting",
                desc: "Generates detailed PDF reports with grain size, type, and classification data.",
              },
              {
                icon: <FaCogs />,
                title: "Batch Processing",
                desc: "Analyze multiple samples simultaneously for faster throughput.",
              },
              {
                icon: <FaLeaf />,
                title: "User-Friendly Interface",
                desc: "Simple and intuitive UI requiring minimal technical knowledge.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-3xl text-cyan-600 mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Software Modules
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "1",
              title: "Scanning Module",
              desc: "Captures and preprocesses high-resolution rice images for accurate detection.",
            },
            {
              step: "2",
              title: "Analysis Module",
              desc: "Applies ML algorithms for grain segmentation, measurement, and classification.",
            },
            {
              step: "3",
              title: "Reporting Module",
              desc: "Generates detailed and summarized PDF reports of analyzed samples.",
            },
            {
              step: "4",
              title: "Sample Viewer",
              desc: "Displays original and processed images with highlighted grain boundaries.",
            },
          ].map((module, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-2xl font-bold text-cyan-600 mb-3">{module.step}</div>
              <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
              <p className="text-gray-600 text-sm">{module.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* System Requirements Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto bg-gray-100 rounded-xl mb-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          System Requirements
        </motion.h2>
        <div className="space-y-4 text-left max-w-2xl mx-auto">
          {[
            { title: "Operating System", desc: "Windows 10 or later" },
            { title: "Memory (RAM)", desc: "Minimum 8 GB" },
            { title: "Storage", desc: "2.5 GB free disk space" },
          ].map((req, i) => (
            <motion.div
              key={i}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-1">{req.title}</h3>
              <p className="text-gray-600 text-sm">{req.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-gray-100 py-16 px-4 text-center mb-6">
        <h2 className="text-3xl font-bold mb-6">Applications</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          The Rice Quality Analyzer is ideal for rice grading, export quality control, automated inspection in rice mills, and agricultural research programs.
        </p>
      </section>

      {/* Call to Action
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Rice Quality Analysis?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Contact us today to learn how National Grain Tech can streamline your rice grading process.
        </p>
        <Link
          href="/contact"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full text-lg font-medium transition"
        >
          Get in Touch
        </Link>
      </section> */}
    </div>
  );
};

export default RiceAnalyzerPage;
