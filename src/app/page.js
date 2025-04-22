"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ProjectsPage from "./components/projects";
import TechnologyPage from "./components/technology";
import Events from "./components/events";

import Mission from "./components/mission";
import Image from 'next/image';

const slides = [
  {
    id: 1,
    tag: "AI ACTION SUMMIT",
    title: "SMART CITY ",
    highlight: "LAB",
   
    desc: "Pioneering AI Research for Smart Urban Solutions at the National Center of Artificial Intelligence.",
    button: "Learn More →",
    image: "/images/image.png",
    badgeColor: "bg-white text-blue-900",
    textColor: "text-yellow-300",
    buttonColor: "bg-white text-blue-900 hover:bg-blue-100",
    gradient: "from-blue-900/80 via-blue-900/30 to-black/80"
  },
  {
    id: 2,
    tag: "INNOVATION ",
    title: "INNOVATION",
    highlight: "RESEARCH",
    
    desc: "Developing cutting-edge AI solutions for sustainable urban envirionments.",
    button: "View Projects →",
    image: "/images/weedbot.jpg",
    badgeColor: "bg-green-400 text-gray-900",
    textColor: "text-green-300",
    buttonColor: "bg-yellow-400 text-gray-900 hover:bg-yellow-300",
    gradient: "from-purple-900/80 via-purple-900/30 to-black/80"
  },
  {
    id: 3,
    tag: "AI IN HEALTHCARE",
    title: "SMART ",
    highlight: "SOLUTIONS",

    desc: "Creating intelligent systems that imporve the quality of urban living",
    button: "Read Case Study →",
    image: "/images/meeting.jpg",
    badgeColor: "bg-blue-300 text-gray-900",
    textColor: "text-yellow-300",
    buttonColor: "bg-green-400 text-white hover:bg-pink-500",
    gradient: "from-green-900/80 via-green-900/30 to-black/80"
  }
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isDragging]);

  const current = slides[index];

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      setDirection(-1);
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (info.offset.x < -threshold) {
      setDirection(1);
      setIndex((prev) => (prev + 1) % slides.length);
    }
  };

  const goToSlide = (newIndex) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    })
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
     

      {/* Centered Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          className="h-full w-full"
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <div className="absolute inset-0">
                <Image
                  src={current.image}
                  className="w-full h-full object-cover"
                  alt={current.title}
                  height={4000}
                  width={4000}
                />
                {/* Black overlay with adjustable opacity */}
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 md:px-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="max-w-2xl mx-auto"
                >
                  <span
                    className={`${current.badgeColor} px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block`}
                  >
                    {current.tag}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                    {current.title}{" "}
                    <span className={`${current.textColor}`}>{current.highlight}</span>{" "}
                    {current.after}
                  </h2>
                  <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto">{current.desc}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${current.buttonColor} px-6 py-3 rounded-md font-semibold transition`}
                  >
                    {current.button}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === index ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setDirection(-1);
            setIndex((prev) => (prev - 1 + slides.length) % slides.length);
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % slides.length);
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      <ProjectsPage/>
      <TechnologyPage/>

      <Events/>
      <Mission/>
     
    </div>
  );
}