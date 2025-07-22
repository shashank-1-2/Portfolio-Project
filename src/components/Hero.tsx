import React from 'react';
import { Instagram, MessageCircle, Phone, Mail, User, Github, Globe2, LinkedinIcon, Linkedin, GithubIcon } from 'lucide-react';
import shashank from "../assets/images/IMG_20250605_161931.jpg";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-8 lg:ml-16 pt-20 lg:pt-0 bg-neutral-950">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">Follow Me</span>
              <div className="w-8 h-px bg-gray-600"></div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/shashank-12-" className="text-gray-400 hover:text-purple-700 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://leetcode.com/u/SHASHANK_1_2" className="text-gray-400 hover:text-purple-700  transition-colors">
                  <Globe2 size={20} />
                </a>
                <a href="https://github.com/shashank-1-2" className="text-gray-400 hover:text-purple-700  transition-colors">
                  <GithubIcon size={20} />
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-white leading-tight">
                Hi, I'm Shashank
              </h1>
              <h2 className="text-2xl text-gray-300 font-medium">
                B.Tech - Electronics & Communication Engineering
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                I have a strong passion for software development. I aim to build innovative, scalable, and impactful tech solutions by combining my core engineering knowledge with modern software development skills.
              </p>
              
              <button 
                onClick={scrollToAbout}
                className="bg-purple-700 hover:bg-purple-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
              >
                <User size={18} />
                <span>More About me!</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <MessageCircle className="text-purple-700" size={20} />
                <div>
                  <p className="text-white font-medium">Messenger</p>
                  <p className="text-gray-400 text-sm">Shashank_1_2</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-purple-700" size={20} />
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-gray-400 text-sm">9572716927</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-purple-700" size={20} />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400 text-sm">shashank748844@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-100 h-100 rounded-full overflow-hidden">
                <img 
                  src={shashank}
                  alt="Shashank Kumar"
                  className="w-full h-full object-cover"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;