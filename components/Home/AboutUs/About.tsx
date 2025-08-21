"use client"
import { Award, Users, Target, Zap, Shield, Clock, Heart } from "lucide-react"

const About = () => {
  const whyBestFeatures = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Over 10+ years of combined experience delivering exceptional results across various industries.",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "A passionate team of experts committed to your success with 24/7 support and guidance.",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your business growth and ROI.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality, getting you to market faster.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure flawless execution every time.",
      gradient: "from-red-500 to-rose-600",
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "Round-the-clock support and maintenance to keep your business running smoothly.",
      gradient: "from-indigo-500 to-purple-600",
    },
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Heart className="w-4 h-4" />
            About Our Company
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            We Turn{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ideas Into Reality
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12">
            We&apos;re a passionate team of innovators, designers, and developers dedicated to helping businesses thrive
            in the digital world. Our mission is to transform your vision into powerful solutions that drive growth and
            success.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
