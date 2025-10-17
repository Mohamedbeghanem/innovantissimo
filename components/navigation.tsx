"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ContactFormPopup } from "./contact-form-popup"

export function Navigation() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

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
            <button
              onClick={() => setIsPopupOpen(true)}
              className="px-4 py-2 bg-white text-black rounded-md font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <ContactFormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </nav>
  )
}
