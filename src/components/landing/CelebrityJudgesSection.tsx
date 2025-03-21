import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, ExternalLink } from 'lucide-react';
import { 
  PIETER_LEVELS,
  GREG_ISENBERG,
  LOGAN_KILPATRICK,
  EVAN_YOU 
} from '../../assets/images';

interface CelebrityJudge {
  name: string;
  role: string;
  image: string;
  bio: string;
  links?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  }
}

interface CelebrityJudgesSectionProps {
  title?: string;
  subtitle?: string;
  judges?: CelebrityJudge[];
}

export function CelebrityJudgesSection({
  title = "Celebrity Judges",
  subtitle = "Meet our distinguished panel of industry leaders who will evaluate the final round of submissions",
  judges = [
    {
      name: "Evan You",
      role: "Creator of Vue.js",
      image: EVAN_YOU,
      bio: "Creator of Vue.js, core contributor to React, and open source advocate with a passion for building developer tools that simplify web development.",
      links: {
        twitter: "https://twitter.com/youyuxi",
        github: "https://github.com/yyx990803"
      }
    },
    {
      name: "Pieter Levels",
      role: "Founder of Nomad List",
      image: PIETER_LEVELS,
      bio: "Serial entrepreneur and maker of Nomad List, Remote OK, and other successful products. Expert in bootstrapping and building in public.",
      links: {
        twitter: "https://twitter.com/levelsio",
        website: "https://levels.io"
      }
    },
    {
      name: "Logan Kilpatrick",
      role: "Product Lead, Google AI Studio",
      image: LOGAN_KILPATRICK,
      bio: "Product leader focused on developer tools and AI applications. Previously developer advocate at OpenAI and engineering at Apple.",
      links: {
        twitter: "https://twitter.com/OfficialLoganK",
        linkedin: "https://www.linkedin.com/in/logankilpatrick/"
      }
    },
    {
      name: "Greg Isenberg",
      role: "CEO of Late Checkout",
      image: GREG_ISENBERG,
      bio: "Designer, entrepreneur, and investor. Expert in community-led products and scaling digital platforms through creative strategies.",
      links: {
        twitter: "https://twitter.com/gregisenberg",
        website: "https://www.gregisenberg.com/"
      }
    }
  ]
}: CelebrityJudgesSectionProps) {
  return (
    <div className="py-20 bg-gradient-to-b from-background-primary to-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {judges.map((judge, index) => (
            <motion.div
              key={judge.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="bg-background-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={judge.image} 
                  alt={judge.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-xl font-bold text-white">{judge.name}</div>
                  <div className="text-sm text-accent-blue">{judge.role}</div>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-300 text-sm mb-4">
                  {judge.bio}
                </p>
                
                {judge.links && (
                  <div className="flex space-x-3 mt-3">
                    {judge.links.twitter && (
                      <a 
                        href={judge.links.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-blue transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    {judge.links.github && (
                      <a 
                        href={judge.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-blue transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {judge.links.linkedin && (
                      <a 
                        href={judge.links.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-blue transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {judge.links.website && (
                      <a 
                        href={judge.links.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-blue transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 