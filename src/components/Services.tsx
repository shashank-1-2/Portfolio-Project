import React from 'react';
import { Code, Palette, Smartphone, Globe, Database, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and modern websites using latest technologies and best practices.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Creating mobile applications for iOS and Android platforms with React Native.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing user-friendly interfaces and experiences that engage and convert users.',
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Creating beautiful and functional web designs that represent your brand perfectly.',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs using modern technologies.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Optimizing websites for search engines to improve visibility and organic traffic.',
    },
  ];

  return (
    <section id="services" className="min-h-screen px-8 lg:ml-16 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-pink-500 text-lg mb-2">What I Offer</p>
          <h2 className="text-5xl font-bold text-white">Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:transform hover:translateY-[-4px] group"
            >
              <div className="mb-6">
                <service.icon 
                  className="text-pink-500 group-hover:text-pink-400 transition-colors duration-300" 
                  size={48} 
                />
              </div>
              <h3 className="text-white font-bold text-xl mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;