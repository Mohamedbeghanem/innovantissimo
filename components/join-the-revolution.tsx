import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const JoinTheRevolution = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-text-main mb-6 font-grotesk">Join the Revolution</h2>
        <p className="text-lg text-text-main mb-8 max-w-2xl mx-auto">
          Become a part of the future of medical imaging. Contact us to learn more about our technology and investment opportunities.
        </p>
        <Link href="/docuseal">
          <Button variant="white" size="lg">
            Innovation in Progress
          </Button>
        </Link>
      </div>
    </section>
  );
};
