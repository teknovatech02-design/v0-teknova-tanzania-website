"use client"

import Link from "next/link"
import { Smartphone, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { href: "#home", label: t.home },
    { href: "#huduma", label: t.services },
    { href: "#kuhusu", label: t.about },
    { href: "#blog", label: t.blog },
    { href: "#wasiliana", label: t.contact },
  ]

  const services = [
    t.softwareTraining,
    t.phoneRepair,
    t.hardwareRepair,
    t.flashingUnlocking,
    t.dataRecovery,
    t.speedOptimization,
    t.computerTraining,
    t.cloudServices,
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                TEKNOVA <span className="text-primary">TZ</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t.ourServicesFooter}</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">{t.contactFooter}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://wa.me/255611378027" 
                  target="_blank"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +255 611 378 027
                </Link>
              </li>
              <li>
                <Link 
                  href="mailto:info@teknovatz.co.tz"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  info@teknovatz.co.tz
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  Tanzania
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © TEKNOVA TECH 2026. {t.allRightsReserved}.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.privacyPolicy}
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {t.termsOfUse}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
