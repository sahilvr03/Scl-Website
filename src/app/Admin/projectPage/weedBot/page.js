"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaRobot, FaLeaf, FaAccusoft, FaWrench, FaSeedling } from "react-icons/fa";

const WeedBotPage = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/weedbothero.png"
          alt="Weed-Bot Hero"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Weed-Bot</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6">
            Revolutionizing Farming with Autonomous Weed Control
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-medium transition">
              Contact Us
            </Link>
            <Link href="/demo" className="bg-white text-cyan-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition">
              See Demo
            </Link>
          </div>
        </motion.div>
      </section>

      {/* What is Weed-Bot? */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          What is Weed-Bot?
        </motion.h2>
        <p className="text-lg text-gray-700 mb-12">
          Weed-Bot is an intelligent, autonomous agricultural robot designed to identify and eliminate weeds with laser precision. Built to support farmers, this robotic assistant navigates crop fields automatically, reducing manual labor and improving weeding efficiency—saving time, effort, and cost.
        </p>
        <Image
          src="/images/weedbot.jpg"
          alt="Weed-Bot in Action"
          width={800}
          height={500}
          className="rounded-xl mx-auto shadow-lg"
        />
      </section>

      {/* Key Features */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: <FaLeaf />,
                title: "AI-Based Weed Detection",
                desc: "A deep learning system identifies and classifies weeds in real-time with high accuracy.",
              },
              {
                icon: <FaRobot />,
                title: "Autonomous Navigation",
                desc: "Weed-Bot drives itself between rows using smart sensors and computer vision—no manual control required.",
              },
              {
                icon: <FaAccusoft />,
                title: "Laser-Powered Precision",
                desc: "Equipped with a 20-watt laser, the robot targets and eliminates weeds without disturbing surrounding crops or soil.",
              },
              {
                icon: <FaWrench />,
                title: "Customizable & Cost-Effective",
                desc: "Designed with affordability and flexibility in mind, Weed-Bot’s structure is adjustable todifferent field types and easily replicable.",
              },
              {
                icon: <FaSeedling />,
                title: "Field-Tested Performance",
                desc: "Tested in real agricultural environments, Weed-Bot can weed one acre in ~23.7 hours—a huge improvement over traditional manual labor, which can take several days.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-4xl text-cyan-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {[
            { icon: <FaRobot />, title: "Navigates Furrows Autonomously", desc: "Smart sensors guide the robot through rows with precision." },
            { icon: <FaLeaf />, title: "Detects Weeds Using AI & Computer Vision", desc: "Deep learning algorithms identify weeds in real-time." },
            { icon: <FaAccusoft />, title: "Targets Weeds with Laser Precision", desc: "Eliminates weeds without chemicals or disturbing crops." },
            { icon: <FaSeedling />, title: "Eliminates Weeds Without Chemicals or Manual Effort        ", desc: "A sustainable solution that avoids harmful chemicals." },
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

      {/* Benefits */}
      <section className="bg-gray-100 py-20 px-6 text-center">
  <h2 className="text-4xl font-bold mb-10">Benefits for Farmers</h2>
  <motion.div
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: { transition: { staggerChildren: 0.2 } },
      hidden: {},
    }}
  >
    {[
      "Reduces labor cost and dependency",
      "Increases efficiency and precision",
      "Safe for crops and the environment",
      "Easy to deploy and operate",
      "Scalable across different farm sizes",
    ].map((benefit, i) => (
      <motion.div
        key={i}
        className="flex items-start gap-4 bg-white rounded-xl shadow hover:shadow-lg p-6 transition"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="text-green-600 text-2xl mt-1">✅</div>
        <p className="text-gray-700 text-left text-base font-medium">{benefit}</p>
      </motion.div>
    ))}
  </motion.div>
</section>


      {/* CTA */}
     <section className="py-20 px-6 bg-white-700 text-gray-800 text-center">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore the Future of Smart Farming</h2>
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
      Interested in smarter, sustainable farming solutions? <br />
      Let Weed-Bot do the weeding—so you can focus on growing.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        href="/contact"
        className=" text-cyan-700  bg-gray-100 px-6 py-3 rounded-full font-medium transition"
      >
        Contact Us
      </Link>
      <Link
        href="/demo"
        className="text-cyan-700 bg-gray-100 px-6 py-3 rounded-full font-medium transition"
      >
        See Demo
      </Link>
      <Link
        href="/partner"
        className=" text-cyan-700 bg-gray-100 px-6 py-3 rounded-full font-medium transition"
      >
        Partner with Us
      </Link>
    </div>
  </motion.div>
</section>

    </div>
  );
};

export default WeedBotPage;
