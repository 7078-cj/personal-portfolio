import React from 'react'
import { motion } from "framer-motion";
import { Code, Github } from 'lucide-react';


function DevExperience({fadeUp, staggerContainer}) {
  return (
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
  )
}

export default DevExperience