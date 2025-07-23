"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Linkedin,
  Calendar,
  GraduationCap,
  Code,
  Send,
  Menu,
  X,
  ChevronDown,
  Github,
  ExternalLink,
  Award,
  Briefcase,
  BookOpen,
  Zap,
  Instagram,
  MapPin,
  Star,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "education", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:muadh308@gmail.com?subject=${subject}&body=${body}`

    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-gray-800 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Muadh George
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-12">
            {/* Profile Image */}
            <div className="relative w-48 h-48 mx-auto mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow p-1">
                <div className="w-full h-full bg-black rounded-full overflow-hidden">
                  <Image
                    src="/images/muadh-profile.jpg"
                    alt="Muadh George"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>

            {/* Name and Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Muadh George
              </span>
            </h1>
            <div className="text-2xl sm:text-3xl text-gray-300 mb-8 font-light">
              <span className="inline-block animate-pulse">Software Engineer</span>
            </div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate about developing innovative software solutions and AI-driven applications that make a real
              impact. Specializing in full-stack development, cloud technologies, and artificial intelligence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="flex items-center gap-2">
                <Code size={20} />
                View My Work
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 border-2 border-gray-600 rounded-full font-semibold hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-gray-400 hover:text-purple-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="group">
                <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  <CardContent className="p-6">
                    <p className="text-gray-300 leading-relaxed">
                      I'm a passionate Software Engineer pursuing my degree in Computer Science at Georgia Institute of
                      Technology. With a strong foundation in full-stack development, cloud technologies, and artificial
                      intelligence, I thrive on creating innovative solutions that solve real-world problems.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="group">
                <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <CardContent className="p-6">
                    <p className="text-gray-300 leading-relaxed">
                      My experience spans from implementing secure authentication systems to developing AI-driven
                      applications that serve thousands of users. I'm particularly passionate about leveraging
                      cutting-edge technologies like OpenAI, cloud services, and modern web frameworks to create
                      impactful solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="group">
                <Card className="bg-gray-900/50 border-gray-800 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
                  <CardContent className="p-6">
                    <p className="text-gray-300 leading-relaxed">
                      When I'm not coding, you'll find me exploring the latest developments in AI and machine learning,
                      contributing to open-source projects, or mentoring fellow developers. I believe in continuous
                      learning and staying at the forefront of technology innovation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30 hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Code className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-2">5+ Projects</h3>
                    <p className="text-gray-400 text-sm">AI-Driven Applications</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-2">3.50 GPA</h3>
                    <p className="text-gray-400 text-sm">Computer Science</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-900/30 to-cyan-900/30 border-green-500/30 hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Briefcase className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-2">4+ Roles</h3>
                    <p className="text-gray-400 text-sm">Professional Experience</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-pink-900/30 to-red-900/30 border-pink-500/30 hover:scale-105 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-white font-semibold mb-2">Research</h3>
                    <p className="text-gray-400 text-sm">UN SDGs Analysis</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <MapPin className="text-blue-400" size={20} />
                      <span className="text-gray-300">Based in Atlanta, GA</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Star className="text-yellow-400" size={20} />
                      <span className="text-gray-300">Available for new opportunities</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 border-l-4 border-l-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-white flex items-center gap-3 mb-2">
                      <GraduationCap className="text-blue-400" />
                      Georgia Institute of Technology
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-300">
                      Bachelor of Science in Computer Science
                    </CardDescription>
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={16} />
                      Graduation: May 2025
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={16} />
                      GPA: 3.50
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold text-gray-300 mb-3">Relevant Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Object-Oriented Programming",
                      "Data Structures & Algorithms",
                      "Design & Analysis of Algorithms",
                    ].map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-500/30"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* CirrusLabs */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 border-l-4 border-l-purple-500 group hover:shadow-xl hover:shadow-purple-500/10">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors duration-300">
                      CirrusLabs
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-300">Software Engineer Intern</CardDescription>
                  </div>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <Calendar size={16} />
                    May 2024 – Aug 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    Implemented JWT and Microsoft Authentication to enhance security by 30%
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    Developed AI-driven chat services using OpenAI, reducing response times by 40%
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    Integrated Azure Cognitive Services improving accessibility by 25%
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    Utilized Azure Cosmos DB, improving query efficiency by 50%
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Headstarter AI */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 border-l-4 border-l-green-500 group hover:shadow-xl hover:shadow-green-500/10">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors duration-300">
                      Headstarter AI
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-300">Software Engineer Fellow</CardDescription>
                  </div>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <Calendar size={16} />
                    Aug 2024 – Present
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    Built 5+ AI-driven applications using NextJS, OpenAI, Pinecone, and StripeAPI
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    Led a team of 4 engineers using MVC design patterns
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    Trained by engineers from Amazon, Bloomberg, and Capital One on Agile and CI/CD
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AMO Auto */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 border-l-4 border-l-blue-500 group hover:shadow-xl hover:shadow-blue-500/10">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                      AMO Auto
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-300">Frontend Developer</CardDescription>
                  </div>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <Calendar size={16} />
                    Jan 2024 – May 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    Developed responsive websites using Next.js, JSX, and Tailwind CSS, boosting engagement by 40%
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    Implemented Edge Functions in Next.js to improve site performance significantly
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Georgia Tech Research */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all duration-300 border-l-4 border-l-yellow-500 group hover:shadow-xl hover:shadow-yellow-500/10">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors duration-300">
                      Georgia Tech
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-300">Research Assistant</CardDescription>
                  </div>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <Calendar size={16} />
                    Aug 2023 – Dec 2023
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    Analyzed data to support UN Sustainable Development Goals (SDGs 9 and 16)
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    Created interactive dashboards and performed big data analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technical Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CodeByrd */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2 group-hover:text-purple-400 transition-colors duration-300">
                  <Code size={20} />
                  CodeByrd
                </CardTitle>
                <CardDescription className="text-gray-300">Full-stack Business Automation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Developed a full-stack business automation and chatbot system leveraging Google Cloud services,
                  significantly enhancing operational efficiency and user interactions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Google Cloud", "Next.js", "React", "Tailwind CSS"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 bg-transparent"
                    onClick={() => window.open("https://codebyrd.com", "_blank")}
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AWS Media Hub */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
                  <Code size={20} />
                  AWS-Powered Media Hub
                </CardTitle>
                <CardDescription className="text-gray-300">Scalable Media Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Created a scalable media application utilizing AWS Lambda for backend processing, AWS S3 for storage,
                  and CloudFront for content delivery.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["AWS Lambda", "S3", "CloudFront", "React"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20 bg-transparent"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AeroSys */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2 group-hover:text-green-400 transition-colors duration-300">
                  <Code size={20} />
                  AeroSys Flight Operations Platform
                </CardTitle>
                <CardDescription className="text-gray-300">High-Performance Web Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Built a high-performance web application featuring RESTful and GraphQL APIs, improving data retrieval
                  speeds and security with Auth0 integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Node.js", "Express", "MySQL", "GraphQL"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-green-500/50 text-green-300 hover:bg-green-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-500/50 text-green-300 hover:bg-green-500/20 bg-transparent"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Educator */}
            <Card className="bg-gray-900/50 border-gray-800 hover:border-pink-500/50 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-pink-500/10">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2 group-hover:text-pink-400 transition-colors duration-300">
                  <Code size={20} />
                  AI Educator: Interactive Math Assistant
                </CardTitle>
                <CardDescription className="text-gray-300">AI-Powered Educational Tool</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Developed an AI-powered interactive chatbot for educational purposes, achieving rapid response times
                  and optimized user interactions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["OpenAI GPT-3.5", "Flask", "Next.js"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-pink-500/50 text-pink-300 hover:bg-pink-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-pink-500/50 text-pink-300 hover:bg-pink-500/20 bg-transparent"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Code className="text-purple-400" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Kotlin",
                    "Java",
                    "Python",
                    "TypeScript",
                    "JavaScript",
                    "Go",
                    "C",
                    "HTML5",
                    "CSS",
                    "MATLAB",
                    "SQL",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border-purple-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Zap className="text-blue-400" />
                  Frameworks & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "Flask", "GraphQL", "OpenAI API"].map(
                    (skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-500/30"
                      >
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Award className="text-green-400" />
                  Cloud & Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS Lambda",
                    "S3",
                    "CloudFront",
                    "AppSync",
                    "Google Cloud",
                    "Azure",
                    "MySQL",
                    "Cosmos DB",
                    "Auth0",
                  ].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-green-500/20 text-green-300 hover:bg-green-500/30 border-green-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/10 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Briefcase className="text-pink-400" />
                  Tools & Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Agile", "CI/CD", "Linux", "SQL"].map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 border-pink-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow
              developers. Let's build something amazing together!
            </p>
          </div>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <CardHeader>
              <CardTitle className="text-white text-center">Send Me a Message</CardTitle>
              <CardDescription className="text-gray-300 text-center">
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/20"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Muadh George
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Software Engineer passionate about creating innovative solutions with AI and modern web technologies.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.slice(1).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MuadhGeorge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.instagram.com/muadhgeorge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/muadhgeorge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024 Muadh George. Built with Next.js, Tailwind CSS, and lots of ☕</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
