import React, { useEffect, useState, useRef } from 'react';
import { Share2, Menu, X, Play, Pause } from 'lucide-react';
import bgMusic from '../assets/Musics/Main Pal Do Pal Ka Shair Hoon - Mukesh.mp3'; // adjust path if needed

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'qualification', label: 'Qualifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'project', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Shashank Kumar - Frontend Developer Portfolio',
          text: 'Check out my portfolio showcasing my web development skills and projects.',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Portfolio link copied to clipboard!');
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Preloaded Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src={bgMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Desktop Navigation - Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-20 bg-black flex-col items-center py-8 z-50">
        {/* Logo */}
        <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center mb-8">
          <span className="text-white font-bold text-lg">S</span>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col space-y-2 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative px-2 py-4 transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-purple-700'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
            >
              <span className="text-sm font-medium tracking-wider">
                {item.label}
              </span>
              {activeSection === item.id && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-purple-700 rounded-l"></div>
              )}
            </button>
          ))}
        </div>

        {/* Music Button */}
        <button
          onClick={toggleMusic}
          className="group relative p-3 rounded-lg transition-all duration-300 text-gray-400 hover:text-white hover:bg-purple-700 mt-2"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            {isPlaying ? "Pause" : "Play"}
          </div>
        </button>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="group relative p-3 rounded-lg transition-all duration-300 text-gray-400 hover:text-white hover:bg-purple-700 mt-4"
          title="Share Portfolio"
        >
          <Share2 size={20} />
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Share
          </div>
        </button>
      </nav>

      {/* Mobile Music Button - Top Left */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMusic}
          className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center hover:bg-purple-900 transition-colors duration-300 shadow-lg"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? <Pause className="text-white" size={20} /> : <Play className="text-white" size={20} />}
        </button>
      </div>

      {/* Mobile Navigation - Hamburger Menu Only */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center hover:bg-purple-900 transition-colors duration-300 shadow-lg"
        >
          {isMobileMenuOpen ? (
            <X className="text-white" size={20} />
          ) : (
            <Menu className="text-white" size={20} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-80">
          <div className="fixed top-20 right-4 bg-gray-900 rounded-lg p-6 min-w-[200px] shadow-xl">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-purple-700 bg-gray-800'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Share Button in Mobile Menu */}
              <div className="border-t border-gray-700 pt-4 mt-4">
                <button
                  onClick={handleShare}
                  className="w-full text-left py-2 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2"
                >
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
