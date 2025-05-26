"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGamepad, FaUsers, FaWifi, FaTrophy } from "react-icons/fa";

const ArmezPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/hero1.jpg"
          alt="ARMEZ 2.0"
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
            ARMEZ 2.0: Smart Laser Combat Gaming System
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Realistic, Team-Based Laser Tag with Intelligent Features
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full text-sm font-medium transition">
              Request Demo
            </Link>
            <Link href="/brochure.pdf" className="bg-white/90 hover:bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium transition">
              Download Brochure
            </Link>
          </div>
        </motion.div>
      </section>

      {/* What is ARMEZ */}
      <section className="max-w-5xl mx-auto py-16 px-4 text-center">
        <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          What is ARMEZ?
        </motion.h2>
        <p className="text-gray-700 text-lg">
          ARMEZ 2.0 is a next-generation laser tag system delivering a thrilling, interactive experience with smart guns, responsive vests, and real-time scoreboards. Ideal for events, gaming arenas, team-building, and more.
        </p>
      </section>

      {/* Key Features */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 text-left">
            {[
              {
                icon: <FaGamepad />,
                title: "Real-Time Scoreboard",
                desc: "Live score updates to track who’s winning and who’s out."
              },
              {
                icon: <FaUsers />,
                title: "Interactive Gear",
                desc: "Guns and vests that light up, vibrate, and respond to hits."
              },
              {
                icon: <FaWifi />,
                title: "Wireless Control",
                desc: "Admin can start or stop the game with one click."
              },
              {
                icon: <FaGamepad />,
                title: "Customizable Gameplay",
                desc: "Set durations, team sizes, game modes, and more."
              },
              {
                icon: <FaTrophy />,
                title: "Reusable Hardware",
                desc: "Rechargeable design perfect for repeated use in events and arenas."
              },
            ].map((feature, i) => (
              <motion.div key={i} className="bg-white p-6 rounded-lg shadow-md" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="text-3xl text-cyan-600 mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "1",
              title: "Setup & Control",
              desc: "Admins launch the game effortlessly using an intuitive control panel with wireless connectivity.",
            },
            {
              step: "2",
              title: "Player Activation",
              desc: "Players equip smart guns and vests, powering them up to join the battle.",
            },
            {
              step: "3",
              title: "Live Gameplay",
              desc: "Engage in dynamic combat with real-time feedback from gear that lights up and vibrates.",
            },
            {
              step: "4",
              title: "Game End",
              desc: "The system automatically powers down and displays final scores when the game concludes.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-2xl font-bold text-cyan-600 mb-3">{step.step}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 px-4 max-w-5xl mb-8 mx-auto bg-gray-100">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          How to Use ARMEZ 2.0
        </motion.h2>
        <div className="space-y-6">
          {[
            {
              title: "Prepare the Arena",
              desc: "Set up the playing area with clear boundaries and ensure the control panel is connected to the wireless network.",
            },
            {
              title: "Equip Players",
              desc: "Distribute smart guns and vests to players, ensuring each device is charged and paired with the system.",
            },
            {
              title: "Configure Game Settings",
              desc: "Use the control panel to select game modes, set time limits, and assign teams for a customized experience.",
            },
            {
              title: "Start the Game",
              desc: "Initiate the game via the control panel, and watch players dive into the action with real-time tracking.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-gray-100 py-16 mb-6 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Who Is It For?</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          ARMEZ 2.0 is designed for event organizers, corporate team-building, universities, gaming arenas, and technology showcases.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-lg text-gray-700 mb-6">Let’s bring ARMEZ 2.0 to your event, venue, or campus.</p>
        <Link href="https://preview--smart-city-lab-hub.lovable.app/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full text-lg font-medium transition">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default ArmezPage;