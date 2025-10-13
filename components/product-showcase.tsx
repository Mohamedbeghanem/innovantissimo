"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProductShowcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/placeholder.svg"
              alt="ORH - Oral Radiological Helmet"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold"
            >
              The ORH: Redefining Oral Radiology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg text-gray-400"
            >
              The Oral Radiological Helmet (ORH) is a groundbreaking device that
              revolutionizes dental imaging, providing unprecedented clarity and
              precision for diagnostics and treatment planning.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 space-y-4"
            >
              <li className="flex items-center">
                <svg
                  className="mr-2 h-6 w-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>High-resolution 3D imaging</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-6 w-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Real-time diagnostics</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-6 w-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Enhanced patient comfort</span>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
