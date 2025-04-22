import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaRegClock } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                         <Image 
                           src="/images/ncailogo.png" // Replace with your actual logo path
                           alt="Logo"
                           width={250}      // Adjust as needed
                           height={10}     // Match height visually with text
                           className="object-contain"
                         />
                           {/* <span className="text-3xl font-black text-blue-400 tracking-tight">NCAI</span>
                           <span className="text-xs text-gray-600 font-light leading-tight hidden sm:block">
                             <p>Research Center for</p>
                             <p>Artificial Intelligence</p>
                           </span> */}
                     </Link>
            </h3>
            <p className="text-gray-300 mb-4">
              Advancing artificial intelligence through cutting-edge research and innovative solutions for real-world challenges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-blue-600 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Research Areas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Publications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">News & Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-blue-600 pb-2">Research Areas</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Machine Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Computer Vision</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Natural Language Processing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Robotics & Automation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">AI Ethics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-blue-600 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">AI Innovation Campus, Berlin, Germany</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <span className="text-gray-300">+49 30 1234 5678</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:info@ncai-research.org" className="text-gray-300 hover:text-blue-400 transition-colors">info@ncai-research.org</a>
              </li>
              <li className="flex items-center">
                <FaRegClock className="text-blue-400 mr-3" />
                <span className="text-gray-300">Mon-Fri: 9:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} NCAI Research Centre of Artificial Intelligence. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;