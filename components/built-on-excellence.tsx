"use client";
import { motion } from 'framer-motion';
import React from 'react';

export const BuiltOnExcellence = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-text-main mb-12 font-grotesk">Built on Excellence</h2>
        <p className="text-lg text-center text-text-main max-w-3xl mx-auto">
          Our technology is the culmination of years of research and development, driven by a passion for excellence and a commitment to advancing medical science. We leverage cutting-edge materials and engineering to deliver unparalleled performance and reliability.
        </p>
      </div>
    </motion.section>
  );
};
