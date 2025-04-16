'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add explicit type to the name parameter
  const toggleDropdown = (name: string) => {
    if (dropdownOpen === name) {
      setDropdownOpen("");
    } else {
      setDropdownOpen(name);
    }
  };

  const solutions = [
    { name: "Document Management", href: "#", description: "Organize and access your files easily" },
    { name: "Knowledge Base", href: "#", description: "Create and share company knowledge" },
    { name: "Team Collaboration", href: "#", description: "Work together seamlessly" },
    { name: "Enterprise Search", href: "#", description: "Find information instantly" },
  ];

  const resources = [
    { name: "Documentation", href: "#", icon: "📄" },
    { name: "API Reference", href: "#", icon: "🔌" },
    { name: "Blog", href: "#", icon: "📝" },
    { name: "Case Studies", href: "#", icon: "📊" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-blue-50'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center pl-2 sm:pl-4">
            <a href="#" className="flex items-center group">
              <div className="h-10 w-32 relative transition-all duration-300 group-hover:scale-105">
                <img 
                  src="icon.jpg" 
                  alt="MEMOTAG Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown("solutions")}
                className="px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-700 flex items-center font-medium transition-colors duration-200"
              >
                Solutions
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              {dropdownOpen === "solutions" && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl py-3 z-40 border border-gray-100">
                  {solutions.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150"
                    >
                      <div className="font-medium text-indigo-600">{item.name}</div>
                      <div className="text-gray-500 text-xs mt-1">{item.description}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                onClick={() => toggleDropdown("resources")}
                className="px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-700 flex items-center font-medium transition-colors duration-200"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              {dropdownOpen === "resources" && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-3 z-40 border border-gray-100">
                  {resources.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150"
                    >
                      <span className="text-lg mr-3">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-700 font-medium transition-colors duration-200">
              Pricing
            </a>
            <a href="#" className="px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-700 font-medium transition-colors duration-200">
              About Us
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3 pr-2 sm:pr-4">
            <a href="#" className="px-4 py-2 text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-700 font-medium transition-colors duration-200">
              Log in
            </a>
            <a href="#" className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity duration-200 shadow-sm hover:shadow font-medium">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center pr-2">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            >
              {isMenuOpen ? 
                <X className="h-6 w-6" /> : 
                <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-6 px-6 shadow-lg rounded-b-xl">
          <div className="space-y-2">
            <div>
              <button
                onClick={() => toggleDropdown("mobile-solutions")}
                className="w-full flex justify-between items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 font-medium transition-colors duration-200"
              >
                Solutions
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${dropdownOpen === "mobile-solutions" ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen === "mobile-solutions" && (
                <div className="pl-4 space-y-1 mt-1 bg-gray-50 rounded-lg py-2">
                  {solutions.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-indigo-50 transition-colors duration-150"
                    >
                      <div className="font-medium text-indigo-600">{item.name}</div>
                      <div className="text-gray-500 text-xs mt-1">{item.description}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("mobile-resources")}
                className="w-full flex justify-between items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 font-medium transition-colors duration-200"
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${dropdownOpen === "mobile-resources" ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen === "mobile-resources" && (
                <div className="pl-4 space-y-1 mt-1 bg-gray-50 rounded-lg py-2">
                  {resources.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-indigo-50 transition-colors duration-150"
                    >
                      <span className="text-lg mr-3">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="block px-4 py-3 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 font-medium transition-colors duration-200">
              Pricing
            </a>
            <a href="#" className="block px-4 py-3 text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 font-medium transition-colors duration-200">
              About Us
            </a>

            <div className="pt-4 border-t border-gray-200 mt-4 space-y-2">
              <a href="#" className="block px-4 py-3 text-gray-700 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 font-medium transition-colors duration-200 text-center">
                Log in
              </a>
              <a href="#" className="block px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-center hover:opacity-90 transition-opacity duration-200 shadow-sm font-medium">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}