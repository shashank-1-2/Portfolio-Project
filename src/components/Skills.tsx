import React, { useState } from 'react';
import { Code, Palette, Server, ChevronDown, ChevronRight } from 'lucide-react';

const Skills: React.FC = () => {
  const [expandedRole, setExpandedRole] = useState<string>('frontend');

  const skillsData = {
    frontend: [
      { name: 'HTML', percentage: 90 },
      { name: 'CSS', percentage: 80 },
      { name: 'JavaScript', percentage: 60 },
      { name: 'React', percentage: 85 },
    ],
    design: [
      { name: 'Figma', percentage: 90 },
      { name: 'Sketch', percentage: 80 },
      { name: 'PhotoShop', percentage: 70 },
    ],
    backend: [
      { name: 'PHP', percentage: 80 },
      { name: 'Python', percentage: 80 },
      { name: 'MySQL', percentage: 70 },
      { name: 'Firebase', percentage: 75 },
    ],
  };

  const roles = [
    {
      id: 'frontend',
      icon: Code,
      title: 'Frontend Developer',
      subtitle: 'More than 2 years',
    },
    {
      id: 'design',
      icon: Palette,
      title: 'UI / UX Design',
      subtitle: 'More than 2 years',
    },
    {
      id: 'backend',
      icon: Server,
      title: 'Backend Developer',
      subtitle: 'More than 2 years',
    },
  ];

  const ProgressBar = ({ skill }: { skill: { name: string; percentage: number } }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-purple-700 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen flex items-center px-8 lg:ml-16 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <p className="text-purple-700 text-lg mb-2">My Abilities</p>
          <h2 className="text-5xl font-bold text-white">My Experience</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skill Categories */}
          <div className="space-y-6">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  expandedRole === role.id 
                    ? 'bg-black border-l-4 border-purple-800' 
                    : 'bg-black hover:bg-neutral-900'
                }`}
                onClick={() => setExpandedRole(expandedRole === role.id ? '' : role.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-ppurple-700 rounded-lg">
                      <role.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{role.title}</h3>
                      <p className="text-gray-400">{role.subtitle}</p>
                    </div>
                  </div>
                  {expandedRole === role.id ? (
                    <ChevronDown className="text-purple-700" size={20} />
                  ) : (
                    <ChevronRight className="text-gray-400" size={20} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Progress - Shows based on selected category */}
          <div className="bg-black p-8 rounded-lg">
            <h3 className="text-white text-xl font-bold mb-8">
              {expandedRole === 'frontend' && 'Frontend Skills'}
              {expandedRole === 'design' && 'Design Skills'}
              {expandedRole === 'backend' && 'Backend Skills'}
              {!expandedRole && 'Select a category to view skills'}
            </h3>
            
            {expandedRole && skillsData[expandedRole as keyof typeof skillsData] && (
              <div className="space-y-6">
                {skillsData[expandedRole as keyof typeof skillsData].map((skill, index) => (
                  <ProgressBar key={index} skill={skill} />
                ))}
              </div>
            )}
            
            {!expandedRole && (
              <div className="text-center py-12">
                <p className="text-gray-400">Click on a skill category to view detailed skills and progress</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;