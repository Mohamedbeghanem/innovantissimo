"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full bg-hero-bg py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tighter text-text-main sm:text-5xl md:text-6xl lg:text-7xl font-grotesk"
        >
          Innovantissimo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-base text-text-main sm:text-lg"
        >
          Precision. Innovation. Italian Excellence in Medical Technology.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <Link href="/docuseal">
            <Button
              size="lg"
              variant="white"
            >
              Innovation in Progress
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
