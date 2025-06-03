
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeartbeat, FaTools, FaWifi, FaHospitalAlt,FaLock, FaRegListAlt, FaUserCheck, FaPhone, FaEnvelope, FaShieldAlt, FaCogs, FaBuilding } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function MedicalGasAlertPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("Thank you for your inquiry! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      {/* Sticky Header */}
      

      {/* Hero Section */}
      <section id="home" className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/med.png"
            alt="Hospital setting with medical gas lines"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Medical Gas Alert System
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 font-medium mb-4 max-w-2xl">
            Built for Safety. Designed for Hospitals. Powered by S
            <span className="text-yellow-300">|</span>Cube.
          </p>
          <p className="text-2xl font-semibold text-white mb-6">Smarter Monitoring. Safer Patients.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold"
              onClick={() => router.push("#contact")}
            >
              Request a Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-full shadow-lg font-semibold"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About the System</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ensure patient safety and improve hospital efficiency with the S
            <span className="text-yellow-500">|</span>Cube Medical Gas Alert System – a smart, intuitive solution for monitoring critical medical gases in real time.
          </p>
          <p className="text-base text-gray-600 mt-4 max-w-2xl mx-auto">
            Designed for hospitals, surgical centers, and ICUs, this system ensures gas supply integrity while reducing manual oversight.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeartbeat className="text-4xl text-indigo-600" />,
                title: "Real-Time Smart Monitoring",
                desc: "Supports up to 6 gas lines simultaneously with instant anomaly detection. Perfect for Oxygen, Nitrous Oxide, Medical Air, Surgical Air, Medical Vacuum, and AGSS.",
                details: [
                  "6 simultaneous gas lines",
                  "Instant pressure anomaly detection",
                ],
              },
              {
                icon: <FaTools className="text-4xl text-indigo-600" />,
                title: "Customizable for Your Facility",
                desc: "Adjustable pressure thresholds with multiple measurement units. Region-specific settings and intuitive touchscreen interface.",
                details: [
                  "Multiple units (PSI, Bar, mmHg)",
                  "UK, USA, Canada settings",
                ],
              },
              {
                icon: <FaHospitalAlt className="text-4xl text-indigo-600" />,
                title: "Flexible Alerts & Settings",
                desc: "Smart alert management with adjustable mute times and brightness control to reduce alert fatigue in busy hospital environments.",
                details: [
                  "Adjustable alarm mute time",
                  "Day/night brightness control",
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-base mb-4">{item.desc}</p>
                <ul className="text-gray-600 text-sm list-disc list-inside">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Instructions */}
     <section id="setup" className="py-20 px-6 bg-indigo-50">
  <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
    Easy Setup & Configuration
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-800">
    {[
      {
        icon: <FaLock className="text-indigo-600 text-3xl mb-4" />,
        title: "Secure Access",
        desc: "Access via secure service code",
      },
      {
        icon: <FaRegListAlt className="text-indigo-600 text-3xl mb-4" />,
        title: "Guided Wizard",
        desc: "Step-by-step wizard to add gas types, set pressure limits, and define behavior",
      },
      {
        icon: <FaUserCheck className="text-indigo-600 text-3xl mb-4" />,
        title: "No Expertise Needed",
        desc: "No technical expertise required for setup or configuration",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-200 text-center transition duration-300"
      >
        <div className="flex flex-col items-center">
          {item.icon}
          <p className="text-lg font-semibold text-gray-900">{item.title}</p>
          <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* OTA Updates */}
      <section id="ota" className="bg-indigo-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-indigo-900">OTA Firmware Updates (Wi-Fi Powered)</h3>
          <p className="text-gray-700 max-w-xl mx-auto mb-6">
            Say goodbye to cables! With Over-The-Air (OTA) firmware upgrade capability, the system stays current without physical updates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left text-gray-700">
            {[
              "No USB cables required",
              "Updates over secure Wi-Fi",
              "Remote configuration support",
              "Fast deployment of new features and security patches",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center"
              >
                <span className="text-green-500 mr-2">✅</span>
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Environment */}
    <section id="medical" className="py-20 px-6 max-w-6xl mx-auto">
  <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
    Built for Medical Environments
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-700">
    {[
      {
        icon: <FaShieldAlt className="text-indigo-600 text-3xl mb-4" />,
        text: "Designed specifically for clinical reliability",
      },
      {
        icon: <FaCogs className="text-indigo-600 text-3xl mb-4" />,
        text: "Durable components for long-term use",
      },
      {
        icon: <FaBuilding className="text-indigo-600 text-3xl mb-4" />,
        text: "Compatible with new facilities and retrofit setups",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-200 text-center transition duration-300"
      >
        <div className="flex flex-col items-center">
          {item.icon}
          <p className="text-base font-medium text-gray-800">{item.text}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Testimonial Section
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Trusted by Healthcare Professionals</h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md max-w-2xl mx-auto"
          >
            <p className="text-gray-700 italic">
              The S|Cube Medical Gas Alert System has transformed our gas monitoring process, reducing response times and enhancing patient safety.
            </p>
            <p className="mt-4 font-semibold text-gray-800">Dr. Sarah Ahmed</p>
            <p className="text-sm text-gray-600">Chief of Surgery, City Hospital</p>
          </motion.div>
        </div>
      </section> */}

      {/* Contact Form Section
      <section id="contact" className="bg-indigo-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-indigo-900">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600"
                rows={4}
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </motion.button>
            {formStatus && (
              <p className="text-center text-green-600">{formStatus}</p>
            )}
          </form>
        </div>
      </section> */}

      {/* CTA Footer */}
      <section className="bg-gray-100 text-gray-800 text-center py-12">
        <h4 className="text-2xl font-semibold mb-6 text-gray-900">Ready to Elevate Your Facility Safety?</h4>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg shadow-md"
            onClick={() => router.push("#contact")}
          >
            Request a Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-lg shadow-md"
          >
            Download Brochure
          </motion.button>
        </div>
      </section>

     
    </div>
  );
}
