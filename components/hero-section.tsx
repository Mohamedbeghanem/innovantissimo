"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.07]" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tighter text-white md:text-7xl"
        >
          Innovantissimo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl text-lg text-gray-300"
        >
          Pioneering the Future of Medical Technology with Italian Innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200"
          >
            Discover the ORH
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
