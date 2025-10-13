"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Home, User, Stethoscope, Mail, Clock, MapPin } from "lucide-react"
import { useTranslations } from '@/hooks/use-translations'
import { useRouter, usePathname } from 'next/navigation'
import { LanguageSwitcher } from './language-switcher'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, currentLanguage } = useTranslations()
  const router = useRouter()
  const pathname = usePathname()
  
  const navItems = useMemo(() => [
    { href: `/${currentLanguage}`, label: t('navigation.home'), icon: Home, description: "Welcome to Implantaly Group" },
  ], [t, currentLanguage])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg slide-down">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div>
              <Link href={`/${currentLanguage}`} className="flex items-center space-x-2">
                <Image
                  src="/logo.svg"
                  alt="Your Brand Logo"
                  width={120}
                  height={32}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className="fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4 fade-in-right">
              <LanguageSwitcher />
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">(555) 123-4567</span>
              </div>
            </div>

            {/* Mobile menu button & Language Switcher */}
            <div className="flex items-center md:hidden">
              <LanguageSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/50 relative z-60 transition-all duration-300"
              >
                <div className={`transition-all duration-500 ${isOpen ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-0 right-0 w-full max-w-sm sm:w-80 h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 slide-in-right border-l border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <Link href={`/${currentLanguage}`} className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/logo.svg"
                    alt="Your Brand Logo"
                    width={120}
                    height={32}
                    priority
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-6 space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 p-4 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm opacity-70">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
