"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GalleryPage = () => {
  // Gallery categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'research', name: 'Research' },
    { id: 'projects', name: 'Projects' },
    { id: 'team', name: 'Team' },
    { id: 'events', name: 'Events' },
    { id: 'facilities', name: 'Facilities' }
  ];

  // Sample gallery items (replace with your actual images)
  const galleryItems = [
    { id: 1, category: 'research', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Research Lab' },
    { id: 2, category: 'projects', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Smart City Project' },
    { id: 3, category: 'team', src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Team Working' },
    { id: 4, category: 'events', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80', alt: 'Tech Conference' },
    { id: 5, category: 'facilities', src: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Modern Lab' },
    { id: 6, category: 'research', src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80', alt: 'Data Analysis' },
    { id: 7, category: 'projects', src: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80', alt: 'Urban Project' },
    { id: 8, category: 'team', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Team Meeting' },
    { id: 9, category: 'events', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Hackathon' },
    { id: 10, category: 'facilities', src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Equipment' },
    { id: 11, category: 'research', src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Experiments' },
    { id: 12, category: 'projects', src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80', alt: 'Project Showcase' }
  ];

  // State for filtering and lightbox
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter gallery items
  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.alt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Open lightbox
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Navigate lightbox
  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
    } else {
      newIndex = (currentImageIndex + 1) % filteredItems.length;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-blue-900/30 z-10"></div>
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
            alt="Gallery" 
            className="w-full h-full object-cover"
            fill
            priority
          />
        </motion.div>
        
        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300">
                Gallery
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Explore our work through images of projects, team, and facilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search gallery..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600 text-center md:text-left">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-medium text-lg">{item.alt}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium text-gray-600 mb-4">No items found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            <FaTimes />
          </button>

          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-6 text-white text-3xl hover:text-gray-300 transition-colors md:left-12"
          >
            <FaChevronLeft />
          </button>

          <div className="relative w-full max-w-6xl h-full max-h-[90vh]">
            <Image
              src={filteredItems[currentImageIndex].src}
              alt={filteredItems[currentImageIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-6 text-white text-3xl hover:text-gray-300 transition-colors md:right-12"
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-6 left-0 right-0 text-center text-white">
            {filteredItems[currentImageIndex].alt}
            <div className="mt-2">
              {currentImageIndex + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;