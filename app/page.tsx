"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, Calendar, GraduationCap, Code, Send, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:muadh308@gmail.com?subject=${subject}&body=${body}`
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">Muadh George</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Education", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              {["About", "Education", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                MG
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">Muadh George</h1>
              <p className="text-xl sm:text-2xl text-slate-600 mb-8">Software Engineer | CS Student at Georgia Tech</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:muadh308@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail size={18} />
                muadh308@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/muadhgeorge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="tel:404-532-8295"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Phone size={18} />
                (404) 532-8295
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">About Me</h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-4">
            <p>
              I'm a passionate Software Engineer and Computer Science student at Georgia Institute of Technology, with a
              strong foundation in developing innovative software solutions and AI-driven applications. My technical
              expertise spans across full-stack development, cloud technologies, and artificial intelligence.
            </p>
            <p>
              With hands-on experience at companies like CirrusLabs and Headstarter AI, I've successfully implemented
              security enhancements, developed AI-powered chat services, and led engineering teams using modern
              development practices. I'm particularly passionate about leveraging cutting-edge technologies to solve
              complex problems and create impactful solutions.
            </p>
            <p>
              Currently pursuing my Bachelor's degree with a 3.84 GPA, I'm expected to graduate in Fall 2025. I'm always
              eager to take on new challenges and contribute to innovative projects that push the boundaries of
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Education</h2>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl text-slate-800">Georgia Institute of Technology</CardTitle>
                  <CardDescription className="text-lg">Bachelor of Science in Computer Science</CardDescription>
                </div>
                <div className="text-right text-sm text-slate-500">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar size={16} />
                    Expected Fall 2025
                  </div>
                  <div className="flex items-center gap-1">
                    <GraduationCap size={16} />
                    GPA: 3.84
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Relevant Courses:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Object-Oriented Programming",
                    "Data Structures & Algorithms",
                    "Design & Analysis of Algorithms",
                  ].map((course) => (
                    <Badge key={course} variant="secondary">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Experience</h2>
          <div className="space-y-6">
            {/* CirrusLabs */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-800">CirrusLabs</CardTitle>
                    <CardDescription className="text-lg">Software Engineer Intern</CardDescription>
                  </div>
                  <div className="text-sm text-slate-500 flex items-center gap-1">
                    <Calendar size={16} />
                    May 2024 – Aug 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>• Implemented JWT and Microsoft Authentication to enhance security by 30%</li>
                  <li>• Developed AI-driven chat services using OpenAI, reducing response times by 40%</li>
                  <li>• Integrated Azure Cognitive Services improving accessibility by 25%</li>
                  <li>• Utilized Azure Cosmos DB, improving query efficiency by 50%</li>
                </ul>
              </CardContent>
            </Card>

            {/* Headstarter AI */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Headstarter AI</CardTitle>
                    <CardDescription className="text-lg">Software Engineer Fellow</CardDescription>
                  </div>
                  <div className="text-sm text-slate-500 flex items-center gap-1">
                    <Calendar size={16} />
                    Aug 2024 – Present
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>• Built 5+ AI-driven applications using NextJS, OpenAI, Pinecone, and StripeAPI</li>
                  <li>• Led a team of 4 engineers using MVC design patterns</li>
                  <li>• Trained by engineers from Amazon, Bloomberg, and Capital One on Agile and CI/CD</li>
                </ul>
              </CardContent>
            </Card>

            {/* AMO Auto */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-800">AMO Auto</CardTitle>
                    <CardDescription className="text-lg">Frontend Developer</CardDescription>
                  </div>
                  <div className="text-sm text-slate-500 flex items-center gap-1">
                    <Calendar size={16} />
                    Jan 2024 – May 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>
                    • Developed responsive websites using Next.js, JSX, and Tailwind CSS, boosting engagement by 40%
                  </li>
                  <li>• Implemented Edge Functions in Next.js to improve site performance significantly</li>
                </ul>
              </CardContent>
            </Card>

            {/* Georgia Tech Research */}
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-800">Georgia Tech</CardTitle>
                    <CardDescription className="text-lg">Research Assistant</CardDescription>
                  </div>
                  <div className="text-sm text-slate-500 flex items-center gap-1">
                    <Calendar size={16} />
                    Aug 2023 – Dec 2023
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>• Analyzed data to support UN Sustainable Development Goals (SDGs 9 and 16)</li>
                  <li>• Created interactive dashboards and performed big data analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Technical Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* CodeByrd */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                  <Code size={20} />
                  CodeByrd
                </CardTitle>
                <CardDescription>Full-stack Web App</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Developed a full-stack business automation and chatbot system leveraging Google Cloud services,
                  significantly enhancing operational efficiency and user interactions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Google Cloud", "Next.js", "React", "Tailwind CSS"].map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AWS Media Hub */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                  <Code size={20} />
                  AWS-Powered Media Hub
                </CardTitle>
                <CardDescription>Cloud-Native Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Created a scalable media application utilizing AWS Lambda for backend processing, AWS S3 for storage,
                  and CloudFront for content delivery.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AWS Lambda", "S3", "CloudFront", "React"].map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AeroSys */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                  <Code size={20} />
                  AeroSys Flight Operations Platform
                </CardTitle>
                <CardDescription>High-Performance Web Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Built a high-performance web application featuring RESTful and GraphQL APIs, improving data retrieval
                  speeds and security with Auth0 integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "MySQL", "GraphQL"].map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Educator */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                  <Code size={20} />
                  AI Educator: Interactive Math Assistant
                </CardTitle>
                <CardDescription>AI-Powered Educational Tool</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Developed an AI-powered interactive chatbot for educational purposes, achieving rapid response times
                  and optimized user interactions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["OpenAI GPT-3.5", "Flask", "Next.js"].map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Kotlin", "Java", "Python", "TypeScript", "JavaScript", "Go", "C", "HTML5", "CSS", "MATLAB"].map(
                    (skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Frameworks & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "Flask", "GraphQL", "OpenAI API"].map(
                    (skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Cloud & Databases</CardTitle>
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
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Tools & Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Agile", "CI/CD", "Linux", "SQL"].map((skill) => (
                    <Badge key={skill} variant="secondary">
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
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Let's Connect</h3>
              <p className="text-slate-600 mb-6">
                I'm always interested in discussing new opportunities, innovative projects, or just connecting with
                fellow developers. Feel free to reach out!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-slate-600">muadh308@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-green-600" size={20} />
                  <span className="text-slate-600">(404) 532-8295</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-blue-700" size={20} />
                  <a
                    href="https://linkedin.com/in/muadhgeorge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    linkedin.com/in/muadhgeorge
                  </a>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-300">© 2024 Muadh George. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
