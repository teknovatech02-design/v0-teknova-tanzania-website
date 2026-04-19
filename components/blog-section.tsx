"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const blogPostsSw = [
  {
    title: "Jinsi ya Kuongeza Battery Life ya Simu Yako kwa Mara Mbili",
    description: "Jifunze mbinu 15 bora za kuongeza muda wa battery ya simu yako ili idumu muda mrefu zaidi bila kuchaji mara kwa mara. Hatua rahisi unazoweza kufanya leo!",
    category: "Tips & Tricks",
    date: "April 15, 2026",
    readTime: "5",
  },
  {
    title: "Android vs iOS: Mfumo Upi ni Bora Kwako Mwaka 2026?",
    description: "Ulinganisho wa kina kati ya mifumo hii miwili mikubwa ya simu - soma uchambuzi wetu kamili kabla ya kununua simu yako mpya ili ufanye uamuzi sahihi.",
    category: "Uchambuzi",
    date: "April 12, 2026",
    readTime: "8",
  },
  {
    title: "Jinsi ya Kuondoa Virusi na Malware kwenye Simu Yako",
    description: "Hatua kwa hatua za kuondoa virusi na malware kwenye simu yako ya Android au iPhone. Linda simu yako na data zako muhimu kutokana na mashambulizi ya mtandaoni.",
    category: "Security",
    date: "April 10, 2026",
    readTime: "6",
  },
  {
    title: "Apps 20 Bora za Kuhariri Picha na Video 2026",
    description: "Orodha kamili ya apps bora za kuhariri picha na video kwenye simu - kutoka apps za bure hadi za kulipa. Kila app imeelezewa kwa kina na mapendekezo ya matumizi.",
    category: "Apps",
    date: "April 8, 2026",
    readTime: "10",
  },
  {
    title: "Jinsi ya Ku-Transfer Data Kutoka Simu ya Zamani Kwenda Mpya",
    description: "Njia 5 rahisi na za kuaminika za kuhamisha contacts, picha, video, na data nyingine zote kutoka simu yako ya zamani kwenda simu mpya bila kupoteza chochote.",
    category: "Tutorial",
    date: "April 5, 2026",
    readTime: "12",
  },
  {
    title: "Kwa Nini Simu Yako Inaenda Polepole na Jinsi ya Kutatua",
    description: "Sababu 10 za kawaida zinazofanya simu iende polepole na suluhisho la kila tatizo. Fanya simu yako iende haraka tena kama mpya bila kununua simu nyingine!",
    category: "Troubleshooting",
    date: "April 2, 2026",
    readTime: "7",
  },
]

const blogPostsEn = [
  {
    title: "How to Double Your Phone's Battery Life",
    description: "Learn the 15 best techniques to extend your phone's battery life so it lasts much longer without frequent charging. Simple steps you can take today!",
    category: "Tips & Tricks",
    date: "April 15, 2026",
    readTime: "5",
  },
  {
    title: "Android vs iOS: Which System is Better for You in 2026?",
    description: "A comprehensive comparison between these two major phone systems - read our complete analysis before buying your new phone to make the right decision.",
    category: "Analysis",
    date: "April 12, 2026",
    readTime: "8",
  },
  {
    title: "How to Remove Viruses and Malware from Your Phone",
    description: "Step by step guide to remove viruses and malware from your Android or iPhone. Protect your phone and important data from online attacks.",
    category: "Security",
    date: "April 10, 2026",
    readTime: "6",
  },
  {
    title: "20 Best Photo and Video Editing Apps 2026",
    description: "A complete list of the best photo and video editing apps for phones - from free to paid. Each app is explained in detail with usage recommendations.",
    category: "Apps",
    date: "April 8, 2026",
    readTime: "10",
  },
  {
    title: "How to Transfer Data from Old Phone to New Phone",
    description: "5 simple and reliable ways to transfer contacts, photos, videos, and all other data from your old phone to new phone without losing anything.",
    category: "Tutorial",
    date: "April 5, 2026",
    readTime: "12",
  },
  {
    title: "Why Your Phone is Running Slow and How to Fix It",
    description: "10 common reasons why phones run slow and solutions for each problem. Make your phone fast again like new without buying another phone!",
    category: "Troubleshooting",
    date: "April 2, 2026",
    readTime: "7",
  },
]

export function BlogSection() {
  const { language, t } = useLanguage()
  const blogPosts = language === "sw" ? blogPostsSw : blogPostsEn

  return (
    <section id="blog" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t.ourBlog}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.blogTitle1} <span className="text-primary">{t.blogTitle2}</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {t.blogDescription}
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
                <CardTitle className="text-foreground group-hover:text-primary transition-colors line-clamp-2 text-lg">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.description}
                </CardDescription>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} {t.minutes}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">TEKNOVA TECH</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
            {t.viewAllArticles}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
