import React from 'react';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about the world's largest hackathon.",
  faqs = [
    {
      question: "What makes this hackathon special?",
      answer: "We're aiming to set a world record for the largest coding event, bringing together participants from over 90 countries with 200,000+ submissions expected. This unprecedented scale offers a unique opportunity to be part of coding history."
    },
    {
      question: "How are submissions evaluated?",
      answer: "Submissions undergo a rigorous multi-stage evaluation process by our panel of expert judges using a standardized scoring system across various criteria including innovation, technical implementation, design, and impact."
    },
    {
      question: "What are the prize categories?",
      answer: "The hackathon features multiple award categories including Best Overall Project, Most Innovative Solution, Best Technical Implementation, Best User Experience, and Greatest Social Impact, with prizes totaling over $350,000."
    },
    {
      question: "Who can participate?",
      answer: "The hackathon is open to developers, designers, and innovators aged 18 and above from all countries. Both individuals and teams can participate, with a maximum team size of 5 members."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in the hackathon is completely free. We aim to make this opportunity accessible to talented individuals regardless of financial circumstances."
    },
    {
      question: "What is the timeline for the hackathon?",
      answer: "Registration opens June 1, 2025, with project submissions accepted from July 1 to August 15. Evaluation will run through September, with winners announced at our virtual ceremony on October 1, 2025."
    }
  ]
}: FAQSectionProps) {
  return (
    <div id="faq" className="py-20 bg-gradient-to-b from-[#1E2A3D] to-[#1A294F]">
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
        
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/90 to-blue-800/30 p-6 rounded-lg border border-blue-800/20"
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 