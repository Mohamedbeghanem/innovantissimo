"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactFooter() {
  return (
    <footer className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold"
            >
              Contact Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-lg text-gray-400"
            >
              We're here to answer any questions you may have.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 space-y-4"
            >
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-gray-800 text-white"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-gray-800 text-white"
              />
              <Button
                type="submit"
                className="bg-white text-black hover:bg-gray-200"
              >
                Send Message
              </Button>
            </motion.form>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl font-bold"
              >
                Innovantissimo
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-2 text-gray-400"
              >
                Via dell'Innovazione, 1<br />
                12345 Milano, Italy
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 text-sm text-gray-500"
            >
              &copy; {new Date().getFullYear()} Innovantissimo. All rights
              reserved.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
