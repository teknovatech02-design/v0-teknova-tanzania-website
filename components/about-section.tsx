import Image from "next/image"
import { CheckCircle, Users, Award, Clock } from "lucide-react"

const stats = [
  { icon: Users, value: "500+", label: "Wateja Walioridhika" },
  { icon: Award, value: "5+", label: "Miaka ya Uzoefu" },
  { icon: Clock, value: "24/7", label: "Msaada wa Wateja" },
]

const features = [
  "Mafunzo ya kina ya teknolojia za simu",
  "Huduma za haraka na za kuaminika",
  "Bei nafuu na wazi",
  "Msaada wa baada ya huduma",
  "Wataalamu wenye uzoefu",
  "Dhamana ya ubora",
]

export function AboutSection() {
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
              <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                <div className="w-full aspect-square rounded-full overflow-hidden mx-auto max-w-[300px] lg:max-w-[400px] border-4 border-primary">
                  <Image
                    src="https://i.postimg.cc/bJKqb6D5/FB-IMG-1774629084456.jpg"
                    alt="TEKNOVA TZ Team"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary text-sm font-medium">Kuhusu Sisi</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Wataalamu wa <span className="text-primary">Teknolojia</span> Tanzania
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              TEKNOVA TZ ilianzishwa na dhamira ya kuleta elimu ya teknolojia kwa 
              Watanzania wote. Tunaamini kwamba kila mtu anastahili kupata uelewa wa 
              teknolojia za kisasa.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Timu yetu ina wataalamu wenye uzoefu wa miaka mingi katika fani ya 
              teknolojia. Tunatoa mafunzo ya kina, huduma za kurekebisha simu, na 
              ushauri wa kitaalamu kwa gharama nafuu.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
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
