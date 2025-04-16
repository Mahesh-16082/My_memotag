"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Users, ArrowRight, Building, Award, TrendingUp, ChevronRight, BarChart2 } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function TractionSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      value: "100,000+",
      label: "Active Users",
      description: "Growing community of professionals trusting MEMOtag",
      color: "from-indigo-400 to-blue-500"
    },
    {
      icon: <Building className="w-8 h-8 text-indigo-600" />,
      value: "500+",
      label: "Enterprise Clients",
      description: "Leading companies implementing our solutions",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      value: "98%",
      label: "User Satisfaction",
      description: "Based on our latest customer feedback survey",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      value: "40%",
      label: "YoY Growth",
      description: "Sustained expansion across all metrics",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content: "MEMOtag transformed how our organization manages critical information. Implementation was seamless, and the ROI has been incredible.",
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Michael Chen",
      role: "Director of Operations",
      content: "The analytics capabilities alone justify the investment. We've seen significant improvements in our operational efficiency.",
      avatar: "/api/placeholder/100/100"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Fixed this variant to work with TypeScript
  const counterVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { 
        delay: 0.5 + (i * 0.1),
        duration: 0.8
      }
    })
  };

  // Fixed this variant to properly type the animation properties
  const backgroundVariants = {
    initial: { 
      opacity: 0.6,
      scale: 1
    },
    animate: { 
      opacity: [0.6, 0.8, 0.6],
      scale: [1, 1.05, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute -top-20 right-20 w-96 h-96 bg-indigo-50 rounded-full opacity-60 blur-3xl"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-40 -left-20 w-72 h-72 bg-blue-50 rounded-full opacity-60 blur-3xl"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
            }}
            whileHover={{ scale: 1.05, backgroundColor: "#e0e7ff" }}
          >
            Our Impact
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
              }}
            >
              Proven Traction & 
            </motion.span>{" "}
            <motion.span 
              className="inline-block text-indigo-600 relative"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, transition: { duration: 0.6, delay: 0.4 } }
              }}
            >
              Results
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-300 rounded-full"
                initial={{ width: 0 }}
                animate={controls}
                variants={{
                  visible: { width: '100%', transition: { duration: 0.6, delay: 0.6 } }
                }}
              />
            </motion.span>
          </h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
            }}
          >
            MEMOtag is trusted by organizations of all sizes across industries to 
            revolutionize their information management.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-transparent hover:border-indigo-200 transition-all duration-300 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)"
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient that appears on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 z-0`}
                animate={{ 
                  opacity: hoveredIndex === index ? 0.05 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <motion.div 
                  className="mb-4 p-3 bg-indigo-100 rounded-full"
                  whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.h3 
                  className="text-3xl font-bold text-gray-900 mb-2"
                  custom={index}
                  variants={counterVariants}
                >
                  {stat.value}
                </motion.h3>
                
                <h4 className="text-lg font-semibold text-indigo-600 mb-2">{stat.label}</h4>
                <p className="text-gray-600">{stat.description}</p>
                
                {/* Hidden detail that appears on hover */}
                <motion.div
                  className="mt-4 pt-4 border-t border-gray-100 w-full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#" className="text-indigo-600 font-medium flex items-center justify-center text-sm hover:text-indigo-800">
                    Learn more <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Study Preview */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 p-8 md:p-10">
              <motion.div 
                className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Case Study
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                How GlobalTech increased productivity by 37% with MEMOtag
              </h3>
              
              <p className="text-gray-600 mb-6">
                Learn how one of the fastest-growing technology companies implemented MEMOtag to streamline 
                their knowledge management processes and significantly enhance team productivity.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Reduced onboarding time by 45%",
                  "Eliminated knowledge silos across 12 departments",
                  "Improved decision-making speed by 28%"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <BarChart2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              
              <motion.button
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300 group"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(79, 70, 229, 0.2)" }}
                whileTap={{ scale: 0.97 }}
              >
                Read full case study
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                >
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:ml-3 transition-all duration-300" />
                </motion.span>
              </motion.button>
            </div>
            
            <div className="md:col-span-2 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center p-8">
              <motion.img 
                src="m.png" 
                alt="Case study preview" 
                className="rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mt-16 grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(79, 70, 229, 0.1)", borderColor: "#e0e7ff" }}
            >
              <div className="flex items-start">
                <motion.img 
                  src="person.jpg" 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                />
                <div>
                  <div className="flex items-center mb-1">
                    {Array(5).fill(0).map((_, i) => (
                      <motion.svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 text-yellow-400" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-indigo-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-white border border-indigo-200 rounded-lg shadow-sm text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors duration-300 group"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(79, 70, 229, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Read our success stories
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            >
              <ArrowRight className="ml-2 w-5 h-5 group-hover:ml-3 transition-all duration-300" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}