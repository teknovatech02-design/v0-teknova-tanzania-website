import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary text-sm font-medium">
                Karibu TEKNOVA TZ
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Jifunze <span className="text-primary">Teknolojia</span> ya Simu na Zaidi
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              TEKNOVA TZ ni kituo chako cha kujifunza teknolojia zote za simu - kutoka 
              software hadi hardware. Tunatoa mafunzo, huduma za kurekebisha, na ushauri 
              wa kitaalamu kwa gharama nafuu Tanzania.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="https://wa.me/255611378027" target="_blank" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Piga Simu: +255 611 378 027
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
                <Link href="#huduma" className="flex items-center gap-2">
                  Tazama Huduma
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" style={{ transform: 'scale(1.1)' }} />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20">
                <Image
                  src="https://i.postimg.cc/bJKqb6D5/FB-IMG-1774629084456.jpg"
                  alt="TEKNOVA TZ Founder"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-6 py-3 rounded-full border border-border shadow-lg">
                <span className="text-primary font-bold">Tech Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
