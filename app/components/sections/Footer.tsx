import React from 'react';
import { Mail, MapPin, Phone, Twitter, Linkedin, Github, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Security", href: "#" },
      { name: "Enterprise", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Case Studies", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#" }
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Community", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Webinars", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR Compliance", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-50 to-purple-50">
      {/* Wave divider */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-indigo-50 transform rotate-180">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              {/* Replaced M icon and MEMOtag text with image */}
              <img src="icon.jpg" alt="Company Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Revolutionizing information management with intelligent tagging systems that make knowledge accessible, organized, and actionable.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start group">
                <div className="p-2 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>
                <span className="text-gray-600 ml-3 mt-1">
                  123 Innovation Drive, Tech City, CA 94107
                </span>
              </div>
              <div className="flex items-start group">
                <div className="p-2 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-indigo-600" />
                </div>
                <span className="text-gray-600 ml-3 mt-1">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start group">
                <div className="p-2 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-indigo-600" />
                </div>
                <span className="text-gray-600 ml-3 mt-1">contact@memotag.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).slice(0, 3).map(([category, links], index) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-5 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 relative group"
                    >
                      <span className="relative z-10">
                        {link.name}
                      </span>
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-200 mt-12 pt-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center bg-white p-6 rounded-xl shadow-sm">
            <div className="mb-6 md:mb-0 max-w-md">
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Stay up to date</h3>
              <p className="text-gray-600">Get product updates, company news, and more.</p>
            </div>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                className="px-4 py-3 w-full sm:w-64 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                placeholder="Your email address"
              />
              <button className="mt-2 sm:mt-0 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-r-lg hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300 shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social and copyright */}
        <div className="border-t border-gray-200 mt-10 pt-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-5 mb-6 md:mb-0">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-500 hover:text-indigo-600 transition-colors duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-indigo-50"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
            <div className="text-gray-500 text-sm">
              © {year} <span className="font-medium">MEMOtag</span>. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 text-sm hover:text-indigo-600 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}