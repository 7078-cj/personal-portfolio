import React from 'react'
import { motion } from "framer-motion";
import { Sparkles, Star } from 'lucide-react';

function HeroSection({fadeUp, staggerContainer}) {
  return (
    
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
                    href="https://www.linkedin.com/in/ceejay-santos-8586752bb/"
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
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0d1f19] via-transparent to-transparent"></div>
      </section>
  )
}

export default HeroSection