import React from 'react'
import { motion } from "framer-motion";
import { Brain, Github, Mail, MapPin, Phone, TrendingUp } from 'lucide-react';


function About({fadeUp, scaleIn}) {
  return (
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
  )
}

export default About