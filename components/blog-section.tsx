import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

const blogPosts = [
  {
    title: "Jinsi ya Kuongeza Battery Life ya Simu Yako",
    description: "Jifunze mbinu 10 bora za kuongeza muda wa battery ya simu yako ili idumu muda mrefu zaidi bila kuchaji.",
    category: "Tips & Tricks",
    date: "April 15, 2026",
    readTime: "5 dakika",
    author: "TEKNOVA TZ",
  },
  {
    title: "Android vs iOS: Mfumo Upi ni Bora Kwako?",
    description: "Ulinganisho wa kina kati ya mifumo hii miwili mikubwa ya simu - soma kabla ya kununua simu mpya.",
    category: "Uchambuzi",
    date: "April 12, 2026",
    readTime: "8 dakika",
    author: "TEKNOVA TZ",
  },
  {
    title: "Jinsi ya Kuondoa Virusi kwenye Simu",
    description: "Hatua kwa hatua za kuondoa virusi na malware kwenye simu yako ya Android au iPhone.",
    category: "Security",
    date: "April 10, 2026",
    readTime: "6 dakika",
    author: "TEKNOVA TZ",
  },
  {
    title: "Best Apps za Kuhariri Picha 2026",
    description: "Orodha ya apps bora za kuhariri picha kwenye simu - kutoka apps za bure hadi za kulipa.",
    category: "Apps",
    date: "April 8, 2026",
    readTime: "7 dakika",
    author: "TEKNOVA TZ",
  },
  {
    title: "Jinsi ya Ku-Transfer Data Kutoka Simu ya Zamani",
    description: "Njia rahisi za kuhamisha contacts, picha, na data nyingine kutoka simu ya zamani kwenda mpya.",
    category: "Tutorial",
    date: "April 5, 2026",
    readTime: "10 dakika",
    author: "TEKNOVA TZ",
  },
  {
    title: "Kwa Nini Simu Yako Inaenda Polepole?",
    description: "Sababu 7 za kawaida zinazofanya simu iende polepole na jinsi ya kuzitatua.",
    category: "Troubleshooting",
    date: "April 2, 2026",
    readTime: "6 dakika",
    author: "TEKNOVA TZ",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Blog Yetu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Makala Mpya za <span className="text-primary">Teknolojia</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soma makala zetu kuhusu teknolojia za simu, tips na tricks, 
            na habari mpya za tech duniani.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {post.description}
                </CardDescription>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{post.author}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
            Tazama Makala Zote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
