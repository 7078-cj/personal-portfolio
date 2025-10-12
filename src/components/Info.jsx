import React from 'react'
import { motion } from "framer-motion";
import { Brain, Code, Gamepad2, Star } from 'lucide-react';


function Info({fadeUp, staggerContainer}) {
  return (
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
  )
}

export default Info