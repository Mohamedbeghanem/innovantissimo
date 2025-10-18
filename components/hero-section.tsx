"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-hero-bg">
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold tracking-tighter text-text-main md:text-8xl font-grotesk"
        >
          Innovantissimo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-3xl text-xl text-text-main"
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
