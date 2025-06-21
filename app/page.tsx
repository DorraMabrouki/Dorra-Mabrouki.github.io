"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, Menu, X, Download, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const handleDownloadCV = () => {
    // Simple direct download of the PDF file
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Dorra_Mabrouki_CV.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCopyEmail = async () => {
    const email = "dorra.mabrouki@insat.ucar.tn"
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black text-white z-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Dorra Mabrouki</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="hover:text-pink-300 transition-colors uppercase tracking-wide text-sm">
                About me
              </Link>
              <Link href="#skills" className="hover:text-pink-300 transition-colors uppercase tracking-wide text-sm">
                Skills
              </Link>
              <Link href="#portfolio" className="hover:text-pink-300 transition-colors uppercase tracking-wide text-sm">
                Portfolio
              </Link>
              <Link href="#awards" className="hover:text-pink-300 transition-colors uppercase tracking-wide text-sm">
                Awards & Achievements
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4 mt-4">
                <Link
                  href="#about"
                  className="hover:text-gray-300 transition-colors uppercase tracking-wide text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About me
                </Link>
                <Link
                  href="#skills"
                  className="hover:text-gray-300 transition-colors uppercase tracking-wide text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="#portfolio"
                  className="hover:text-gray-300 transition-colors uppercase tracking-wide text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="#awards"
                  className="hover:text-gray-300 transition-colors uppercase tracking-wide text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Awards & Achievements
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">Hi, I am</h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Dorra Mabrouki</h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  Engineering Student / Neuromorphic Computing & Embedded Systems Developer
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button
                  onClick={handleCopyEmail}
                  className="p-3 border border-pink-300 rounded-full hover:bg-pink-50 transition-colors bg-transparent"
                >
                  {emailCopied ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Mail className="w-5 h-5 text-pink-600" />
                  )}
                </Button>
                <Link
                  href="https://github.com/DorraMabrouki"
                  className="p-3 border border-pink-300 rounded-full hover:bg-pink-50 transition-colors"
                >
                  <Github className="w-5 h-5 text-pink-600" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/dorra-mabrouki-644997245/"
                  className="p-3 border border-pink-300 rounded-full hover:bg-pink-50 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-pink-600" />
                </Link>
              </div>

              {/* Email Display */}
              {emailCopied && (
                <div className="text-sm text-green-600 font-medium">Email copied: dorra.mabrouki@insat.ucar.tn</div>
              )}

              {/* CV Download Button */}
              <div className="pt-4">
                <Button
                  onClick={handleDownloadCV}
                  className="bg-pink-600 text-white hover:bg-pink-700 px-6 py-3 text-sm uppercase tracking-wide"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg overflow-hidden border-4 border-pink-200">
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="Dorra Mabrouki"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block border-2 border-pink-600 px-8 py-3 mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-pink-600">About Me</h2>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-gray-600 leading-relaxed mb-8">
              I'm a final-year engineering student specializing in Industrial IT and Automation Engineering. My passion
              lies in neuromorphic computing, IoT systems, and embedded technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block border-2 border-pink-600 px-8 py-3 mb-16">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-pink-600">Skills</h2>
          </div>

          {/* Programming Languages */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-wide">Programming Languages:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/python-programming-language-FQAD4jTp6ZqzWxoe5dB8Qd3poWHgKD.webp"
                    alt="Python"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium uppercase tracking-wide">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO_C%2B%2B_Logo.svg-xKg8A3lXi2c0pBKkSVgBpzJeGlrid6.png"
                    alt="C++"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium uppercase tracking-wide">C/C++</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Javascript-736400_960_720-968SOjkw1Na3lixeSLl08lMMJdv4JJ.png"
                    alt="JavaScript"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium uppercase tracking-wide">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Java_programming_language_logo.svg-x9DOOY8NBKGjtM2xzw4tSjDvM61Xo2.png"
                    alt="Java"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium uppercase tracking-wide">Java</span>
              </div>
            </div>
          </div>

          {/* Robotics & Embedded Systems */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-wide">Robotics & Embedded Systems:</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ROS2-e2fe41ReTIukJGw1yLRDVg5l9roIv1.png"
                    alt="ROS 2"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">ROS 2</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arduino_IDE_logo.svg-F9jZ8A0P1Zu0z5fUZfMt35T38o5VKs.png"
                    alt="Arduino"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">Arduino</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/stm32-T3BVjxb07P2BvqIjHSQRfcekJMPyuS.png"
                    alt="STM32"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">STM32</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/esp32-eS5lniELEFJu4WDfGTmwCqu42r9Jd8.png"
                    alt="ESP32"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">ESP32</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raspberry-pi-logo-1tobXd4rbZo6hsvEw2s57W5tmx3nFG.png"
                    alt="Raspberry Pi"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">Raspberry Pi</span>
              </div>
            </div>
          </div>

          {/* Communication Protocols */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-wide">Communication Protocols:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium uppercase tracking-wide text-gray-700">UART</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium uppercase tracking-wide text-gray-700">SPI</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium uppercase tracking-wide text-gray-700">I2C</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium uppercase tracking-wide text-gray-700">MQTT</span>
              </div>
            </div>
          </div>

          {/* Machine Learning & Neuromorphic Computing */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-wide">ML & Neuromorphic Computing:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10f1de80-dd79-11eb-9f79-228a8b63b03f-g6ZwduXGED7GMGqnGtcoIqgMqzKrAp.png"
                    alt="snnTorch"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">snnTorch</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-2 border-2 border-gray-200 shadow-sm">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-700">SpikingJelly</span>
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">SpikingJelly</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 bg-white p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pytorch_logo_icon_169823-FsV0ByFoT1UusvcbvVVDShndDRsqg2.webp"
                    alt="PyTorch"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">PyTorch</span>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-bold mb-8 uppercase tracking-wide">Languages:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag_of_the_United_Kingdom_%281-2%29.svg-zl7hy0qU2bpdtvCEiray41rtWFuHQD.png"
                    alt="UK Flag"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">English</span>
                <span className="text-xs text-pink-600 font-semibold">C1</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag-France-T7ufyww7BImZK23bfprJ1ZzFCmGI1W.webp"
                    alt="French Flag"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">French</span>
                <span className="text-xs text-pink-600 font-semibold">C1</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag_of_Germany.svg-9zLjSFn0dhNGMtqaScah5QI3yTdyt0.webp"
                    alt="German Flag"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">German</span>
                <span className="text-xs text-pink-600 font-semibold">A2</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-gray-300">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flag_of_Saudi_Arabia.svg-ZV1QAhMcKf9xShxTBE2RPiL0xR9AzT.webp"
                    alt="Arabic Flag"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-medium uppercase tracking-wide">Arabic</span>
                <span className="text-xs text-pink-600 font-semibold">Native</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block border-2 border-pink-600 px-8 py-3 mb-16">
            <h2 className="text-2xl font-bold uppercase tracking-wider text-pink-600">Awards & Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* KOSPIE Scholarship */}
            <Card className="p-8 bg-white border-pink-200 hover:border-pink-400 transition-colors">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DAAD_Logo_Suppl_de-en_H_XS_RGB.jpg-gYbM8Lf4IY9EeEcQFpKmaJAHY78lZr.jpeg"
                    alt="DAAD Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-pink-600">KOSPIE Tunisia Scholarship</h3>
                <p className="text-sm text-gray-500 mb-4">DAAD • February 2025</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Awarded a six-month research scholarship to conduct a final-year engineering project at Technische
                  Universität Chemnitz, focusing on neuromorphic computing and machine learning.
                </p>
              </div>
            </Card>

            {/* EUROBOT First Place */}
            <Card className="p-8 bg-white border-pink-200 hover:border-pink-400 transition-colors">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eurobot-2n3O7cSv54v270kFVTvqECCx3DPBZT.png"
                    alt="Eurobot Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-pink-600">EUROBOT Competition</h3>
                <p className="text-sm text-gray-500 mb-4">First Place • April 2023</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  First place in the Tunisian Qualification for the International Robotics Competition EUROBOT.
                  Developed autonomous robots with computer vision and obstacle avoidance capabilities.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Portfolio Header */}
          <div className="text-center mb-16">
            <div className="inline-block border-2 border-pink-600 px-8 py-3 mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider text-pink-600">Portfolio</h2>
            </div>
          </div>

          {/* Experience Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12 uppercase tracking-wide">Professional Experience</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* TU Chemnitz */}
              <Card className="p-6 bg-white border-pink-200 hover:border-pink-400 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TUC-52w34v1WSl7LZ1WGYxNfg00YmRPbTm.png"
                      alt="TU Chemnitz"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-pink-600 mb-1">Neuromorphic Computing Intern</h4>
                    <p className="text-sm text-gray-600 mb-2">Technische Universität Chemnitz • Feb 2025 - Present</p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      Designing Spiking Neural Network (SNN) models for hand gesture recognition using EIT datasets.
                      Implementing FPGA-based architectures and applying compression techniques for edge deployment.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">snnTorch</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">PyTorch</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">FPGA</span>
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">Verilog</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Technozor */}
              <Card className="p-6 bg-white border-pink-200 hover:border-pink-400 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1685353894745-6KRAvL1ZOpiz0Oeg4AtmmvbCmw38fW.jpeg"
                      alt="Technozor"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-pink-600 mb-1">IoT & Embedded Systems Intern</h4>
                    <p className="text-sm text-gray-600 mb-2">Technozor • Jun 2024 - Aug 2024</p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      Developed LoRaWAN Gateway for agricultural monitoring with 10km coverage and 95% packet delivery
                      rate. Built sensor nodes and implemented real-time data processing on The Things Network.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">LoRaWAN</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Raspberry Pi</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Arduino</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">JavaScript</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Kromberg & Schubert */}
              <Card className="p-6 bg-white border-pink-200 hover:border-pink-400 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-F2LWNUJhJkB8UdqG9aUk7ywlXIIygG.png"
                      alt="Kromberg & Schubert"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-pink-600 mb-1">Embedded Software Engineer Intern</h4>
                    <p className="text-sm text-gray-600 mb-2">Kromberg & Schubert • Jun 2023 - Aug 2023</p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      Developed real-time monitoring dashboard for DC machine voltage and current analysis. Integrated
                      ESP32 with Firebase for predictive maintenance and system performance evaluation.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">ESP32</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Firebase</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">C/C++</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Python</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Aeros Innovation */}
              <Card className="p-6 bg-white border-pink-200 hover:border-pink-400 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482238757_629063896572305_290181057588566457_n.jpg-Qc6f1frN6kcN0l1CQprcdqJjrgOWAp.jpeg"
                      alt="Aeros Innovation Center"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-pink-600 mb-1">Robotics Instructor</h4>
                    <p className="text-sm text-gray-600 mb-2">Aeros Innovation Center • Jun 2024 - Aug 2024</p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      Taught Arduino programming and Scratch to students. Supervised robotics projects and introduced
                      fundamental algorithms through hands-on problem-solving activities.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Arduino</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Scratch</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Teaching</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Robotics</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12 uppercase tracking-wide">Personal Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* EUROBOT Competition */}
              <Card className="group cursor-pointer overflow-hidden border-pink-200 hover:border-pink-400 transition-colors">
                <div className="relative h-64">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/333676337_1264680737810648_3234634635434012156_n.jpg-HBssor0Lv0CbK2xTRDqSGlchbZEUxD.jpeg"
                    alt="Eurobot Competition Project"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-center text-white p-4">
                      <span className="font-medium block text-lg">EUROBOT Competition</span>
                      <span className="text-sm">🥇 First Place • 2023</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-pink-600 mb-2">EUROBOT Competition Robot</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Designed and built autonomous robots for the international EUROBOT competition. Implemented computer
                    vision for object detection, path planning algorithms, and obstacle avoidance systems using ROS1 and
                    STM32 microcontrollers.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">ROS1</span>
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">STM32</span>
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">Computer Vision</span>
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">Path Planning</span>
                  </div>
                </div>
              </Card>

              {/* Two-Tank Liquid System */}
              <Card className="group cursor-pointer overflow-hidden border-pink-200 hover:border-pink-400 transition-colors">
                <div className="relative h-64 bg-gradient-to-br from-blue-600 to-cyan-600">
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <span className="font-medium block text-lg">Two-Tank Liquid System</span>
                      <span className="text-sm">Control Systems • 2024</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-pink-600 mb-2">Two-Tank Liquid Level Control</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Developed a PID-controlled liquid level management system for industrial applications. Implemented
                    real-time monitoring and control using LabVIEW interface with Arduino-based sensor integration and
                    automated valve control.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">PID Control</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">LabVIEW</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Arduino</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Process Control</span>
                  </div>
                </div>
              </Card>

              {/* Smart Home System */}
              <Card className="group cursor-pointer overflow-hidden border-pink-200 hover:border-pink-400 transition-colors">
                <div className="relative h-64 bg-gradient-to-br from-purple-600 to-pink-600">
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <span className="font-medium block text-lg">Smart Home Automation</span>
                      <span className="text-sm">IoT Project • 2023</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-pink-600 mb-2">Smart Home Automation System</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Built a comprehensive home automation system using Home Assistant platform. Integrated multiple IoT
                    devices with MQTT protocol, implemented voice control, and deployed using Docker containers for
                    scalable smart home management.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Home Assistant</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">MQTT</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Docker</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">IoT</span>
                  </div>
                </div>
              </Card>

              {/* Drone Stabilization */}
              <Card className="group cursor-pointer overflow-hidden border-pink-200 hover:border-pink-400 transition-colors">
                <div className="relative h-64 bg-gradient-to-br from-green-600 to-teal-600">
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <span className="font-medium block text-lg">Drone Stabilization</span>
                      <span className="text-sm">Flight Control • 2022</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-pink-600 mb-2">Drone Stabilization System</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Designed and implemented a custom flight controller for quadcopter stabilization. Developed PID
                    control algorithms for attitude stabilization using IMU sensor fusion, gyroscope, and accelerometer
                    data processing with Arduino.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">PID Control</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">IMU</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Arduino</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Flight Control</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">©2024 Dorra Mabrouki All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
