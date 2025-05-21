"use client";
import { motion } from 'framer-motion';
import { FaSatellite, FaChartLine, FaWater, FaLeaf } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const SatelliteMonitoring = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/im2.jpeg.jpg"
            alt="Satellite image of farmland"
            fill
            className="object-cover opacity-90"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-gray-900 mb-2">
            Revolutionizing Agriculture with Space Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            Real-time satellite insights for smarter farming decisions
          </p>
          <div className="flex gap-4">
            <Link
              href="https://cropmonitoring.crop2x.com/auth"
              className="px-6 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium hover:bg-cyan-700 transition-colors"
            >
              Explore the Platform
            </Link>
            <Link
              href="#"
              className="px-6 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Watch How It Works
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/crop.jpg"
              alt="Satellite image of crops"
              width={600}
              height={400}
              className="rounded-xl object-cover shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Precision Agriculture from Space</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our platform uses satellite imagery and data analytics to remotely monitor crop health, growth stages, and yield. Designed for farmers, agronomists, and policymakers, it brings precision to agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaSatellite />, title: 'Satellite Imagery', desc: 'Access high-resolution multi-spectral imagery.' },
              { icon: <FaChartLine />, title: 'Vegetation Indices', desc: 'Monitor crop health with NDVI, NDRE, MSAVI, NDMI.' },
              { icon: <FaWater />, title: 'Analytics Dashboard', desc: 'Visualize trends in crop performance.' },
              { icon: <FaLeaf />, title: 'Resource Optimization', desc: 'Identify zones for irrigation or pest control.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl text-cyan-600 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">How It Works</h2>
          <p className="text-lg text-gray-600 mb-4">A simple process for powerful insights</p>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-12 rounded-full" />
          <div className="grid md:grid-cols-5 gap-6 text-left">
            {[
              {
                title: 'Receive Imagery',
                desc: 'Get updated satellite imagery of your fields every 3–5 days.',
              },
              {
                title: 'Analyze Fields',
                desc: 'Process data using NDVI and other vegetation indices.',
              },
              {
                title: 'Detect Anomalies',
                desc: 'Identify changes in crop growth and potential issues.',
              },
              {
                title: 'Generate Reports',
                desc: 'Create actionable insights and recommendations.',
              },
              {
                title: 'Take Action',
                desc: 'Implement targeted interventions based on data.',
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 mb-4 rounded-full bg-orange-400 text-white flex items-center justify-center text-lg font-bold">
                  {index + 1}
                </div>
                <h4 className="text-md font-semibold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#0d2d66] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Benefits</h2>
          <p className="text-lg mb-12 text-gray-300">How our platform transforms agriculture</p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                title: 'Reduce Input Costs',
                desc: 'Save on water, fertilizer, and pesticides through targeted application only where needed.',
              },
              {
                title: 'Increase Yield and Profitability',
                desc: 'Optimize growing conditions to maximize crop output and profit margins.',
              },
              {
                title: 'Early Issue Detection',
                desc: 'Identify disease, drought, or pest problems before they become visible to the naked eye.',
              },
              {
                title: 'Remote Monitoring',
                desc: 'Track large farms without physically visiting each field, saving time and resources.',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-400 text-white flex items-center justify-center text-sm font-bold mt-1">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: 'Wheat Farms', image: '/images/OIP.jpeg' },
            { title: 'Rice Fields', image: '/images/rice-fields.jpeg' },
            { title: 'Sugarcane & Cotton', image: '/images/sugarcane-cotton.jpeg' },
            { title: 'Crop Health Surveillance', image: '/images/crop.jpg' },
          ].map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-56 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={useCase.image}
                alt={useCase.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
                <p className="text-white text-lg font-medium p-4">{useCase.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SatelliteMonitoring;