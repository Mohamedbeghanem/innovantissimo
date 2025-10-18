"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export const TheInnovation = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 sm:py-20 bg-background"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="The Innovation"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-6 font-grotesk">The Innovation</h2>
          <p className="text-base sm:text-lg text-text-main">
            Innovantissimo is pioneering the future of medical imaging with our revolutionary technology. Our advanced systems provide unprecedented clarity and precision, empowering medical professionals to make more accurate diagnoses and improve patient outcomes.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
