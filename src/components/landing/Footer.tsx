import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, X } from 'lucide-react';

interface FooterProps {
  brandName?: string;
  links?: {
    name: string;
    path: string;
  }[];
  socialLinks?: {
    name: string;
    icon: React.ReactNode;
    path: string;
  }[];
  currentYear?: number;
}

export function Footer({ 
  links = [
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
    { name: "Contact", path: "#" }
  ],
  socialLinks = [
    { name: "Github", icon: <Github size={20} />, path: "#" },
    { name: "X", icon: <X size={20} />, path: "#" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, path: "#" },
    { name: "Instagram", icon: <Instagram size={20} />, path: "#" }
  ],
  brandName = "The World's Largest Hackathon",
  currentYear = new Date().getFullYear()
}: FooterProps) {
  return (
    <footer className="bg-background-primary text-text-primary px-4 pt-12 pb-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((socialLink) => (
              <Link to={socialLink.path} key={socialLink.name} className="text-gray-400 hover:text-white">
                {socialLink.icon}
              </Link>
            ))}
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            © {currentYear} {brandName}. All rights reserved.<br />
            <div className="mt-2">
              {links.map((link, index) => (
                <React.Fragment key={`mobile-${index}`}>
                  {index > 0 && <span className="mx-2 hidden sm:inline">•</span>}
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-gray-400 transition-colors duration-300 text-xs sm:hidden"
                  >
                    {link.name}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 