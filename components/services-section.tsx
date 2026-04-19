import { 
  Smartphone, 
  Wrench, 
  GraduationCap, 
  Cpu, 
  Shield, 
  Zap,
  Monitor,
  Database
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: GraduationCap,
    title: "Mafunzo ya Software",
    description: "Jifunze jinsi ya kutumia software mbalimbali za simu, kuinstall apps, na kusanidi mifumo ya Android na iOS.",
  },
  {
    icon: Wrench,
    title: "Kurekebisha Simu",
    description: "Huduma za kurekebisha simu zilizovunjika, kubadilisha screen, battery, na sehemu nyingine za simu.",
  },
  {
    icon: Cpu,
    title: "Hardware Repair",
    description: "Tunarekebisha matatizo yote ya hardware - motherboard, charging port, speaker, microphone na zaidi.",
  },
  {
    icon: Smartphone,
    title: "Flashing & Unlocking",
    description: "Huduma za ku-flash simu, ku-unlock network locks, na kuondoa FRP/Google account bypass.",
  },
  {
    icon: Shield,
    title: "Data Recovery",
    description: "Tunarudisha data zilizopotea kutoka simu zilizoharibika au zilizofutwa kwa bahati mbaya.",
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description: "Tunafanya simu yako iende haraka zaidi kwa kuondoa virusi, junk files, na kuboresha performance.",
  },
  {
    icon: Monitor,
    title: "Mafunzo ya Kompyuta",
    description: "Jifunze jinsi ya kutumia kompyuta, Microsoft Office, internet browsing, na ujuzi muhimu wa IT.",
  },
  {
    icon: Database,
    title: "Cloud Services",
    description: "Tunakusaidia ku-setup cloud backup, Google Drive, iCloud, na huduma za kuhifadhi data salama.",
  },
]

export function ServicesSection() {
  return (
    <section id="huduma" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Huduma Zetu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Huduma Bora za <span className="text-primary">Teknolojia</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tunatoa huduma mbalimbali za teknolojia kwa ubora wa hali ya juu na 
            bei nafuu. Wateja wetu ndio kipaumbele chetu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
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
