"use client";
import { motion } from 'framer-motion';
import React from 'react';

export const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 sm:py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-text-main mb-12 font-grotesk">What Our Partners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 sm:p-8 bg-hero-bg rounded-lg"
          >
            <p className="text-text-main mb-4 text-sm sm:text-base">"Innovantissimo's technology has transformed our diagnostic capabilities. The clarity and precision are simply unmatched."</p>
            <p className="text-text-main font-bold text-sm sm:text-base">- Dr. Jane Doe, ABC Hospital</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 sm:p-8 bg-hero-bg rounded-lg"
          >
            <p className="text-text-main mb-4 text-sm sm:text-base">"The reliability and performance of their systems have exceeded all our expectations. A true partner in medical innovation."</p>
            <p className="text-text-main font-bold text-sm sm:text-base">- Dr. John Smith, XYZ Clinic</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
