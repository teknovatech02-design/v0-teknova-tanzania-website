"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Star, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary text-sm font-medium">
                {t.welcomeTo}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              {t.heroTitle1} <span className="text-primary">{t.heroTitle2}</span> {t.heroTitle3}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t.heroDescription}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>500+ Clients</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span>5+ Years</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="https://wa.me/255611378027" target="_blank" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  {t.callNow}: +255 611 378 027
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
                <Link href="#huduma" className="flex items-center gap-2">
                  {t.viewServices}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" style={{ transform: 'scale(1.15)' }} />
              <div className="absolute inset-0 rounded-full bg-primary/10" style={{ transform: 'scale(1.25)' }} />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20">
                <Image
                  src="/me.jpg"   // 🔥 HAPA NDIPO NILIPO FIX
                  alt="TEKNOVA TZ Founder"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Name badge */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="bg-card px-6 py-3 rounded-full border-2 border-primary shadow-lg">
                  <span className="text-primary font-bold text-lg">TEKNOVA TECH</span>
                </div>
                <span className="text-muted-foreground text-sm mt-2">{t.techExpert}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
