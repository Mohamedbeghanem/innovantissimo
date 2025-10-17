"use client";
import { motion } from 'framer-motion';
import React from 'react';

export const TheInnovation = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-text-main mb-12 font-grotesk">The Innovation</h2>
        <p className="text-lg text-center text-text-main max-w-3xl mx-auto">
          Innovantissimo is pioneering the future of medical imaging with our revolutionary technology. Our advanced systems provide unprecedented clarity and precision, empowering medical professionals to make more accurate diagnoses and improve patient outcomes.
        </p>
      </div>
    </motion.section>
  );
};
