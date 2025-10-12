import { Star } from 'lucide-react'
import React from 'react'


function Header() {
  return (
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
  )
}

export default Header