"use client";
import { motion } from 'framer-motion';
import React from 'react';

export const MarketOpportunity = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-text-main mb-12 font-grotesk">Market Opportunity</h2>
        <p className="text-lg text-center text-text-main max-w-3xl mx-auto">
          The global medical imaging market is experiencing rapid growth, driven by an aging population, increasing prevalence of chronic diseases, and technological advancements. Innovantissimo is perfectly positioned to capture a significant share of this expanding market with our superior and proprietary technology.
        </p>
      </div>
    </motion.section>
  );
};
