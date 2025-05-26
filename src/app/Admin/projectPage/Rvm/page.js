"use client";
import { motion } from 'framer-motion';
import { FaRecycle, FaMobileAlt, FaQrcode, FaChartBar, FaWineBottle, FaGift, FaBell, FaGlobe, FaKeyboard } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const ReverseVendingMachine = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
 <section className="relative h-[400px] overflow-hidden">
  <div className="absolute inset-0">
    <Image
      src="/images/hero1.jpg"
      alt="Reverse Vending Machine"
      fill
      className="object-cover"
      sizes="100vw"
      priority
    />
    {/* Subtle black overlay for readability */}
    <div className="absolute inset-0 bg-black/40" />
  </div>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
  >
    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 leading-snug">
      Reverse Vending Machine (RVM)
    </h1>
    <h2 className="text-xl md:text-2xl font-medium text-white mb-6 max-w-2xl">
      Smart Recycling to Combat Plastic Pollution & Promote Environmental Responsibility
    </h2>
    <div className="flex gap-4">
      <Link
        href="#"
        className="px-6 py-2 bg-cyan-600 text-white rounded-full text-sm font-semibold hover:bg-cyan-700 transition-colors"
      >
        Explore ReBin App
      </Link>
      <Link
        href="#"
        className="px-6 py-2 bg-white/90 text-gray-900 rounded-full text-sm font-semibold hover:bg-white transition-colors"
      >
        Watch Demo
      </Link>
    </div>
  </motion.div>
</section>

      {/* Project Summary Section */}
      <section className="max-w-7xl mx-auto mt-8 py-12 px-4 mb-8 sm:px-6 lg:px-8 bg-gray-100 rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Project Summary</h2>
            <p className="text-xl text-gray-600 mb-6">
              The Reverse Vending Machine (RVM) is an intelligent recycling solution developed by Smart City Lab – NCAI, NED
              University. Designed to combat plastic pollution, this innovative system enables users to dispose of plastic
              bottles and cans in exchange for reward points and discounts, fostering a culture of recycling and environmental
              responsibility.
            </p>
            <Link
              href="#how-it-works"
              className="inline-block px-6 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium hover:bg-cyan-700 transition-colors"
            >
              Learn How It Works
            </Link>
          </div>
          <div className="relative h-64 md:h-80">
            <Image
              src="/images/rvm.jpg"
              alt="RVM in Action"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">How It Works</h2>
          <p className="text-lg text-gray-600 text-center mb-8">A simple process for users to recycle and earn rewards</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Deposit',
                desc: 'Insert a used plastic bottle or can into the RVM.',
                icon: <FaWineBottle />,
              },
              {
                step: '2',
                title: 'User Input',
                desc: 'Enter your mobile number via the keypad.',
                icon: <FaKeyboard />,
              },
              {
                step: '3',
                title: 'QR Code',
                desc: 'Receive a QR code via SMS.',
                icon: <FaQrcode />,
              },
              {
                step: '4',
                title: 'Redeem Rewards',
                desc: 'Scan QR code in ReBin app to earn points for discounts or cash.',
                icon: <FaGift />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center"
              >
                <div className="text-4xl text-cyan-600 mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-cyan-600 mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Features Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Mobile App Features</h2>
        <p className="text-lg text-gray-600 text-center mb-8">Track your recycling journey and redeem rewards on the go</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: <FaWineBottle />,
              title: 'Track Recycled Bottles',
              desc: 'Monitor your recycling efforts and environmental impact.',
            },
            {
              icon: <FaGift />,
              title: 'Redeem Points',
              desc: 'Use earned points at partner outlets for various rewards.',
            },
            {
              icon: <FaBell />,
              title: 'Discount Notifications',
              desc: 'Receive alerts about new discounts and special offers.',
            },
            {
              icon: <FaGlobe />,
              title: 'Environmental Impact',
              desc: 'See how your recycling efforts help the planet.',
            },
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
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Key Features of RVM</h2>
          <p className="text-lg text-gray-600 text-center mb-8">Innovative technology making recycling convenient and rewarding</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FaRecycle />,
                title: 'Smart User Interface',
                desc: 'Keypad & LCD marketing screen for interaction.',
              },
              {
                icon: <FaMobileAlt />,
                title: 'SMS Verification',
                desc: 'Secure access to rewards via mobile.',
              },
              {
                icon: <FaChartBar />,
                title: 'Marketing & Advertising',
                desc: 'LCD screen plays ads/offers to engage users.',
              },
              {
                icon: <FaQrcode />,
                title: 'Capacity Alerts',
                desc: 'Real-time monitoring of machine fill level.',
              },
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

      {/* ReBin Machine Models Section */}
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">ReBin Machine Models</h2>
        <p className="text-lg text-gray-600 text-center mb-8">Customizable solutions for different environments and needs</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'ReBin 2.0',
              capacity: '600+',
              features: ['Compact indoor use', 'Basic LCD display', 'SMS-based reward system'],
              image: '/images/rebin-2.0.jpg',
            },
            {
              title: 'ReBin 3.0',
              capacity: '1000+',
              features: ['Deployed with large storage', 'Enhanced LCD marketing screen', 'Outdoor-ready design'],
              image: '/images/rebin-3.0.jpg',
            },
            {
              title: 'ReBin 4.0',
              capacity: '1300+',
              features: ['AI-based sorting system', 'Advanced analytics dashboard', 'Larger storage capacity'],
              image: '/images/rebin-4.0.jpg',
            },
          ].map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-200 text-center"
            >
              <h3 className="text-2xl font-bold text-cyan-600 mb-2">{model.title}</h3>
              <p className="text-xl text-gray-900 mb-4">{model.capacity} Bottle Capacity</p>
              <ul className="text-gray-600 text-sm space-y-2">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reward System Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Reward System</h2>
          <p className="text-lg text-gray-600 text-center mb-8">Incentivizing recycling through valuable rewards</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Earn points for each PET bottle or can deposited.',
              'Redeem points for discounts at partner retail outlets.',
              'Convert points to cashback or mobile balance credits.',
            ].map((reward, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center"
              >
                <p className="text-gray-600 text-sm">{reward}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">Environmental Impact</h2>
        <p className="text-lg text-gray-600 text-center mb-8">Creating positive change for our planet</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Promotes sustainable waste management in urban communities.',
            'Reduces plastic waste in landfills and oceans.',
            'Provides data-driven insights for recycling optimization.',
          ].map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-200 text-center"
            >
              <p className="text-gray-600 text-sm">{impact}</p>
            </motion.div>
          ))}
        </div>
      </section>

    
      {/* Contact Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-6">Want to host an RVM or learn more? Contact us!</p>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:ncaismartcitylab@gmail.com" className="text-cyan-600 hover:underline">
                ncaismartcitylab@gmail.com
              </a>
            </p>
            <p>
              <strong>Website:</strong>{' '}
              <a
                href="https://smartcitylab.neduet.edu.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:underline"
              >
                smartcitylab.neduet.edu.pk
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+923353046110" className="text-cyan-600 hover:underline">
                +92 335 3046110
              </a>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ReverseVendingMachine;