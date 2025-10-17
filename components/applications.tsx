"use client";
import { motion } from 'framer-motion';
import React from 'react';

export const Applications = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-text-main mb-12 font-grotesk">Applications</h2>
        <p className="text-lg text-center text-text-main max-w-3xl mx-auto">
          Our technology has a wide range of applications across various medical fields, including oncology, cardiology, neurology, and orthopedics. The versatility and precision of our systems make them an invaluable tool for clinicians and researchers alike.
        </p>
      </div>
    </motion.section>
  );
};
