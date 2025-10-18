"use client";
import { motion } from 'framer-motion';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 sm:py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-text-main mb-12 font-grotesk">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">What makes your imaging technology unique?</AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                Our technology combines proprietary hardware and advanced AI analytics to deliver unparalleled image clarity and diagnostic accuracy, setting a new standard in the industry.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Is the system difficult to integrate?</AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                No, our systems are designed for seamless integration with existing hospital workflows and IT infrastructure. We provide comprehensive support to ensure a smooth transition.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">What kind of support do you offer?</AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base">
                We offer 24/7 technical support, ongoing training for your staff, and regular software updates to ensure your system is always operating at peak performance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
};
