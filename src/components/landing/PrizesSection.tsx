import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/store';
import { Award, Star, DollarSign, Sparkles } from 'lucide-react';
import { STACKBLITZ } from '@/assets/images';

export function PrizesSection() {
  const { prizes } = useAppStore();
  
  // Calculate total prize amount
  const totalPrizeAmount = prizes.reduce((total, prize) => {
    const amount = prize.amount.replace(/[^0-9]/g, '');
    return total + (parseInt(amount) || 0);
  }, 0);
  
  // Format total prize amount with commas
  const formattedTotal = totalPrizeAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  // Motion settings - consistent with other components
  const springTransition = { 
    type: "spring", 
    stiffness: 300, 
    damping: 20 
  };
  
  return (
    <div className="py-16 lg:py-24 bg-gradient-to-b from-background-secondary via-[#252A34] to-[#20253D]" id="prizes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl opacity-20"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-[#49A4FF]">
              ${formattedTotal} in Prizes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Compete for impressive prizes across multiple categories, sponsored by industry-leading companies.
          </p>
          
          {/* Stackblitz Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-lg py-5 px-8 inline-flex items-center shadow-xl border border-gray-700/50 backdrop-blur-sm"
          >
            <span className="text-gray-200 mr-4 font-medium text-lg">Proudly sponsored by</span>
            <img 
              src={STACKBLITZ} 
              alt="Stackblitz"
              className="h-10 w-auto filter brightness-125 hover:brightness-150 transition-all duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Grand Prize (if exists) */}
        {prizes.some(prize => prize.category === 'Overall') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-[#49A4FF]">
                <Star className="text-accent-blue mr-2" size={24} />
                Grand Prize
              </h3>
            </div>
            <div className="flex justify-center">
              {prizes
                .filter(prize => prize.category === 'Overall')
                .map(prize => (
                  <motion.div
                    key={prize.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={springTransition}
                    className="bg-gradient-to-br from-blue-800/30 via-blue-700/20 to-blue-900/30 rounded-xl p-1 max-w-lg w-full mx-auto shadow-xl transform-gpu"
                  >
                    <div className="bg-background-primary/90 backdrop-blur-sm rounded-lg p-8 text-center h-full border border-white/5">
                      <div className="absolute top-0 right-0 -mt-3 -mr-3">
                        <Sparkles className="text-accent-blue" size={20} />
                      </div>
                      <h4 className="text-2xl font-bold mb-3 text-white">{prize.name}</h4>
                      <div className="text-3xl font-bold text-accent-blue mb-4 tracking-wide">{prize.amount}</div>
                      <p className="text-gray-300 mb-6 text-lg">{prize.description}</p>
                      {prize.sponsor && (
                        <div className="flex items-center justify-center mt-4">
                          <span className="text-gray-300 mr-3 font-medium">Sponsored by</span>
                          <div className="flex items-center p-3 bg-gray-800/80 rounded-md shadow-inner backdrop-blur-sm border border-gray-700/50">
                            {prize.logoUrl ? (
                              <img 
                                src={STACKBLITZ} 
                                alt={prize.sponsor} 
                                className="h-9 w-auto filter brightness-150" 
                              />
                            ) : (
                              prize.sponsor
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}

        {/* Category Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold inline-flex items-center">
              <Award className="text-accent-blue mr-2" size={24} />
              Category Prizes
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prizes
              .filter(prize => prize.category !== 'Overall')
              .map((prize, index) => (
                <motion.div
                  key={prize.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-lg shadow-lg overflow-hidden border border-gray-800/60 transform-gpu transition-all duration-300"
                >
                  <div className="relative p-6">
                    <div className="absolute top-0 right-0 bg-blue-500/10 w-20 h-20 rounded-full blur-xl -mr-10 -mt-10 z-0"></div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-gray-100">{prize.name}</h4>
                        <div className="bg-blue-900/50 px-3 py-1 rounded-full text-sm text-blue-300 font-medium border border-blue-700/30">
                          {prize.category}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-5 min-h-[60px]">{prize.description}</p>
                      <div className="pt-4 border-t border-gray-700/50 flex flex-col space-y-4">
                        <div className="text-2xl font-bold text-accent-blue flex items-center">
                          <DollarSign size={20} className="mr-1" />
                          {prize.amount.replace('$', '')}
                        </div>
                        {prize.sponsor && (
                          <div className="flex items-center">
                            <span className="text-sm text-gray-300 mr-3">Sponsored by</span>
                            <div className="flex items-center bg-gray-800/80 p-2 rounded-md shadow-inner border border-gray-700/30">
                              {prize.logoUrl ? (
                                <img 
                                  src={STACKBLITZ} 
                                  alt={prize.sponsor} 
                                  className="h-6 w-auto filter brightness-150" 
                                />
                              ) : (
                                <span className="text-sm text-gray-400">{prize.sponsor}</span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 