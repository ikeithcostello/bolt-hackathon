import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin, ExternalLink, Mic } from 'lucide-react';
import { 
  PIETER_LEVELS,
  GREG_ISENBERG,
  LOGAN_KILPATRICK,
  KP,
  STEPH_SMITH 
} from '../../assets/images';

interface CelebrityJudge {
  name: string;
  role: string;
  image: string;
  bio: string;
  isHost?: boolean;
  highlights?: {
    icon: React.ReactNode;
    text: string;
    link?: string;
  }[];
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
  subtitle = "Led by our host Greg Isenberg, our distinguished panel of industry leaders will evaluate the final round of submissions",
  judges = [
    {
      name: "Greg Isenberg",
      role: "CEO of Late Checkout",
      image: GREG_ISENBERG,
      bio: "Designer, entrepreneur, and investor. Expert in community-led products and scaling digital platforms through creative strategies.",
      isHost: true,
      links: {
        twitter: "https://twitter.com/gregisenberg",
        website: "https://www.gregisenberg.com/"
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
        linkedin: "https://www.linkedin.com/in/logankilpatrick/",
        github: "https://github.com/logankilpatrick"
      }
    },
    {
      name: "KP",
      role: "Founder Relations at Paddle",
      image: KP,
      bio: "The \"Build In Public\" Guy. Running AI Launchpad & Founder Relations at Paddle. Known for his expertise in public building and startup growth.",
      links: {
        twitter: "https://twitter.com/thisiskp_"
      }
    },
    {
      name: "Steph Smith",
      role: "Pod Host at a16z",
      image: STEPH_SMITH,
      bio: "Digital strategist, author, and podcast host exploring the frontiers of technology and content. Previously led Trends at The Hustle (acquired by HubSpot).",
      links: {
        twitter: "https://twitter.com/stephsmithio",
        website: "https://stephsmith.io",
        linkedin: "https://www.linkedin.com/in/stephsmithedu/"
      }
    }
  ]
}: CelebrityJudgesSectionProps) {
  // Consistent animation settings
  const springTransition = { 
    type: "spring", 
    stiffness: 300, 
    damping: 20 
  };
  
  return (
    <div className="py-20 bg-gradient-to-b from-[#20253D] to-[#1A294F]">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Host card (Greg) - Always takes up 1 full row */}
          {judges.filter(judge => judge.isHost).map((judge) => (
            <motion.div
              key={judge.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-b from-blue-800/50 to-blue-900/70 shadow-[0_0_25px_rgba(59,130,246,0.3)] backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 shadow-xl lg:col-span-4 transform-gpu"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={judge.image} 
                      alt={judge.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Mic size={14} className="mr-1" />
                    HOST
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden">
                    <div className="text-xl font-bold text-white">{judge.name}</div>
                    <div className="text-sm text-accent-blue">{judge.role}</div>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="hidden md:block">
                    <div className="text-2xl font-bold text-white mb-1">{judge.name}</div>
                    <div className="text-blue-300 text-lg mb-4">{judge.role}</div>
                  </div>
                  
                  <p className="text-blue-300 text-md font-medium mb-4 italic">
                    "Join me as I host the World's Largest Hackathon, where we'll celebrate innovation and creativity on a global scale!"
                  </p>
                  
                  <p className="text-white text-md mb-4">
                    {judge.bio}
                  </p>
                  
                  {judge.links && (
                    <div className="flex space-x-4 mt-4">
                      {judge.links.twitter && (
                        <motion.a 
                          href={judge.links.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={springTransition}
                        >
                          <Twitter size={20} />
                        </motion.a>
                      )}
                      {judge.links.github && (
                        <motion.a 
                          href={judge.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={springTransition}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {judge.links.linkedin && (
                        <motion.a 
                          href={judge.links.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={springTransition}
                        >
                          <Linkedin size={20} />
                        </motion.a>
                      )}
                      {judge.links.website && (
                        <motion.a 
                          href={judge.links.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-100 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={springTransition}
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* All other judges with equal prominence */}
          {judges.filter(judge => !judge.isHost).map((judge, index) => (
            <motion.div
              key={judge.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 shadow-xl h-full transform-gpu"
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
                <p className="text-gray-300 text-sm mb-3">
                  {judge.bio}
                </p>
                
                {/* Show highlights for Steph Smith */}
                {judge.name === "Steph Smith" && judge.highlights && (
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 mb-3">
                    {judge.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start">
                        <div className="mr-1.5 mt-0.5 flex-shrink-0">
                          {highlight.icon}
                        </div>
                        <div className="truncate">
                          {highlight.link ? (
                            <a 
                              href={highlight.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-gray-300 hover:text-blue-300 transition-colors text-xs"
                            >
                              {highlight.text}
                            </a>
                          ) : (
                            <span className="text-gray-300 text-xs">{highlight.text}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {judge.links && (
                  <div className="flex space-x-3 mt-3">
                    {judge.links.twitter && (
                      <motion.a 
                        href={judge.links.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-blue transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={springTransition}
                      >
                        <Twitter size={18} />
                      </motion.a>
                    )}
                    {judge.links.github && (
                      <motion.a 
                        href={judge.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-blue transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={springTransition}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    {judge.links.linkedin && (
                      <motion.a 
                        href={judge.links.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-blue transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={springTransition}
                      >
                        <Linkedin size={18} />
                      </motion.a>
                    )}
                    {judge.links.website && (
                      <motion.a 
                        href={judge.links.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-accent-blue transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={springTransition}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
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