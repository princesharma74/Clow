'use client';

import { CaseStudy } from '@/types';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export const CaseStudyCard: FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const colorClasses = {
    blue: 'border-blue-400 bg-blue-50',
    green: 'border-green-400 bg-green-50',
    purple: 'border-purple-400 bg-purple-50',
    orange: 'border-orange-400 bg-orange-50',
  };

  const borderColor = colorClasses[caseStudy.color as keyof typeof colorClasses] || 'border-gray-300 bg-gray-50';

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Animation for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className={`border-l-4 rounded-lg shadow-md overflow-hidden ${borderColor} hover:shadow-lg transition-shadow duration-300`}
      whileHover={{ 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }}
      variants={itemVariants}
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{caseStudy.title}</h2>
          <p className="text-lg font-medium text-gray-600">Client: {caseStudy.client}</p>
        </motion.div>

        {/* Challenge */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Challenge:</h3>
          <p className="text-gray-700">{caseStudy.challenge}</p>
        </motion.div>

        {/* Solution */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Solution:</h3>
          <p className="text-gray-700">{caseStudy.solution}</p>
        </motion.div>

        {/* Results */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Results:</h3>
          <motion.ul 
            className="list-disc pl-6 space-y-2 text-gray-700"
            variants={listContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {caseStudy.results.map((result, index) => (
              <motion.li 
                key={index}
                variants={listItemVariants}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                {result}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <motion.div 
            className="mt-8 bg-white rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <blockquote className="italic text-gray-700 mb-4">&quote;{caseStudy.testimonial.quote}&quote;</blockquote>
            <div className="flex items-center">
              <div>
                <p className="font-medium text-gray-900">— {caseStudy.testimonial.author}</p>
                <p className="text-gray-600">{caseStudy.testimonial.position}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tags */}
        <motion.div 
          className="mt-6 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {caseStudy.tags.map((tag, index) => (
            <motion.span 
              key={index} 
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-300 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index + 0.6, duration: 0.3 }}
              whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};