"use client"

import Image from "next/image"
import { CheckCircle, Users, Award, Clock, Heart, Sparkles, Shield, Headphones } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    { icon: Users, value: "500+", label: t.satisfiedClients },
    { icon: Award, value: "5+", label: t.yearsExperience },
    { icon: Clock, value: "24/7", label: t.customerSupport },
  ]

  const features = [
    { icon: CheckCircle, text: t.feature1 },
    { icon: Sparkles, text: t.feature2 },
    { icon: Heart, text: t.feature3 },
    { icon: Headphones, text: t.feature4 },
    { icon: Award, text: t.feature5 },
    { icon: Shield, text: t.feature6 },
    { icon: CheckCircle, text: t.feature7 },
    { icon: Clock, text: t.feature8 },
  ]

  return (
    <section id="kuhusu" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-4 bg-primary/10 rounded-2xl -rotate-6" />
              <div className="absolute inset-4 bg-primary/5 rounded-2xl rotate-3" />
              
              {/* Main image */}
              <div className="relative flex flex-col items-center justify-center h-full">
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20">
                  <Image
                    src="https://i.postimg.cc/bJKqb6D5/FB-IMG-1774629084456.jpg"
                    alt="TEKNOVA TZ Team"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Name below image */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-primary">TEKNOVA TECH</h3>
                  <p className="text-muted-foreground">{t.techExpert}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary text-sm font-medium">{t.aboutUs}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              {t.aboutTitle1} <span className="text-primary">{t.aboutTitle2}</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.aboutDescription1}
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              {t.aboutDescription2}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t.aboutDescription3}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t.aboutDescription4}
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <feature.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
