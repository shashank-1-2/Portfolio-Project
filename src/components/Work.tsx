import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ['All', 'Web', 'App', 'Design'];

  const projects = [
    {
      id: 1,
      title: 'RazorPay Website (Clone)',
      category: 'Web',
      image: 'https://d6xcmfyh68wv8.cloudfront.net/blog-content/uploads/2025/07/Kaisori-Blog.png',
      demo: '#',
      description: 'A modern payment gateway website interface inspired by Razorpay’s official design, showcasing clean layout, responsive sections, and interactive elements.',
      created: '26 Jun 2025',
      technologies: 'React, Tailwind CSS, Node.js',
      role: 'Frontend Developer',
      viewLink: 'www.razorpay-demo.com',
    },
    {
      id: 2,
      title: 'Apple iPhone 15 Landing Page Design & Build',
      category: 'App',
      image: 'https://iplanet.one/cdn/shop/files/iPhone15Pro_hero_large_2x_iPhone15Pro.png?1694017832269',
      demo: '#',
      description: 'A premium and responsive Apple iPhone 15 product website featuring elegant UI, GSAP animations, and high-resolution visuals for an immersive experience.',
      created: '4 Jul 2025',
      technologies: 'React, Tailwind CSS, GSAP',
      role: 'Frontend',
      viewLink: 'www.iphone15-clone.com',
    },
    {
      id: 3,
      title: 'Hypercars Slider Animation Interface',
      category: 'Design',
      image: 'https://i.pinimg.com/736x/5f/17/a9/5f17a9a0bb580779debf43858b44e2a4.jpg',
      demo: '#',
      description: 'A visually stunning slider showcasing luxury hypercars with smooth GSAP animations, interactive transitions, and responsive layout — designed for an immersive user experience.',
      created: '14 Jul 2025',
      technologies: 'Figma, Photoshop, Illustrator',
      role: 'UI/UX Designer & Frontend Developer',
      viewLink: 'www.hypercar-slider.com',
    },
    {
      id: 4,
      title: 'AI Image Generator App',
      category: 'App',
      image: 'https://static.digit.in/banner-3.jpg',
      demo: '#',
      description: 'A powerful AI image generation web app built with a full-stack architecture, integrating a modern frontend with an OpenAI API-powered backend to generate stunning visuals from text prompts.',
      created: '18 Jul 2025',
      technologies: 'React, Tailwind CSS, Node.js, Express, OpenAI API',
      role: 'Full Stack Developer',
      viewLink: 'www.ai-imagegen-app.com',
    },
    {
      id: 5,
      title: 'Restaurant Brand Package',
      category: 'Design',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      demo: '#',
      description: 'Complete branding package for a premium restaurant including menu design, signage, and digital assets.',
      created: '18 Dec 2024',
      technologies: 'Photoshop, InDesign, Figma',
      role: 'Brand Designer',
      viewLink: 'www.restaurant-brand.com',
    },
    {
      id: 6,
      title: 'Personal Portfolio Website UI Design & Build',
      category: 'Web',
      image: 'https://cdn.prod.website-files.com/606a802fcaa89bc357508cad/61701b4e166c837543d8f0ce_2_How%20To%20a%20Create%20Personal%20Portfolio%20Website-p-1600.png',
      demo: '#',
      description: 'Personal portfolio website showcasing creative work with smooth animations and responsive design.',
      created: '20 Jul 2025',
      technologies: 'React, TypeScript, Tailwind',
      role: 'Full Stack Developer',
      viewLink: 'www.shashank-portfolio.com',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <>
      <section id="project" className="min-h-screen px-8 lg:ml-16 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-purple-700 text-lg mb-2">My Portfolio</p>
          <h2 className="text-5xl font-bold text-white">Recent Work</h2>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-neutral-900 p-2 rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-purple-700 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-neutral-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => handleProjectClick(project)}
                  className="bg-purple-700 hover:bg-purple-900 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Demo</span>
                  <ExternalLink size={16} />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <button
                  onClick={() => handleProjectClick(project)}
                  className="text-purple-900 hover:text-purple-700 font-medium flex items-center space-x-1 transition-colors duration-300"
                >
                  <span>Demo</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Work;