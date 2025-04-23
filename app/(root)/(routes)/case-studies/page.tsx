'use client';

import { CaseStudyCard } from './components/CaseStudyCard';
import { CaseStudy } from '@/types';
import Link from 'next/link';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function CaseStudiesPage() {
  // Case study data could alternatively be fetched from an API or CMS
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Rapid MVP Prototyping for a Fintech Startup',
      client: 'FinTech Innovators',
      challenge: 'FinTech Innovators needed to validate their concept with a functional MVP in under a month to secure seed funding. With a tight budget and a short timeline, they required a solution that could deliver a polished prototype without the high costs of traditional development.',
      solution: 'Clow leveraged Bubble and FlutterFlow to build a cross-platform MVP in just 3 weeks. Using no-code tools, we created a sleek, user-friendly interface with core features like account integration and budgeting tools. Custom JavaScript was added for advanced functionality, ensuring the prototype was both functional and scalable.',
      results: [
        'Delivered a market-ready MVP in 3 weeks, meeting the startup\'s deadline.',
        'Reduced development costs by 60% compared to traditional agencies.',
        'Helped secure $500k in seed funding based on the prototype\'s success.',
        'Provided full code ownership, allowing the startup to scale independently.'
      ],
      testimonial: {
        quote: 'Clow\'s no-code expertise allowed us to test our idea quickly and affordably. Their open-source approach gave us the flexibility to grow on our terms.',
        author: 'Alex Carter',
        position: 'Founder, FinTech Innovators'
      },
      tags: ['No-Code', 'MVP', 'FinTech', 'Rapid Prototyping'],
      color: 'blue'
    },
    {
      id: 2,
      title: 'Workflow Automation for a Growing E-Commerce Business',
      client: 'EcoGoods',
      challenge: 'EcoGoods was struggling with inefficient manual processes, from inventory management to customer support. They needed a solution to automate workflows and integrate their CRM, Slack, and databases without disrupting operations.',
      solution: 'Clow implemented n8n and Zapier to create custom automations that connected EcoGoods\' existing systems. We designed multi-step workflows to automate inventory updates, customer notifications, and reporting. Custom Python scripts were added for complex logic, ensuring seamless integration.',
      results: [
        'Reduced manual tasks by 70%, freeing up staff for strategic work.',
        'Saved $10k annually by using open-source tools instead of SaaS subscriptions.',
        'Improved customer response times by 50% through automated support workflows.',
        'Deployed on EcoGoods\' AWS account for full control and data privacy.'
      ],
      testimonial: {
        quote: 'Clow\'s automation solutions transformed our operations. We\'re more efficient and scalable, all while keeping costs down.',
        author: 'Maria Lopez',
        position: 'Operations Manager, EcoGoods'
      },
      tags: ['Automation', 'E-Commerce', 'Workflow', 'Integration'],
      color: 'green'
    },
    {
      id: 3,
      title: 'Scalable Database Solution for a SaaS Platform',
      client: 'DataSync',
      challenge: 'DataSync had outgrown their legacy database, which was costly and lacked scalability. They needed a self-hosted, open-source solution to manage large datasets efficiently while reducing infrastructure costs.',
      solution: 'Clow migrated DataSync\'s data to Pocketbase, a lightweight, self-hosted backend. We designed a custom database schema optimized for real-time analytics and integrated it with their existing systems using Supabase for additional scalability. Custom TypeScript scripts ensured seamless data migration and API connectivity.',
      results: [
        'Reduced infrastructure costs by 40% with self-hosted, open-source tools.',
        'Improved query performance by 3x, enabling faster analytics for clients.',
        'Provided full ownership of the database, eliminating vendor lock-in.',
        'Delivered a scalable solution that supports DataSync\'s growth to 10,000+ users.'
      ],
      testimonial: {
        quote: 'Clow\'s database solution gave us the performance and control we needed. We\'re now positioned to scale without worrying about costs or limitations.',
        author: 'James Patel',
        position: 'CTO, DataSync'
      },
      tags: ['Database', 'SaaS', 'Scalability', 'Performance'],
      color: 'purple'
    }
  ];

  // Ref for intersection observer
  const ref = useRef<HTMLDivElement>(null);

  // Animate hero gradient background
  const heroVariants = {
    initial: { 
      backgroundPosition: "0% 50%" 
    },
    animate: { 
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse" as const,
        duration: 15,
        ease: "easeInOut"
      }
    }
  };

  // Stagger children animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Animation */}
      <motion.section 
        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white py-20 bg-[length:200%_100%]"
        variants={heroVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies: Real-World Success with Clow</h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore how we&apos;ve helped businesses turn ideas into reality—quickly, affordably, and with full control.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction */}
      <motion.section 
        className="py-12 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              At Clow, we empower startups, SaaS teams, and businesses to turn their ideas into reality—quickly, 
              affordably, and with full control. Our no-code, low-code, and open-source solutions have helped 
              clients across industries solve challenges, streamline operations, and scale efficiently. Below 
              are real-world examples of how Clow has delivered tangible results for our partners.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Case Studies Section with Staggered Animation */}
      <section className="py-16 bg-gray-50" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid gap-10"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <CaseStudyCard caseStudy={study} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Hover Animation */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8">
              At Clow, we&apos;re committed to helping you achieve your goals—faster, smarter, and on your terms. 
              Whether you need a rapid MVP, workflow automation, or a scalable database, our no-code and 
              low-code expertise can make it happen.
            </p>
            <motion.div 
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact" 
                className="inline-block bg-white text-indigo-700 font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}