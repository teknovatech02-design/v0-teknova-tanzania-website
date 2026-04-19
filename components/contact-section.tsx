"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Phone,
      title: t.phone,
      value: "+255 611 378 027",
      link: "tel:+255611378027",
    },
    {
      icon: MessageCircle,
      title: t.whatsapp,
      value: "+255 611 378 027",
      link: "https://wa.me/255611378027",
    },
    {
      icon: Mail,
      title: t.email,
      value: "info@teknovatz.co.tz",
      link: "mailto:info@teknovatz.co.tz",
    },
    {
      icon: MapPin,
      title: t.location,
      value: "Tanzania",
      link: "#",
    },
    {
      icon: Clock,
      title: t.workingHours,
      value: t.workingHoursValue,
      link: "#",
    },
  ]

  return (
    <section id="wasiliana" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t.contactUsTitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.contactTitle1} <span className="text-primary">{t.contactTitle2}</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {t.contactDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile & CTA */}
          <div className="text-center lg:text-left space-y-8">
            {/* Profile Image with Name */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-xl shadow-primary/20">
                <Image
                  src="https://i.postimg.cc/bJKqb6D5/FB-IMG-1774629084456.jpg"
                  alt="TEKNOVA TZ Contact"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Name below image */}
              <div className="mt-4 text-center lg:text-left">
                <h3 className="text-xl font-bold text-primary">TEKNOVA TECH</h3>
                <p className="text-muted-foreground text-sm">{t.techExpert}</p>
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                {t.callOrWhatsApp}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.contactCTA}
              </p>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-lg px-8 py-6"
              >
                <Link 
                  href="https://wa.me/255611378027" 
                  target="_blank"
                  className="flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  +255 611 378 027
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <Link key={index} href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined}>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer mb-4">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      <p className="text-foreground font-medium text-lg">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
