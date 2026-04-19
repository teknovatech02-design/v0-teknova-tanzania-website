"use client"

import { 
  Smartphone, 
  Wrench, 
  GraduationCap, 
  Cpu, 
  Shield, 
  Zap,
  Monitor,
  Database,
  Wifi,
  Lock
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: GraduationCap,
      title: t.softwareTraining,
      description: t.softwareTrainingDesc,
    },
    {
      icon: Wrench,
      title: t.phoneRepair,
      description: t.phoneRepairDesc,
    },
    {
      icon: Cpu,
      title: t.hardwareRepair,
      description: t.hardwareRepairDesc,
    },
    {
      icon: Smartphone,
      title: t.flashingUnlocking,
      description: t.flashingUnlockingDesc,
    },
    {
      icon: Shield,
      title: t.dataRecovery,
      description: t.dataRecoveryDesc,
    },
    {
      icon: Zap,
      title: t.speedOptimization,
      description: t.speedOptimizationDesc,
    },
    {
      icon: Monitor,
      title: t.computerTraining,
      description: t.computerTrainingDesc,
    },
    {
      icon: Database,
      title: t.cloudServices,
      description: t.cloudServicesDesc,
    },
    {
      icon: Wifi,
      title: t.networkSetup,
      description: t.networkSetupDesc,
    },
    {
      icon: Lock,
      title: t.cybersecurity,
      description: t.cybersecurityDesc,
    },
  ]

  return (
    <section id="huduma" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t.ourServices}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.servicesTitle1} <span className="text-primary">{t.servicesTitle2}</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {t.servicesDescription}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-foreground text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
