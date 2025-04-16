"use client";

import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Shield, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });
  
  const [isHovered, setIsHovered] = useState(null);

  const benefits = [
    {
      text: "Streamline information management across all departments",
      icon: <Users className="h-5 w-5 text-indigo-300" />,
      highlight: "Streamline"
    },
    {
      text: "Reduce search time by up to 70% with smart tagging system",
      icon: <Clock className="h-5 w-5 text-indigo-300" />,
      highlight: "70%"
    },
    {
      text: "Enhance collaboration with seamless document sharing",
      icon: <Sparkles className="h-5 w-5 text-indigo-300" />,
      highlight: "collaboration"
    },
    {
      text: "Enterprise-grade security and compliance features",
      icon: <Shield className="h-5 w-5 text-indigo-300" />,
      highlight: "security"
    }
  ];

  // Fixed typing for the event parameter
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Fixed RegExp issue
  const highlightWord = (text: string, highlight: string) => {
    // Using a string directly instead of template literal in RegExp constructor
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? 
            <span key={i} className="text-white font-semibold">{part}</span> : 
            part
        )}
      </>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600 opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-400 opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left column - Content */}
          <motion.div variants={itemVariants}>
            <motion.span 
              className="inline-block px-4 py-1 rounded-full bg-indigo-800 text-indigo-200 font-medium text-sm mb-6"
              whileHover={{ scale: 1.05, backgroundColor: "#4338ca" }}
              transition={{ duration: 0.2 }}
            >
              Get Started Today
            </motion.span>

            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Ready to transform your
              <span className="relative ml-2">
                <span className="relative z-10">information management</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-indigo-500 opacity-40 rounded-sm z-0"></span>
              </span>
              ?
            </motion.h2>

            <motion.p 
              className="text-lg text-indigo-100 mb-8"
              variants={itemVariants}
            >
              Join the thousands of organizations that have revolutionized their approach to knowledge management with MEMOtag's intelligent tagging system.
            </motion.p>

            <motion.div 
              className="mb-8 space-y-5"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mr-3 flex-shrink-0 bg-indigo-800 rounded-full p-1.5">
                    {benefit.icon}
                  </div>
                  <p className="text-indigo-100">
                    {highlightWord(benefit.text, benefit.highlight)}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={containerVariants}
            >
              <motion.button 
                className="px-6 py-3 bg-white text-indigo-900 rounded-lg font-medium shadow-lg hover:bg-indigo-50 transition-all duration-300 text-center flex items-center justify-center"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Get Started Now
              </motion.button>
              
              <motion.button 
                className="px-6 py-3 border border-indigo-300 rounded-lg font-medium hover:bg-indigo-800 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ 
                  scale: 1.03,
                  borderColor: "#ffffff" 
                }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                Schedule a Demo
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:ml-3 transition-all duration-300" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-xl border border-indigo-100"
            variants={itemVariants}
            whileHover={{ 
              boxShadow: "0 20px 40px rgba(66, 56, 157, 0.2)",
              y: -5
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Start your free 14-day trial</h3>
            <p className="text-gray-600 mb-6">No credit card required. Full access to all features.</p>
            
            <form className="space-y-4">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 transition-all duration-300"
                  placeholder="name"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 transition-all duration-300"
                  placeholder="abcd@company.com"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  id="company"
                  value={formState.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 transition-all duration-300"
                  placeholder="memotag Inc."
                />
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Job Role</label>
                <select
                  id="role"
                  value={formState.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 transition-all duration-300"
                >
                  <option value="">Select your role</option>
                  <option value="executive">Executive</option>
                  <option value="manager">Manager</option>
                  <option value="individual">Individual Contributor</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg font-medium shadow-md hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 mt-4"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(79, 70, 229, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
              </motion.button>
            </form>
            
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-xs text-gray-600">No credit card</span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-xs text-gray-600">Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-xs text-gray-600">Full support</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}