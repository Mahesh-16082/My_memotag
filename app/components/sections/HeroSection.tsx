"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Fix the initial state type to match what we're setting it to later
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null); // Add proper type
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define animation properties as a constant to avoid TypeScript errors
  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const, // Type assertion
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Decorative elements - only render on client side */}
      {isMounted && (
        <div className="absolute inset-0">
          <motion.div 
            animate={floatAnimation}
            className="absolute top-20 right-10 w-64 h-64 bg-indigo-200 rounded-full opacity-30 blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{
              y: [0, -15, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse" as const,
                ease: "easeInOut",
                delay: 1
              }
            }}
            className="absolute -top-10 left-1/4 w-48 h-48 bg-blue-200 rounded-full opacity-30 blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{
              y: [0, -15, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse" as const,
                ease: "easeInOut",
                delay: 2
              }
            }}
            className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full opacity-30 blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{
              y: [0, -15, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse" as const,
                ease: "easeInOut",
                delay: 1.5
              }
            }}
            className="absolute bottom-40 right-1/4 w-56 h-56 bg-pink-200 rounded-full opacity-20 blur-3xl"
          ></motion.div>
        </div>
      )}

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%236366f1\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-20 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Text content */}
          <motion.div 
            className="flex-1 text-center lg:text-left lg:ml-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium text-sm mb-6 shadow-lg"
            >
              Revolutionizing Dementia Care with AI
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Bringing Joy Back to <span className="italic">Memory Care</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              MemoTag creates meaningful moments of connection through personalized AI technology that adapts to each individual's unique journey, bringing comfort to patients and peace of mind to those who care for them.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.button 
                className="relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)"
                }}
                onMouseEnter={() => setHoveredButton("demo")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Request Demo
                {hoveredButton === "demo" && isMounted && (
                  <motion.span 
                    className="absolute inset-0 bg-white rounded-lg -z-10" 
                    layoutId="buttonHighlight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                  />
                )}
              </motion.button>
              <motion.button 
                className="relative px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md border border-indigo-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -5px rgba(79, 70, 229, 0.2)"
                }}
                onMouseEnter={() => setHoveredButton("learn")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Learn More
                {hoveredButton === "learn" && isMounted && (
                  <motion.span 
                    className="absolute inset-0 bg-indigo-100 rounded-lg -z-10" 
                    layoutId="buttonHighlight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                  />
                )}
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Hero illustration */}
          {isMounted && (
            <motion.div 
              className="flex-1 w-full max-w-lg mx-auto lg:mx-0 mt-12 lg:mt-0 lg:mr-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full h-96 lg:h-[450px] max-w-lg mx-auto">
                {/* Background gradient */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50"></div>
                  
                  {/* Central elements */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 rounded-full flex items-center justify-center shadow-xl"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="bg-white bg-opacity-20 w-28 h-28 sm:w-40 sm:h-40 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 sm:h-20 sm:w-20 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18c-3.6 0-8.4-4-8.4-9.3C3.6 3.98 7.5 3 12 3c4.5 0 8.4.98 8.4 5.7 0 5.3-4.8 9.3-8.4 9.3zM7 10.1a5 5 0 008 0" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M8 4v2M16 4v2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-3M9 18h6" />
                      </svg>
                    </div>
                  </motion.div>
                  
                  {/* Static decorative elements */}
                  <div className="absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-indigo-200 rounded-full opacity-60"></div>
                  <div className="absolute bottom-12 left-10 w-12 h-12 sm:w-16 sm:h-16 bg-purple-200 rounded-full opacity-60"></div>
                  <div className="absolute top-1/4 left-6 w-8 h-8 sm:w-12 sm:h-12 bg-pink-200 rounded-full opacity-50"></div>
                  <div className="absolute bottom-1/4 right-6 w-10 h-10 sm:w-14 sm:h-14 bg-blue-200 rounded-full opacity-50"></div>
                  
                  {/* Animated features */}
                  {[0, 1, 2, 3, 4].map((index) => {
                    // Calculate positions in a circular arrangement
                    const angle = (index * 72) * Math.PI / 180;
                    const radius = 130;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={index}
                        className="absolute top-1/2 left-1/2 flex items-center justify-center"
                        style={{
                          width: "90px",
                          height: "90px",
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                        animate={{
                          y: [0, index % 2 === 0 ? -8 : 8, 0]
                        }}
                        transition={{
                          duration: 3 + index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className={`
                          w-full h-full rounded-full shadow-lg flex items-center justify-center
                          ${index % 3 === 0 ? 'bg-indigo-500' : 
                            index % 3 === 1 ? 'bg-purple-500' : 'bg-blue-500'}
                        `}>
                          <div className="text-white text-xs sm:text-sm font-medium">
                            {index === 0 ? 'Memory' : 
                             index === 1 ? 'Joy' : 
                             index === 2 ? 'Care' : 
                             index === 3 ? 'Connect' : 'Comfort'}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <g opacity="0.6">
                      <line x1="50%" y1="50%" x2="30%" y2="25%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
                      <line x1="50%" y1="50%" x2="70%" y2="25%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
                      <line x1="50%" y1="50%" x2="20%" y2="60%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
                      <line x1="50%" y1="50%" x2="80%" y2="60%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
                      <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
                    </g>
                  </svg>
                </div>
                
                {/* Small floating elements */}
                <motion.div 
                  className="absolute -right-6 top-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
                  animate={{ 
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    repeatType: "reverse" as const
                  }}
                >
                  <div className="bg-indigo-100 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -left-6 bottom-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
                  animate={{ 
                    y: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatType: "reverse" as const
                  }}
                >
                  <div className="bg-purple-100 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </motion.div>
                
                {/* Bottom label */}
                <motion.div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 sm:px-6 py-2 rounded-full shadow-lg text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-base sm:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    MemoTag AI
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Personalized memory assistance</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Enhanced trusted by / stats section */}
        <motion.div 
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="text-center mb-10">
            <motion.div 
              className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-xs mb-4"
              whileHover={{ scale: 1.05 }}
            >
              TRUSTED BY HEALTHCARE PROFESSIONALS
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-800">Making a real difference in people's lives</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 items-center">
            {[
              { value: "800+", label: "Care providers using MemoTag daily" },
              { value: "90%", label: "Improvement in patient engagement" },
              { value: "12+", label: "Years of research and development" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center px-4"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.p 
                  className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm md:text-base text-gray-600 max-w-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced wave shape divider */}
      {isMounted && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <motion.path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,149.3C672,160,768,192,864,170.7C960,149,1056,75,1152,53.3C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              initial={{ pathLength: 0, opacity: 0.2 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            ></motion.path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default HeroSection;