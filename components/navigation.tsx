"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navigation() {

  return (
    <nav className="sticky top-0 z-50 bg-black backdrop-blur-xl border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Innovantissimo-02.svg"
                alt="Your Brand Logo"
                width={160}
                height={42}
                priority
              />
            </Link>
          </div>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <Link href="/docuseal">
              <Button
                variant="white"
              >
                Innovation in Progress
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
