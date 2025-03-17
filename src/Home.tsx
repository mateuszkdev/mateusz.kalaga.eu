/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Mail, ArrowDown, Code, Layout, Palette, GraduationCap, Briefcase } from "lucide-react"
import "./App.css"
import GithubIcon from "./GithubIcon"
import DiscordIcon from "./DiscordIcon"
import {
  NodejsIcon,
  DenoIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  NextjsIcon,
  ReactIcon,
  ViteIcon,
  MongoDBIcon,
  SQLIcon,
  PythonIcon,
  ShadcnIcon,
} from './TechIcons'
// @ts-ignore
import projects from "./projects"
// @ts-ignore
import journey from "./journey"

const Home = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ["home", "about", "projects", "skills", "timeline", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Journey" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }
    setMenuOpen(false)
  }

  return (
    <div className="relative">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white font-bold text-2xl"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Mateusz Kalaga
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white hover:text-purple-400 transition-colors ${
                  activeSection === item.id ? "text-purple-400 font-medium" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/90 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-white hover:text-purple-400 transition-colors py-2 ${
                      activeSection === item.id ? "text-purple-400 font-medium" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Mateusz Kalaga
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 mb-8"
            >
              Fullstack Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-4"
            >
              <motion.a
                href="https://github.com/mateuszkdev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>

              <motion.a
                href="https://discord.gg/QHn3uhHGhR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <DiscordIcon />
              </motion.a>

              <motion.a
                href="mailto:test@test.com"
                className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </h2>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                  <img
                    src="/dsc_avatar.png?height=192&width=192"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-gray-300">
                  Hi, I'm Mateusz, {new Date().getFullYear() - 2002} year's old seasoned backend developer with{" "}
                  {new Date().getFullYear() - 2018} years of experience. My expertise lies in backend systems using
                  mainly node/deno and js/ts but I'm not completely unfamiliar with other technologies. I also have a
                  good grasp of fundamental web development.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              My Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(
                (
                  project: {
                    title: string
                    description: string
                    image: string
                    tags: string[]
                    archived: boolean
                    url: string
                    github: string
                  },
                  index: number,
                ) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                        {project.archived && (
                          <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-full">Archived</span>
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:underline"
                          >
                            View Project
                          </a>
                        )}
                        {project.github && (
                          <>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 group"
                            >
                              {project.url ? (
                                <>
                                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    View on GitHub
                                  </span>
                                  <GithubIcon />
                                </>
                              ) : (
                                <>
                                  <GithubIcon />
                                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    View on GitHub
                                  </span>
                                </>
                              )}
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Technologies I Use
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Node.js", icon: <NodejsIcon /> },
                { name: "Deno", icon: <DenoIcon /> },
                { name: "TypeScript", icon: <TypeScriptIcon /> },
                { name: "JavaScript", icon: <JavaScriptIcon /> },
                { name: "Tailwind CSS", icon: <TailwindIcon /> },
                { name: "Next.js", icon: <NextjsIcon /> },
                { name: "React", icon: <ReactIcon /> },
                { name: "Vite.js", icon: <ViteIcon /> },
                { name: "MongoDB", icon: <MongoDBIcon /> },
                { name: "SQL", icon: <SQLIcon /> },
                { name: "Python", icon: <PythonIcon /> },
                { name: "Shadcn", icon: <ShadcnIcon /> },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-white">{skill.icon}</div>
                    <h3 className="text-xl font-medium text-white">{skill.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              My Journey
            </h2>

            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></div>

              {journey.map((item: { year: string; title: string; company: string; description: string; icon: string }, index: number) => (
                <motion.div
                  key={index}
                  className={`relative z-10 mb-12 flex items-center timeline-mobile-adjust ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-colors shadow-lg">
                      <span className="text-sm font-semibold text-purple-400">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.company}</p>
                      <p className="text-gray-300 mt-3">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                      {item.icon === "Code" && <Code className="w-6 h-6 text-white" />}
                      {item.icon === "Layout" && <Layout className="w-6 h-6 text-white" />}
                      {item.icon === "Palette" && <Palette className="w-6 h-6 text-white" />}
                      {item.icon === "GraduationCap" && <GraduationCap className="w-6 h-6 text-white" />}
                      {item.icon === "Briefcase" && <Briefcase className="w-6 h-6 text-white" />}
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-black to-purple-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              You can reach me at
            </h2>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-center text-gray-300 space-y-4">
              <p className="text-lg">Feel free to reach out to me via email or Discord:</p>
              <div>
                <p className="text-lg font-medium">Email:</p>
                <a href="mailto:test@test.com" className="text-purple-400 hover:underline text-xl">
                  test@test.com
                </a>
              </div>
              <div>
                <p className="text-lg font-medium">Discord:</p>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline text-xl"
                >
                  https://discord.gg/QHn3uhHGhR
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Mateusz Kalaga © {new Date().getFullYear() == 2025 ? "2025" : `2025 - ${new Date().getFullYear()}`}
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com/mateuszkdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon />
              </a>

              <a
                href="https://discord.gg/QHn3uhHGhR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <DiscordIcon />
              </a>

              <a href="mailto:example@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

