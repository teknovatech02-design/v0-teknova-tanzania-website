import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Simu",
    value: "+255 611 378 027",
    link: "tel:+255611378027",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+255 611 378 027",
    link: "https://wa.me/255611378027",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@teknovatz.co.tz",
    link: "mailto:info@teknovatz.co.tz",
  },
  {
    icon: MapPin,
    title: "Mahali",
    value: "Tanzania",
    link: "#",
  },
  {
    icon: Clock,
    title: "Masaa ya Kazi",
    value: "Jumatatu - Jumamosi: 8:00 - 18:00",
    link: "#",
  },
]

export function ContactSection() {
  return (
    <section id="wasiliana" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Wasiliana Nasi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Tuko Tayari <span className="text-primary">Kukusaidia</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Una swali au unahitaji msaada? Wasiliana nasi kupitia njia yoyote 
            hapa chini. Tutakujibu haraka iwezekanavyo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile & CTA */}
          <div className="text-center lg:text-left space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-xl shadow-primary/20">
                <Image
                  src="https://i.postimg.cc/bJKqb6D5/FB-IMG-1774629084456.jpg"
                  alt="TEKNOVA TZ Contact"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Piga Simu au Tuma WhatsApp
              </h3>
              <p className="text-muted-foreground">
                Tuko tayari kukusaidia wakati wowote. Wasiliana nasi kwa mazungumzo ya 
                haraka kupitia WhatsApp au simu.
              </p>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
              >
                <Link 
                  href="https://wa.me/255611378027" 
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  +255 611 378 027
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <Link key={index} href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined}>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
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
