import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Qualifications: React.FC = () => {
  const education = [
    {
      title: 'Surendranath Centenary School (Ranchi)',
      subtitle: 'Secondary School Examination, 2021',
      period: '2019-2021',
    },
    {
      title: 'Surendranath Centenary School (Ranchi)',
      subtitle: 'Senior Secondary School Examination, 2023',
      period: '2021-2023',
    },
    {
      title: 'Birla Institute of Technology, Mesra',
      subtitle: 'Electronics & Communication Engineering (B.Tech)',
      period: '2023-2027',
    },
  ];

  const experience = [
    {
      title: 'Electronic Arts',
      subtitle: 'Software Engineering Job Stimulation',
      period: 'Nov 2024 - Dec 2024',
    },
    {
      title: 'ECESOC (BIT MESRA)',
      subtitle: 'Technical Core Head',
      period: '2023 - 2027',
    },
    {
      title: 'Web Developer',
      subtitle: 'Junior UX Designer',
      period: '2025 - present',
    },
  ];

  const TimelineItem = ({ item }: { item: any }) => (
    <div className="relative flex items-start space-x-4">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-purple-700 rounded-full"></div>
        <div className="w-px h-16 bg-purple-700 mt-2"></div>
      </div>
      <div className="flex-1 pb-8">
        <h3 className="text-white font-bold text-lg">{item.title}</h3>
        <p className="text-gray-400 mb-2">{item.subtitle}</p>
        <div className="flex items-center space-x-2 text-purple-700">
          <Calendar size={16} />
          <span className="text-sm">{item.period}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id='qualification' className="min-h-screen flex items-center px-8 lg:ml-16 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-purple-700 text-lg mb-2">My Journey</p>
          <h2 className="text-5xl font-bold text-white">Qualifications</h2>
        </div>

        <div className='flex justify-center'>
          <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="text-white" size={24} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  item={item}  
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="text-white" size={24} />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  item={item} 
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;