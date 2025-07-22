import React from 'react';
import { Award, BookOpen, Heart, MessageCircle } from 'lucide-react';
import shashank from '../assets/images/IMG_20250605_161931.jpg'

const About: React.FC = () => {
  const stats = [
    {
      icon: Award,
      title: 'Education',
      value: '8.88 CGPA',
    },
    {
      icon: BookOpen,
      title: 'Completed',
      value: '05 + Projects',
    },
    {
      icon: Heart,
      title: 'Sports',
      value: 'Cricket & Volleyball',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center px-8 lg:ml-16 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-purple-700 text-lg mb-2">My Intro</p>
          <h2 className="text-5xl font-bold text-white">About me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-90 h-90 rounded-lg overflow-hidden bg-neutral-900">
                <img 
                  src={shashank}
                  alt="Shashank Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Hi, I'm Shashank Kumar
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                With a solid academic foundation in ECE, I’ve gained deep knowledge in core subjects like Digital Electronics, Signals & Systems, Microprocessors, and Communication Systems. Over time, my curiosity and passion for technology led me to explore the world of software development, where I now focus on building responsive and user-centric web applications. I specialize in web development, working with modern tools and frameworks to create clean, intuitive, and performance-optimized interfaces. My unique blend of hardware-level understanding and software skills enables me to approach problems from a broader, systems-level perspective. I’m always eager to learn, build, and collaborate on innovative tech solutions that make a real impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-neutral-900 rounded-lg">
                  <stat.icon className="text-purple-700 mx-auto mb-3" size={32} />
                  <h4 className="text-white font-bold text-lg mb-1">{stat.title}</h4>
                  <p className="text-gray-400">{stat.value}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={scrollToContact}
              className="bg-purple-700 hover:bg-purple-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>Contact me</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
