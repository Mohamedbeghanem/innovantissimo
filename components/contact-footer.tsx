"use client";

import { motion } from "framer-motion";

export function ContactFooter() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold font-grotesk"
          >
            Innovantissimo
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-2"
          >
            Pioneering the Future of Medical Technology.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4"
          >
            contact@innovantissimo.com
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-sm"
          >
            &copy; {new Date().getFullYear()} Innovantissimo. All rights
            reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
