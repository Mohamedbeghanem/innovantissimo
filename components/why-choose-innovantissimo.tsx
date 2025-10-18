"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Award } from 'lucide-react';
import React from 'react';

export const WhyChooseInnovantissimo = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 sm:py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-text-main mb-12 font-grotesk">Why Choose Innovantissimo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center p-6 sm:p-8 bg-hero-bg rounded-lg"
          >
            <Award className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-accent-green mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-4">Precision</h3>
            <p className="text-text-main text-sm sm:text-base">Unmatched image clarity for confident diagnoses.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center p-6 sm:p-8 bg-hero-bg rounded-lg"
          >
            <ShieldCheck className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-accent-green mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-4">Reliability</h3>
            <p className="text-text-main text-sm sm:text-base">Built to the highest standards for consistent performance.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center p-6 sm:p-8 bg-hero-bg rounded-lg"
          >
            <Zap className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-accent-green mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-4">Innovation</h3>
            <p className="text-text-main text-sm sm:text-base">Continuously pushing the boundaries of what's possible.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
