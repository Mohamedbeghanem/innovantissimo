"use client";
import { motion } from 'framer-motion';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export const CallToAction = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 sm:py-20 bg-hero-bg text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-grotesk">Join the Revolution in Medical Technology</h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8">
          Partner with us to bring the future of medical imaging to your institution.
        </p>
        <Link href="/contact">
          <Button size="lg" variant="white">
            Contact Us
          </Button>
        </Link>
      </div>
    </motion.section>
  );
};
