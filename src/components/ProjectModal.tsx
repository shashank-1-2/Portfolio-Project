import React from 'react';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  demo: string;
  description?: string;
  created?: string;
  technologies?: string;
  role?: string;
  viewLink?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-neutral-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <div>
            <span className="text-purple-700 text-sm">Featured - {project.category}</span>
            <h2 className="text-white text-2xl font-bold mt-1">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Project Image */}
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden bg-neutral-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description || "A stylish and modern application interface showcasing contemporary design principles and user experience best practices."}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-white font-medium">Created - </span>
                <span className="text-gray-400">{project.created || "15 Apr 2025"}</span>
              </div>

              <div>
                <span className="text-white font-medium">Technologies - </span>
                <span className="text-gray-400">{project.technologies || "Html Css React"}</span>
              </div>

              <div>
                <span className="text-white font-medium">Role - </span>
                <span className="text-gray-400">{project.role || "Frontend"}</span>
              </div>

              <div>
                <span className="text-white font-medium">View - </span>
                <a 
                  href={project.viewLink || "#"} 
                  className="text-purple-900 hover:text-purple-700 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.viewLink || "www.domain.com"}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-700 hover:bg-purple-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-block"
              >
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;