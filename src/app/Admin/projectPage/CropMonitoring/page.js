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
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/crop.jpg"
              alt="Satellite image of crops"
              width={500}
              height={300}
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Precision Agriculture from Space</h2>
            <p className="text-gray-600 text-lg">
              Our platform uses satellite imagery and data analytics to remotely monitor crop health, growth stages, and yield. Designed for farmers, agronomists, and policymakers, it brings precision to agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <FaSatellite />, title: 'Satellite Imagery', desc: 'Access high-resolution multi-spectral imagery.' },
              { icon: <FaChartLine />, title: 'Vegetation Indices', desc: 'Monitor crop health with NDVI, SAVI, EVI.' },
              { icon: <FaWater />, title: 'Analytics Dashboard', desc: 'Visualize trends in crop performance.' },
              { icon: <FaLeaf />, title: 'Resource Optimization', desc: 'Identify zones for irrigation or pest control.' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center"
              >
                <div className="text-3xl text-cyan-600 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {[
            { step: '1', title: 'Receive Imagery', desc: 'Updated satellite imagery delivered regularly.' },
            { step: '2', title: 'Analyze Fields', desc: 'Use NDVI and other indices to assess crops.' },
            { step: '3', title: 'Detect Anomalies', desc: 'Identify changes or issues in crop growth.' },
            { step: '4', title: 'Generate Reports', desc: 'Get actionable recommendations.' },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-full md:w-1/4 bg-white p-6 rounded-lg border border-gray-200 text-center"
            >
              <div className="text-2xl font-bold text-cyan-600 mb-2">{step.step}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Reduce input costs through targeted actions',
              'Increase yield and profitability',
              'Detect issues early (disease, drought, pests)',
              'Monitor large farms without visiting the field',
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center"
              >
                <p className="text-gray-600 text-sm">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Wheat Farms', image: '/images/OIP.jpeg' },
            { title: 'Rice Fields', image: '/images/rice-fields.jpeg' },
            { title: 'Sugarcane & Cotton', image: '/images/sugarcane-cotton.jpeg' },
            { title: 'crop-health-surveillance', image: '/images/crop.jpg' },
          ].map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-48 rounded-lg overflow-hidden"
            >
              <Image
                src={useCase.image}
                alt={useCase.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end">
                <p className="text-white text-sm font-medium p-4">{useCase.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default SatelliteMonitoring;