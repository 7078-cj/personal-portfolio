import React from 'react'
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Github, Linkedin, Instagram, Facebook } from 'lucide-react';


function Contact({fadeUp}) {
  return (
    <>
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
      </>
  )
}

export default Contact