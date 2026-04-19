"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { href: "#home", label: t.home },
    { href: "#huduma", label: t.services },
    { href: "#kuhusu", label: t.about },
    { href: "#blog", label: t.blog },
    { href: "#wasiliana", label: t.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              TEKNOVA <span className="text-primary">TZ</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
              <button
                onClick={() => setLanguage("sw")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  language === "sw"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>🇹🇿</span>
                <span>Kiswahili</span>
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>🇬🇧</span>
                <span>English</span>
              </button>
            </div>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://wa.me/255611378027" target="_blank">
                {t.contactUs}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center gap-2 pb-4 border-b border-border">
                <Globe className="w-4 h-4 text-primary" />
                <button
                  onClick={() => setLanguage("sw")}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    language === "sw"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  🇹🇿 Kiswahili
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    language === "en"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  🇬🇧 English
                </button>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2">
                <Link href="https://wa.me/255611378027" target="_blank">
                  {t.contactUs}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
