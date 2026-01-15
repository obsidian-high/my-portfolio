'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { MapPin, ArrowUpRight, Github, Linkedin, Mail, Terminal, Database } from 'lucide-react';
import Shapes from './Shapes';

// --- 1. DATA ---
const heroSlides = [
  {
    id: 1,
    role: "Data Analyst",
    desc: "I transform raw data into clear, actionable insights using Python & SQL.",
    color: "text-cyan-400",
    icon: <Database className="text-cyan-400 mb-2" size={32} />
  },
  {
    id: 2,
    role: "Software Developer",
    desc: "Building high-performance applications with Next.js, React, and modern UI.",
    color: "text-purple-400",
    icon: <Terminal className="text-purple-400 mb-2" size={32} />
  }
];

// --- 2. ANIMATION VARIANTS ---
// These must be defined OUTSIDE the component to avoid re-creation on every render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger effect
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

// --- 3. COMPONENT ---
export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto-switch text every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[index];

  return (
    <section className="min-h-screen pt-20 pb-20 px-4 md:px-8 flex flex-col justify-center relative overflow-hidden">
      
      {/* 3D Background */}
      <Shapes />

      {/* Logo Fade In */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-6 left-6 md:left-10 z-50"
      >
        <div className="relative w-20 h-20 md:w-28 md:h-28">
          {/* Ensure logo.png exists in /public folder */}
          <Image src="/logo.png" alt="Logo" fill className="object-contain invert" />
        </div>
      </motion.div>

      {/* Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-full md:h-[600px] z-10"
      >
        
        {/* CARD 1: TEXT SWITCHER */}
        <motion.div variants={cardVariants} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 col-span-1 md:col-span-2 md:row-span-2 border border-white/20 flex flex-col justify-between overflow-hidden relative">
          
          <div className="h-full flex flex-col justify-center">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5 }}
              >
                {currentSlide.icon}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Available for work</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
                  arden.
                </h1>
                
                <h2 className={`text-3xl font-bold mb-4 ${currentSlide.color}`}>
                  {currentSlide.role}
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed">
                  {currentSlide.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4 mt-8 relative z-20">
             <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
               View Work <ArrowUpRight size={18} />
             </a>
             <a href="#contact" className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
               Contact Me
             </a>
          </div>
        </motion.div>

        {/* CARD 2: PHOTO */}
        <motion.div variants={cardVariants} className="bg-black/20 backdrop-blur-md rounded-3xl col-span-1 md:col-span-1 md:row-span-2 relative overflow-hidden border border-white/10 group">
          <Image 
            src="/me.jpg" 
            alt="arden" 
            fill 
            className="object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
          />
        </motion.div>

        {/* CARD 3: LOCATION */}
        <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-md rounded-3xl p-6 col-span-1 flex flex-col justify-center items-center text-center border border-white/10 hover:bg-white/10 transition-colors">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-3">
            <MapPin size={24} />
          </div>
          <h3 className="font-bold text-white">Based in</h3>
          <p className="text-gray-400">Nairobi, KENYA</p>
        </motion.div>

        {/* CARD 4: SOCIALS */}
        <motion.div variants={cardVariants} className="bg-black/40 backdrop-blur-md rounded-3xl p-6 col-span-1 flex flex-col justify-center border border-white/10 text-white">
          <h3 className="font-bold mb-4 text-center text-gray-300">Connect</h3>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-cyan-400 hover:scale-110 transition-all"><Github size={28} /></a>
            <a href="#" className="hover:text-blue-400 hover:scale-110 transition-all"><Linkedin size={28} /></a>
            <a href="#" className="hover:text-green-400 hover:scale-110 transition-all"><Mail size={28} /></a>
          </div>
        </motion.div>

        {/* CARD 5: EXPERTISE */}
        <motion.div variants={cardVariants} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 col-span-1 md:col-span-3 flex flex-col md:flex-row items-center justify-between border border-white/10">
           <div className="mb-4 md:mb-0">
             <h3 className="text-gray-400 font-medium text-sm uppercase tracking-widest mb-1">Stack</h3>
             <p className="text-2xl font-bold text-white">Full Stack & Data Science</p>
           </div>
           <div className="flex flex-wrap gap-3 justify-center md:justify-end">
             {['Python', 'SQL', 'React', 'Next.js', 'PowerBI', 'Tableau'].map((tech) => (
               <span key={tech} className="px-4 py-2 bg-white/10 border border-white/5 rounded-lg text-sm font-semibold text-gray-200 hover:bg-white/20 transition-colors">
                 {tech}
               </span>
             ))}
           </div>
        </motion.div>

      </motion.div>
    </section>
  );
}