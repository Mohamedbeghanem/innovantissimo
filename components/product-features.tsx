"use client";
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import React from 'react';

export const ProductFeatures = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 sm:py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-text-main mb-12 font-grotesk">Product Features</h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-8 w-8 text-accent-green mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-2">High-Resolution Imaging</h3>
              <p className="text-text-main text-sm sm:text-base">
                Our systems produce crystal-clear images, enabling medical professionals to identify even the smallest anomalies with confidence.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-8 w-8 text-accent-green mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-2">Advanced AI Analytics</h3>
              <p className="text-text-main text-sm sm:text-base">
                Leverage the power of artificial intelligence to gain deeper insights from your imaging data and improve diagnostic accuracy.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-8 w-8 text-accent-green mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-2">Seamless Integration</h3>
              <p className="text-text-main text-sm sm:text-base">
                Our technology is designed to integrate smoothly with your existing workflows and systems, minimizing disruption and maximizing efficiency.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-8 w-8 text-accent-green mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-main mb-2">Robust and Reliable</h3>
              <p className="text-text-main text-sm sm:text-base">
                Built with the highest quality materials and engineering, our systems are designed for long-term reliability and consistent performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
