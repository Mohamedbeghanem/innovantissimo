"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export const ItalianExcellence = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 sm:py-20 bg-background"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden">
          <Image
            src="/ba13240b-c24f-4ace-86ad-1d45ec490b22.jpeg"
            alt="Italian Excellence"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-6 font-grotesk">Rooted in Italian Excellence</h2>
          <p className="text-base sm:text-lg text-text-main">
            Our heritage of Italian craftsmanship and design excellence is embedded in every product we create. We combine aesthetic elegance with functional superiority, ensuring our technology not only performs flawlessly but also complements the modern medical environment.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
