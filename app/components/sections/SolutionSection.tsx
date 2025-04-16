"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false); // Start with false to trigger only on scroll
  const containerRef = useRef(null);
  
  // Use useInView with appropriate settings for scroll-triggered animations
  const isInView = useInView(containerRef, { 
    once: true, 
    amount: 0.1,  // Lower threshold means it triggers more easily
    margin: "0px 0px -200px 0px" // Negative bottom margin makes it trigger earlier
  });
  
  // Parallax effect for background elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const springBackgroundY = useSpring(backgroundY, { stiffness: 100, damping: 30 });

  // Update visibility state based on scroll position
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  // Solution steps with improved icons
  const solutionSteps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Smart Memory Tags",
      description: "Physical tracking devices with AI-powered monitoring to help locate essential items."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Cognitive Pattern Analysis",
      description: "Advanced algorithms that detect changes in memory patterns and daily routines."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Caregiver Support Network",
      description: "Integrated communication platform keeping family members and healthcare providers informed."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Adaptive Assistance",
      description: "Personalized reminders and support that evolve with the progression of memory challenges."
    }
  ];

  // Define animation variants with proper typing
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  // Fixed card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1, 
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <section 
      id="solution-section" 
      ref={containerRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: springBackgroundY }}
          className="absolute top-40 right-20 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-3xl"
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-6">
              Our Solution
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-600 relative">
              How MemoTag Works
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-300 rounded-full"
                initial={{ width: 0 }}
                animate={isVisible ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            MemoTag combines AI-powered technology with personalized care to create 
            a comprehensive solution for memory support and dementia care.
          </motion.p>
        </div>

        {/* Solution diagram */}
        <div className="mb-20 relative">
          <motion.div 
            className="w-full h-1 bg-indigo-200 absolute top-1/2 left-0 transform -translate-y-1/2 hidden md:block"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1 }}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {solutionSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 relative z-10 border border-indigo-50 hover:border-indigo-200 transition-all duration-300"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)",
                  borderColor: "#818cf8"
                }}
              >
                <motion.div 
                  className="w-16 h-16 mx-auto mb-6 bg-indigo-100 rounded-full flex items-center justify-center"
                  initial="initial"
                  animate="animate"
                  variants={floatingAnimation}
                  whileHover={{ scale: 1.1, backgroundColor: "#e0e7ff" }}
                >
                  {step.icon}
                </motion.div>
                
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-500 rounded-full text-white flex items-center justify-center font-bold text-sm hidden md:flex">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Platform details */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Platform visualization */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-50"
              whileHover={{ boxShadow: "0 20px 40px rgba(79, 70, 229, 0.15)" }}
            >
              <motion.div 
                className="p-1 bg-gradient-to-r from-indigo-500 to-blue-500"
                initial={{ width: "0%" }}
                animate={isVisible ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.8 }}
              />
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The MemoTag Platform</h3>
                
                {/* Dashboard mockup */}
                <motion.div 
                  className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px rgba(79, 70, 229, 0.1)",
                    borderColor: "#e0e7ff" 
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium text-gray-700">MemoTag Dashboard</div>
                    <div className="flex space-x-2">
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-red-400"
                        whileHover={{ scale: 1.2 }}
                      />
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-yellow-400"
                        whileHover={{ scale: 1.2 }}
                      />
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-green-400"
                        whileHover={{ scale: 1.2 }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <motion.div 
                      className="h-24 bg-white rounded-md shadow-sm p-3"
                      whileHover={{ y: -2, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)" }}
                    >
                      <div className="w-full h-3 bg-indigo-100 rounded-full mb-2">
                        <motion.div 
                          className="h-full bg-indigo-500 rounded-full"
                          initial={{ width: "0%" }}
                          animate={isVisible ? { width: "75%" } : { width: "0%" }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <div className="w-3/4 h-3 bg-gray-100 rounded-full mb-2"></div>
                      <div className="w-1/2 h-3 bg-gray-100 rounded-full"></div>
                    </motion.div>
                    
                    <motion.div 
                      className="h-24 bg-white rounded-md shadow-sm p-3"
                      whileHover={{ y: -2, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)" }}
                    >
                      <div className="w-full h-3 bg-indigo-100 rounded-full mb-2">
                        <motion.div 
                          className="h-full bg-green-500 rounded-full"
                          initial={{ width: "0%" }}
                          animate={isVisible ? { width: "60%" } : { width: "0%" }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                      <div className="w-3/4 h-3 bg-gray-100 rounded-full mb-2"></div>
                      <div className="w-1/2 h-3 bg-gray-100 rounded-full"></div>
                    </motion.div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="w-24 h-4 bg-gray-200 rounded-full"></div>
                    <motion.div 
                      className="w-16 h-6 bg-indigo-500 rounded-md cursor-pointer"
                      whileHover={{ scale: 1.05, backgroundColor: "#4f46e5" }}
                      whileTap={{ scale: 0.95 }}
                    />
                  </div>
                </motion.div>
                
                <div className="space-y-4">
                  {[
                    "Real-time tracking of essential items",
                    "Personalized memory support",
                    "Cognitive health insights",
                    "Seamless caregiver coordination"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0 }}
                      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      whileHover={{ x: 3 }}
                    >
                      <motion.div 
                        className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center"
                        whileHover={{ backgroundColor: "#dcfce7", scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                      <div className="text-gray-700">{feature}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Technology details */}
          <motion.div 
            className="lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                Our Technology
              </motion.span>
            </h3>
            
            <div className="space-y-6 text-gray-600">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                MemoTag combines physical tracking devices with advanced machine learning algorithms
                to create a comprehensive dementia care solution that adapts to individual needs.
              </motion.p>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px rgba(79, 70, 229, 0.1)", 
                  borderColor: "#e0e7ff" 
                }}
              >
                <h4 className="text-lg font-semibold text-indigo-600 mb-4">AI-Powered Memory Support</h4>
                <p className="mb-4">
                  Our proprietary algorithms learn from individual behavior patterns to provide
                  personalized assistance that evolves as memory challenges progress.
                </p>
                <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500"
                    initial={{ width: "0%" }}
                    animate={isVisible ? { width: "90%" } : { width: "0%" }}
                    transition={{ duration: 1.5 }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Pattern Recognition</span>
                  <span>90% Accuracy</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px rgba(79, 70, 229, 0.1)", 
                  borderColor: "#e0e7ff" 
                }}
              >
                <h4 className="text-lg font-semibold text-indigo-600 mb-4">Integrated Care Ecosystem</h4>
                <p>
                  MemoTag connects patients, caregivers, and healthcare providers through a secure
                  platform that ensures everyone has the information they need when they need it.
                </p>
              </motion.div>
              
              <div className="pt-6">
                <motion.button 
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 group"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>See MemoTag in Action</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 group-hover:ml-3 transition-all duration-300" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      repeatType: "mirror" as const, 
                      ease: "easeInOut",
                      repeatDelay: 1
                    }}
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </motion.svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-indigo-100"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div 
              className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center"
              animate={{
                y: [0, -8, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "reverse" as const, 
                ease: "easeInOut" 
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-yellow-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "MemoTag has given me peace of mind knowing my mother can maintain her independence while staying safe. The app is so intuitive and the devices are discreet. We couldn't be happier with the support it provides."
              </p>
              <p className="font-medium text-indigo-700">Sarah T., Caregiver</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;