"use client";

import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          About Innovantissimo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 max-w-3xl text-lg text-gray-400"
        >
          Innovantissimo is an innovation-driven medical technology firm from
          Italy, dedicated to pushing the boundaries of what's possible in
          healthcare. Our mission is to create cutting-edge solutions that
          improve patient outcomes and empower medical professionals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <div className="inline-flex space-x-4">
            <div className="h-1 w-16 bg-green-500" />
            <div className="h-1 w-16 bg-white" />
            <div className="h-1 w-16 bg-red-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
