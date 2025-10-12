import React from 'react'
import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

function TechStack({fadeUp, staggerContainer, scaleIn}) {
  return (
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
  )
}

export default TechStack