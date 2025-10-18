"use client";
import { motion } from 'framer-motion';
import React from 'react';

import Image from 'next/image';

export const BuiltOnExcellence = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 sm:py-20 bg-background"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main mb-6 font-grotesk">Built on Excellence</h2>
          <p className="text-base sm:text-lg text-text-main mb-8">
            Our technology is the culmination of years of research and development, driven by a passion for excellence and a commitment to advancing medical science.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-2">Commitment to Quality</h3>
              <p className="text-text-main text-sm sm:text-base">
                We adhere to the highest standards of quality and precision in every aspect of our work, from initial concept to final product.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-2">Advanced Engineering</h3>
              <p className="text-text-main text-sm sm:text-base">
                Our team of expert engineers utilizes the latest technologies and innovative approaches to create solutions that push the boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden md:order-2">
          <Image
            src="/placeholder.svg"
            alt="Built on Excellence"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </motion.section>
  );
};
