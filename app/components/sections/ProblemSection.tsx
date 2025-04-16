"use client"

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Reset animation state on mount to ensure it starts hidden
    setIsVisible(false);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set visible when the component enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset visibility when component leaves viewport
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Lower threshold to trigger earlier when scrolling
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Reframed statistics to focus on progress and hope
  const stats = [
    {
      value: "55M+",
      label: "People we can help worldwide",
      description: "Our growing community of support and innovation"
    },
    {
      value: "70%",
      label: "Can benefit from memory assistance",
      description: "Technology creating new paths to independence"
    },
    {
      value: "$1.3T",
      label: "Potential for positive impact",
      description: "Transforming care through smart technology"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="problem-section" 
      className="bg-[#f0f2ff] py-24 px-6 sm:px-10 md:px-12 lg:px-16 relative overflow-hidden"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#e8ecff] rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[#e8e6ff] rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-60 right-1/4 w-48 h-48 bg-[#ede8ff] rounded-full opacity-60 blur-3xl"></div>
      </div>

      {/* Add a container with max width and margin auto for consistent margins */}
      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Reframed section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-[#e8e6ff] text-indigo-700 font-medium text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The Opportunity
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming <span className="text-indigo-600">Dementia Care</span> Together
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-xl">
            We're creating a brighter future for those affected by dementia through innovative technology
            that empowers patients and supports caregivers.
          </p>
        </motion.div>

        {/* Enhanced stats with more vibrant design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400"></div>
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-[#f0f2ff] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              <h3 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-3">{stat.value}</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</h4>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Reframed challenge details to opportunity details */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Visualization */}
          <motion.div 
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-[#eceeff] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Creating Better Solutions Together</h3>
              
              {/* Reframed challenges as opportunities */}
              {[
                { 
                  title: "Memory Enhancement", 
                  description: "Innovative tools that adapt to personal memory patterns",
                  icon: "✨"
                },
                { 
                  title: "Safety & Independence", 
                  description: "Smart technology promoting autonomy with peace of mind",
                  icon: "🛡️" 
                },
                { 
                  title: "Caregiver Support", 
                  description: "Resources that ease burdens and strengthen relationships",
                  icon: "💙"
                },
                { 
                  title: "Continuous Care", 
                  description: "Seamless monitoring that connects patients and providers",
                  icon: "🔄"
                }
              ].map((opportunity, index) => (
                <motion.div 
                  key={index}
                  className="mb-6 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                      <span className="text-xl" role="img" aria-label="icon">{opportunity.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">{opportunity.title}</h4>
                      <p className="text-gray-600">{opportunity.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Description text */}
          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">A New Approach to Memory Care</h3>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                We're moving beyond episodic care to create continuous, adaptive support systems that
                evolve with each person's unique journey with dementia.
              </p>
              <p>
                Our technology learns and grows with users, adapting to changing needs while preserving
                dignity, independence, and joy in daily life.
              </p>
              <p>
                By combining advanced AI with compassionate design, we're creating early intervention
                opportunities that can significantly improve quality of life for both patients and caregivers.
              </p>
              <div className="pt-8">
                <motion.button 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-lg font-medium rounded-xl shadow-lg hover:from-indigo-700 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover Our Solution
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;