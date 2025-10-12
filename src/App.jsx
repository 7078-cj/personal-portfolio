import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  GraduationCap,
  Code,
  Book,
  Star,
  Sparkles,
  Coffee,
  Music,
  Camera,
  Gamepad2,
  Facebook,
  TrendingUp,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function App() {
  return (
    <div className="scroll-smooth overflow-x-hidden bg-[#f5f3ed]">
      {/* HEADER */}
      <header className="bg-[#1a3a2e]/95 text-white fixed top-0 w-full z-50 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">
          <div className="flex items-center gap-2">
            <Star className="text-[#f5a623]" size={20} fill="#f5a623" />
            <span className="font-bold tracking-wider">Ceejay Santos</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-[#f5a623] transition-colors">
              About me
            </a>
            <a href="#info" className="hover:text-[#f5a623] transition-colors">
              Info
            </a>
            <a href="#work" className="hover:text-[#f5a623] transition-colors">
              Work
            </a>
            <a
              href="#contact"
              className="bg-[#f5a623] px-5 py-2 rounded-full text-[#1a3a2e] hover:bg-[#ff9800] transition-all shadow-lg"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-br from-[#0f2018] via-[#1a3a2e] to-[#0d1f19] text-white pt-28 relative overflow-hidden"
      >
        {/* Floating Accent Stars */}
        <div className="absolute top-24 left-10 animate-pulse-slow">
          <Star className="text-[#f5a623]" size={42} fill="#f5a623" />
        </div>
        <div className="absolute top-56 left-24 opacity-90 animate-float">
          <Star className="text-[#f5a623]" size={28} fill="#f5a623" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-80 animate-float-delayed">
          <Star className="text-[#f5a623]" size={36} fill="#f5a623" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Typography */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.div
              variants={fadeUp}
              className="bg-gradient-to-br from-[#c47834] to-[#e8b27a] text-[#1a3a2e] px-8 py-12 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

              <div className="space-y-3 relative z-10">
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none">
                  <span
                    className="block"
                    style={{
                      WebkitTextStroke: "3px #2a4a3a",
                      color: "transparent",
                      textShadow: "4px 4px 0 #2a4a3a",
                    }}
                  >
                    CEE
                  </span>
                  <span
                    className="block"
                    style={{
                      WebkitTextStroke: "3px #f5a623",
                      color: "transparent",
                      textShadow: "4px 4px 0 #2a4a3a",
                    }}
                  >
                    JAY
                  </span>
                </h1>
                <p className="text-lg font-medium tracking-wide uppercase text-[#1a3a2e]/80 mt-[50px]">
                  Full-Stack Developer • ML Engineer
                </p>
              </div>

              <img
                src="Hero_image.jpg"
                alt="Profile"
                className="absolute -right-8 -top-8 w-72 h-96 object-cover rounded-2xl shadow-2xl border-4 border-[#2a4a3a] transform hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#c47834]/90 text-[#1a3a2e] px-6 py-5 rounded-xl shadow-lg backdrop-blur-sm hover:shadow-[#f5a623]/40 transition-all duration-500"
            >
              <p className="opacity-90 text-base md:text-lg leading-relaxed">
                An aspiring <span className="font-semibold">Full-Stack Developer</span> and{" "}
                <span className="font-semibold">Machine Learning Engineer</span>. Currently working on a{" "}
                <span className="text-[#1a3a2e] font-medium">Stock Prediction Website</span> and learning{" "}
                <span className="text-[#1a3a2e] font-medium">LSTM time series forecasting models</span>.
                Passionate about scalable, intelligent web applications and AI integrations.
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Info */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="space-y-8 text-right md:text-left"
          >
            <motion.div variants={fadeUp}>
              <h2
                className="text-7xl md:text-8xl lg:text-9xl font-extrabold mb-10 tracking-tight uppercase"
                style={{
                  WebkitTextStroke: "2px #f5a623",
                  color: "transparent",
                }}
              >
                SANTOS
              </h2>

              <div className="space-y-3 text-lg font-medium">
                <div className="flex items-center gap-3 justify-start md:justify-start">
                  <span className="text-[#f5a623] font-semibold">GitHub:</span>
                  <a
                    href="https://github.com/7078-cj"
                    className="hover:text-[#f5a623] transition-colors duration-300"
                  >
                    @7078-cj
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-start md:justify-start">
                  <span className="text-[#f5a623] font-semibold">Instagram:</span>
                  <a
                    href="https://instagram.com/c7078j"
                    className="hover:text-[#f5a623] transition-colors duration-300"
                  >
                    @c7078j
                  </a>
                </div>
                <div className="flex items-center gap-3 justify-start md:justify-start">
                  <span className="text-[#f5a623] font-semibold">LinkedIn:</span>
                  <a
                    href="https://linkedin.com/in/7078-cj"
                    className="hover:text-[#f5a623] transition-colors duration-300"
                  >
                    /7078-cj
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex justify-start md:justify-start"
            >
              <div className="group bg-[#f5a623] text-[#1a3a2e] rounded-full px-6 py-3 flex items-center gap-3 font-medium hover:bg-[#ffd479] transition-all duration-500 shadow-lg hover:shadow-[#f5a623]/50 cursor-pointer">
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Scroll Down</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0d1f19] via-transparent to-transparent"></div>
      </section>


      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="min-h-screen bg-[#f5f3ed] py-20 px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Image */}
          <motion.div variants={scaleIn} className="relative">
            <div className="bg-[#2a4a3a] rounded-3xl p-8 relative">
              <img
                src="img.jpg"
                alt="Profile"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-16 left-16 bg-[#f5a623] text-[#1a3a2e] px-6 py-3 rounded-full">
                <p>College Student</p>
              </div>
              <div className="absolute bottom-8 right-8 bg-[#f5a623] text-[#1a3a2e] px-6 py-3 rounded-full">
                <p>Filipino</p>
              </div>
            </div>
          </motion.div>

          {/* Right - About Text */}
          <div className="space-y-8">
            <motion.div variants={fadeUp}>
              <h2 className="text-6xl md:text-7xl mb-4">
                Hello,
                <br />
                I'm Ceejay!
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Full-stack Developer proficient in Django, React, and RESTful APIs,
                with experience in computer vision and real-time collaboration tools.
                Skilled in Python-based AI integrations and building scalable web
                applications.
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <TrendingUp className="text-[#f5a623]" size={20} />
                  <span>Currently working on: <span className="text-[#1a3a2e]">Learning....</span></span>
                </p>
                <p className="flex items-center gap-2">
                  <Brain className="text-[#f5a623]" size={20} />
                  <span>Currently learning: <span className="text-[#1a3a2e]">Math needed for machine learning</span></span>
                </p>
              </div>
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="https://github.com/7078-cj"
              className="bg-[#f5a623] text-[#1a3a2e] px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#ff9800] transition-all shadow-lg group"
            >
              <Github size={20} />
              <span>github.com/7078-cj</span>
            </motion.a>

            <motion.div
              variants={fadeUp}
              className="bg-[#1a3a2e] text-white p-8 rounded-2xl space-y-4"
            >
              <h3 className="text-[#f5a623]">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin size={18} className="text-[#f5a623]" />
                  Sampaloc, Apalit, Pampanga
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={18} className="text-[#f5a623]" />
                  7078ceejay@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={18} className="text-[#f5a623]" />
                  +63 994 988 4809
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* EDUCATION & EXPERIENCE SECTION */}
      <section id="info" className="bg-gradient-to-b from-[#1a3a2e] to-[#0d1f19] text-white py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-5xl mb-12 text-[#f5a623]"
            >
              Education
            </motion.h2>
            <div className="space-y-6">
              <motion.div
                variants={fadeUp}
                className="flex gap-4 border-l-4 border-[#f5a623] pl-6"
              >
                <Star className="text-[#f5a623] mt-1 flex-shrink-0" size={24} fill="#f5a623" />
                <div>
                  <p className="text-[#f5a623]">2022 - 2023</p>
                  <h4>La Verdad Christian College</h4>
                  <p className="text-gray-300">Expected Graduation: 2027</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Dean's List 1st & 2nd Year (1st & 2nd Semester)
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex gap-4 border-l-4 border-[#f5a623] pl-6"
              >
                <Star className="text-[#f5a623] mt-1 flex-shrink-0" size={24} fill="#f5a623" />
                <div>
                  <p className="text-[#f5a623]">2021 - 2022</p>
                  <h4>La Verdad Christian College</h4>
                  <p className="text-gray-300">JHS & SHS</p>
                  <p className="text-sm text-gray-400 mt-2">2017–2023 — Graduate</p>
                </div>
              </motion.div>


            </div>

            <motion.div variants={fadeUp} className="mt-12 space-y-6">
              <h3 className="text-3xl text-[#f5a623]">Skills & Strengths</h3>
              
              <div className="flex gap-3 flex-wrap">
                <div className="bg-[#c47834] text-[#1a3a2e] px-6 py-2 rounded-full text-sm">
                  #FullStack
                </div>
                <div className="bg-[#c47834] text-[#1a3a2e] px-6 py-2 rounded-full text-sm">
                  #MachineLearning
                </div>
                <div className="bg-[#c47834] text-[#1a3a2e] px-6 py-2 rounded-full text-sm">
                  #ComputerVision
                </div>
              </div>
              <div className="flex gap-3 flex-wrap">
                <div className="bg-[#1a3a2e] text-white px-6 py-2 rounded-full text-sm">
                  #API Development
                </div>
                <div className="bg-[#1a3a2e] text-white px-6 py-2 rounded-full text-sm">
                  #Real-time Apps
                </div>
                <div className="bg-[#1a3a2e] text-white px-6 py-2 rounded-full text-sm">
                  #AI Integration
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Resume/Skills */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-6xl md:text-7xl mb-12"
              style={{
                WebkitTextStroke: "2px #f5a623",
                color: "transparent",
              }}
            >
              INFO's
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="bg-[#f5a623] text-[#1a3a2e] p-8 rounded-2xl mb-8"
            >
              <h3 className="text-3xl mb-8">Technical skills</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-4">Specializations</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="mb-1">Backend & APIs:</p>
                      <p className="text-sm opacity-80">
                        Django REST Framework, Socket.io, Gunicorn, Nginx
                      </p>
                    </div>
                    <div>
                      <p className="mb-1">Machine Learning & AI:</p>
                      <p className="text-sm opacity-80">
                        TensorFlow, scikit-learn, OpenCV, YOLO, LSTM
                      </p>
                    </div>
                    <div>
                      <p className="mb-1">Mobile Development:</p>
                      <p className="text-sm opacity-80">
                        React Native, Expo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <div className="bg-[#1a3a2e] text-white px-4 py-2 rounded-full text-sm">
                    RESTful APIs
                  </div>
                  <div className="bg-[#1a3a2e] text-white px-4 py-2 rounded-full text-sm">
                    WebSockets
                  </div>
                  <div className="bg-[#1a3a2e] text-white px-4 py-2 rounded-full text-sm">
                    Computer Vision
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <div className="bg-[#1a3a2e] text-white px-4 py-2 rounded-full text-sm">
                    UI/UX Design
                  </div>
                  <div className="bg-[#1a3a2e] text-white px-4 py-2 rounded-full text-sm">
                    Database Design
                  </div>
                  <div className="bg-[#1a3a2e] text-white px-4 py-2 rounded-full text-sm">
                    Docker
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#2a4a3a] text-white p-8 rounded-2xl mb-8"
            >
              <h3 className="text-3xl mb-6">Databases & Tools</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#f5a623]">Databases</h4>
                  <p className="text-sm text-gray-300">PostgreSQL, SQLite, Redis, MySQL</p>
                </div>
                <div>
                  <h4 className="text-[#f5a623]">Tools</h4>
                  <p className="text-sm text-gray-300">Git, Docker, Figma, Canva, JWT</p>
                </div>
                <div>
                  <h4 className="text-[#f5a623]">Desktop</h4>
                  <p className="text-sm text-gray-300">PyQt, C#</p>
                </div>
                <div>
                  <h4 className="text-[#f5a623]">ORMs</h4>
                  <p className="text-sm text-gray-300">SQLAlchemy, Django ORM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#2a4a3a] text-white p-8 rounded-2xl"
            >
              <h3 className="text-3xl mb-6">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#f5a623] p-4 rounded-full">
                    <Code className="text-[#1a3a2e]" size={32} />
                  </div>
                  <p className="text-sm text-center">Coding Projects</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#f5a623] p-4 rounded-full">
                    <Brain className="text-[#1a3a2e]" size={32} />
                  </div>
                  <p className="text-sm text-center">AI & ML Research</p>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#f5a623] p-4 rounded-full">
                    <Gamepad2 className="text-[#1a3a2e]" size={32} />
                  </div>
                  <p className="text-sm text-center">Gaming</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <h3 className="text-3xl mb-6 text-[#f5a623]">Achievements</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Star className="text-[#f5a623] mt-1" size={20} fill="#f5a623" />
                  <div>
                    <p className="text-[#f5a623]">2025 - Present</p>
                    <p>Competitions</p>
                    <p className="text-sm text-gray-400">
                      Champion in CyberSecurity Competition
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Star className="text-[#f5a623] mt-1" size={20} fill="#f5a623" />
                  <div>
                    <p className="text-[#f5a623]">2024 </p>
                    <p>Dean's List Recognition</p>
                    <p className="text-sm text-gray-400">
                      Consistently on Dean's List for 1st & 2nd Year (All Semesters)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Star className="text-[#f5a623] mt-1" size={20} fill="#f5a623" />
                  <div>
                    <p className="text-[#f5a623]">2024</p>
                    <p>First Commissioned Project</p>
                    <p className="text-sm text-gray-400">
                      Uniform Detection System - Successfully delivered to client
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS/WORK SECTION */}
      <motion.section
        id="work"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="min-h-screen bg-[#f5f3ed] py-20 px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeUp}
            className="text-6xl md:text-7xl mb-16 text-[#1a3a2e]"
          >
            Development Experience
          </motion.h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {[
              {
                title: "Stock Prediction Website",
                role: "Full Stack Developer & ML Engineer",
                tools: "Django, TensorFlow, LSTM, React",
                desc: "A web application for stock market prediction using LSTM time series forecasting models. Features real-time data analysis and prediction visualization.",
                link: "https://github.com/7078-cj/Stock-Prediction-Website"
              },
              {
                title: "AguhED",
                role: "Backend Developer",
                tools: "Django, YOLO, React, WebSockets",
                desc: "A website that tracks hand gestures to control PowerPoint presentations — reduced manual switching by 100%. Also includes sign language detection using real-time WebSockets.",
                link: "https://github.com/7078-cj/AguhED",
              },
              {
                title: "Uniform Detection",
                role: "Full Stack Developer",
                tools: "React, Django, YOLO",
                desc: "Detects if students are wearing a uniform. YOLO model integrated in backend — first commissioned project.",
                link: "https://github.com/7078-cj/Uniform-Detection",
              },
              {
                title: "DreamLog",
                role: "Full Stack Developer",
                tools: "React, Laravel, Inertia",
                desc: "A blogging platform that allows customization with text and image components. Built with React + Laravel.",
                link:"https://github.com/LVCCWAD/DreamLog"
              },
            ].map((proj, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group relative ${
                  proj.featured ? "ring-2 ring-[#f5a623]" : ""
                }`}
              >
                {proj.featured && (
                  <div className="absolute -top-3 left-6 bg-[#f5a623] text-[#1a3a2e] px-4 py-1 rounded-full text-sm">
                    🚀 Current Project
                  </div>
                )}
                <div className="bg-[#1a3a2e] text-white p-4 rounded-xl mb-4 group-hover:bg-[#f5a623] transition-colors">
                  <Code className="group-hover:text-[#1a3a2e]" size={32} />
                </div>
                <h3 className="text-2xl mb-2 text-[#1a3a2e]">{proj.title}</h3>
                <p className="text-sm text-[#f5a623] mb-2">{proj.role}</p>
                <p className="text-sm text-gray-600 mb-4">
                  Tools: {proj.tools}
                </p>
                <p className="text-gray-700 mb-4">{proj.desc}</p>
                {proj.link && (
                  <a
                    href={proj.link}
                    className="inline-flex items-center gap-2 text-[#1a3a2e] hover:text-[#f5a623] transition-colors text-sm"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* TECH STACK SECTION */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-gradient-to-b from-[#1a3a2e] to-[#0d1f19] text-white py-20 px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeUp}
            className="text-5xl mb-12 text-center text-[#f5a623]"
          >
            Tech Stack
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-8 max-w-6xl mx-auto"
          >
            {[
              "python",
              "django",
              "react",
              "reactrouter",
              "laravel",
              "php",
              "js",
              "typescript",
              "tailwindcss",
              "html5",
              "css3",
              "postgresql",
              "mysql",
              "redis",
              "docker",
              "git",
              "github",
              "figma",
              "nodejs",
              "socketio",
              "canva",
            ].map((tech, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="flex flex-col items-center gap-3 p-4 bg-[#2a4a3a] rounded-xl hover:bg-[#f5a623] hover:scale-110 transition-all group"
              >
                <StackIcon name={tech} size={48} />
                <p className="capitalize text-xs text-center group-hover:text-[#1a3a2e]">
                  {tech === "js" ? "JavaScript" : tech}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="min-h-screen bg-[#f5f3ed] flex flex-col justify-center items-center px-6 md:px-8 py-20"
      >
        <h2 className="text-6xl md:text-7xl mb-8 text-[#1a3a2e] text-center">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-2xl">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="tel:+639949884809"
            className="bg-[#1a3a2e] text-white p-6 rounded-2xl hover:bg-[#f5a623] hover:text-[#1a3a2e] transition-all group"
          >
            <Phone className="mb-3 group-hover:scale-110 transition-transform" size={32} />
            <p className="text-sm opacity-80 mb-1">Phone</p>
            <p>+63 994 988 4809</p>
          </a>

          <a
            href="mailto:7078ceejay@gmail.com"
            className="bg-[#1a3a2e] text-white p-6 rounded-2xl hover:bg-[#f5a623] hover:text-[#1a3a2e] transition-all group"
          >
            <Mail className="mb-3 group-hover:scale-110 transition-transform" size={32} />
            <p className="text-sm opacity-80 mb-1">Email</p>
            <p>7078ceejay@gmail.com</p>
          </a>

          <div className="bg-[#1a3a2e] text-white p-6 rounded-2xl">
            <MapPin className="mb-3" size={32} />
            <p className="text-sm opacity-80 mb-1">Location</p>
            <p>Sampaloc, Apalit, Pampanga</p>
          </div>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/7078-cj"
            className="bg-[#1a3a2e] text-white p-4 rounded-full hover:bg-[#f5a623] hover:text-[#1a3a2e] transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a
            href="https://linkedin.com/in/7078-cj"
            className="bg-[#1a3a2e] text-white p-4 rounded-full hover:bg-[#f5a623] hover:text-[#1a3a2e] transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://instagram.com/c7078j"
            className="bg-[#1a3a2e] text-white p-4 rounded-full hover:bg-[#f5a623] hover:text-[#1a3a2e] transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.facebook.com/ceejay.santos.7549/"
            className="bg-[#1a3a2e] text-white p-4 rounded-full hover:bg-[#f5a623] hover:text-[#1a3a2e] transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={32} />
          </a>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-[#0d1f19] text-center text-sm text-gray-400 py-8 px-6">
        <p>© 2025 Ceejay Santos — Built with React, Tailwind & Motion</p>
        <p className="mt-2 text-xs">
          Full-Stack Developer | AI Enthusiast | Creative Problem Solver
        </p>
      </footer>
    </div>
  );
}
