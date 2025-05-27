"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaMobileAlt,
  FaCamera,
  FaMicrochip,
  FaQrcode,
  FaLightbulb,
  FaUsers,
  FaChalkboardTeacher,
  FaTools,
  FaRocket,
  FaChartLine,
  FaGamepad,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCamera />,
    title: "AI-Driven Circuit Recognition",
    desc: "Just scan a printed or drawn circuit diagram—our AI engine instantly recognizes and recreates it in AR.",
  },
  {
    icon: <FaQrcode />,
    title: "QR Code Spatial Scanning",
    desc: "Point your device to a QR code to anchor the circuit on any flat surface, turning your desk into a virtual lab.",
  },
  {
    icon: <FaMicrochip />,
    title: "Smart Simulations",
    desc: "See how circuits behave in real-time, including current flow, voltage levels, and component responses.",
  },
];

const coreFeatures = [
  {
    icon: <FaCamera />,
    title: "AI Circuit Detection",
    desc: "Auto-recognizes hand-drawn or printed circuit diagrams",
  },
  {
    icon: <FaQrcode />,
    title: "QR Code Surface Scanning",
    desc: "Anchors simulations precisely on real-world surfaces",
  },
  {
    icon: <FaLightbulb />,
    title: "Real-Time Testing",
    desc: "Modify circuits, change values, and see results instantly",
  },
  {
    icon: <FaMobileAlt />,
    title: "Fully Mobile",
    desc: "No laptops or hardware needed—just your smartphone",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Educational Focus",
    desc: "Designed for schools, universities, and self-learners",
  },
];

const roadmap = [
  { icon: <FaRocket />, title: "Multi-user collaboration" },
  { icon: <FaChartLine />, title: "Circuit performance analytics" },
  { icon: <FaGamepad />, title: "Gamified learning modules" },
];

const ARCircuitPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero */}
      <section className="relative h-[550px] flex items-center justify-center text-white text-center overflow-hidden">
        <Image
          src="/images/ar4.png"
          alt="AR Circuit Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          className="relative z-10 px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">AR Circuit Simulator</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6">
            Learn, Simulate & Explore Circuits Using Augmented Reality and AI
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/download" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-medium transition">
              Download App
            </Link>
            <Link href="/contact" className="bg-white text-cyan-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition">
              Request Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
     <section className="py-20 px-6 max-w-6xl mx-auto">
  <motion.h2 className="text-4xl font-bold text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    What is It?
  </motion.h2>
  <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
    The AR Circuit Simulator is an innovative mobile-based tool that transforms how students,
engineers, and educators interact with electronics. Using Augmented Reality (AR) and AIpowered circuit detection, the app allows users to simulate, view, and test circuits in their real
environment—without the need for physical components.
  </p>

  {/* Image Gallery */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { src: "/images/ar1.png", alt: "AI recognizing a hand-drawn circuit" },
      { src: "/images/ar2.png", alt: "QR code anchoring on a table" },
      { src: "/images/ar3.png", alt: "Real-time simulation in AR" },
    ].map((img, i) => (
      <motion.div
        key={i}
        className="overflow-hidden rounded-xl shadow hover:shadow-lg transition-all"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={600}
          height={400}
          className="object-cover w-full h-full"
        />
      </motion.div>
    ))}
  </div>
</section>


      {/* Features */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-4xl text-cyan-600 mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl text-cyan-600 mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Use Cases</h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether youre an educator, student, or tinkerer—AR Circuit makes electronics intuitive and engaging.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-cyan-700 font-medium">
          {["STEM Education", "Remote Learning", "Engineering Projects", "Skill Development"].map((tag, i) => (
            <span key={i} className="bg-white px-5 py-2 rounded-full shadow text-sm">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* How it Works */}
     <section className="bg-gray-100 py-20 px-6">
  <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
  <div className="max-w-4xl mx-auto space-y-10">
    {[
      { icon: <FaCamera />, title: "Scan Your Circuit", desc: "Draw or print a circuit and scan it using your phone. The AI engine instantly detects all components." },
      { icon: <FaQrcode />, title: "Anchor with QR Code", desc: "Point your camera at a QR code to place your circuit accurately in your real-world environment." },
      { icon: <FaMicrochip />, title: "Simulate in AR", desc: "Visualize the circuit behavior—current flow, voltage levels, and more—in real time." },
      { icon: <FaTools />, title: "Edit & Interact", desc: "Modify resistor values or components and get instant feedback within the AR view." },
    ].map((step, i) => (
      <motion.div
        key={i}
        className="bg-white shadow-md rounded-xl p-6 flex items-start gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
      >
        <div className="text-4xl text-cyan-600">{step.icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-1">{`${i + 1}. ${step.title}`}</h3>
          <p className="text-gray-600 text-sm">{step.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Why Us */}
      <section className="py-20 px-6 text-center">
  <h2 className="text-4xl font-bold mb-12">Why Choose Our Solution?</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {[
      { icon: <FaLightbulb />, title: "Easy to Use", desc: "Designed for absolute beginners and pros alike." },
      { icon: <FaUsers />, title: "No Risk", desc: "Zero chance of damaging physical hardware or making costly mistakes." },
      { icon: <FaChartLine />, title: "Real-Time Feedback", desc: "Edit values and instantly see the impact in AR." },
      { icon: <FaRocket />, title: "Future-Ready", desc: "Scalable for remote learning, gamified education, and more." },
    ].map((benefit, i) => (
      <motion.div
        key={i}
        className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
      >
        <div className="text-3xl text-cyan-600 mb-3">{benefit.icon}</div>
        <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
        <p className="text-sm text-gray-600">{benefit.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* Roadmap */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">What’s Coming Next?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {roadmap.map((item, i) => (
            <motion.div key={i} className="bg-white px-6 py-4 rounded-xl shadow-md w-64" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
              <div className="text-3xl text-cyan-600 mb-2">{item.icon}</div>
              <p className="text-gray-700 font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Start Exploring Today</h2>
        <p className="text-lg text-gray-700 mb-8">Transform how electronics is taught and learned—right from your smartphone.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/download" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-medium transition">
            Download App
          </Link>
          <Link href="/contact" className="bg-white text-cyan-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ARCircuitPage;
