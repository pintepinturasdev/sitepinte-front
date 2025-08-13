import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Using the existing photos in the project
const allProjects = [
  {
    id: 1,
    src: "/images/building1.jpg",
    name: "Edifício Aurora",
    location: "Fortaleza, CE"
  },
  {
    id: 2,
    src: "/images/building2.jpg",
    name: "Residencial Verde",
    location: "Caucaia, CE"
  },
  {
    id: 3,
    src: "/images/building3.jpg",
    name: "Torre Sul",
    location: "Aquiraz, CE"
  },
  {
    id: 4,
    src: "/images/building4.jpg",
    name: "Condomínio Atlântico",
    location: "Fortaleza, CE"
  },
  {
    id: 5,
    src: "/images/building5.jpg",
    name: "Edifício Sol",
    location: "Eusébio, CE"
  },
  {
    id: 6,
    src: "/images/building6.jpg",
    name: "Residencial Jardim",
    location: "Maracanaú, CE"
  },
  {
    id: 7,
    src: "/images/building7.jpg",
    name: "Torre Norte",
    location: "Fortaleza, CE"
  },
  {
    id: 8,
    src: "/images/building8.jpg",
    name: "Edifício Mar",
    location: "Cumbuco, CE"
  },
  {
    id: 9,
    src: "/images/building9.jpg",
    name: "Residencial Lagoa",
    location: "Pacatuba, CE"
  }
];

// Define project type for TypeScript
interface Project {
  id: number;
  src: string;
  name: string;
  location: string;
}

const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Function to open modal with project details
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    // Push state to handle browser back button
    window.history.pushState({ modal: true }, '', window.location.pathname);
  };
  
  // Function to close modal
  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };
  
  // Handle browser back button
  React.useEffect(() => {
    const handlePopState = () => {
      closeModal();
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  
  // Navigation between projects in modal
  const goToPreviousProject = () => {
    if (selectedProject) {
      const currentIndex = allProjects.findIndex(p => p.id === selectedProject.id);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : allProjects.length - 1;
      setSelectedProject(allProjects[prevIndex]);
      setCurrentImageIndex(0);
    }
  };
  
  const goToNextProject = () => {
    if (selectedProject) {
      const currentIndex = allProjects.findIndex(p => p.id === selectedProject.id);
      const nextIndex = currentIndex < allProjects.length - 1 ? currentIndex + 1 : 0;
      setSelectedProject(allProjects[nextIndex]);
      setCurrentImageIndex(0);
    }
  };
  
  // Get project images
  const getProjectImages = (project: Project) => {
    return [
      project.src,
      `/images/building${((project.id % 3) + 4)}.jpg`,
      `/images/building${((project.id % 3) + 7)}.jpg`
    ];
  };
  
  // Navigation between images in carousel
  const goToPreviousImage = () => {
    if (!isTransitioning && selectedProject) {
      const images = getProjectImages(selectedProject);
      setIsTransitioning(true);
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };
  
  const goToNextImage = () => {
    if (!isTransitioning && selectedProject) {
      const images = getProjectImages(selectedProject);
      setIsTransitioning(true);
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navegação */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-22">
            <div className="flex items-center">
              <img 
                src="/images/pinte-logo.png" 
                alt="Logo da Empresa" 
                className="h-24 w-auto"
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a onClick={() => navigate('/')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition cursor-pointer">Início</a>
                <a className="text-blue-600 px-3 py-2 text-lg font-medium transition cursor-pointer">Portfólio</a>
                <a onClick={() => navigate('/#about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition cursor-pointer">Sobre</a>
                <a onClick={() => navigate('/#contact')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition cursor-pointer">Contato</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg font-medium transition">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 mb-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-sm transition">
              Exterior Painting
            </button>
            <button className="bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-6 py-3 rounded-lg font-medium text-sm transition border border-gray-200">
              Restoration
            </button>
            <button className="bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-6 py-3 rounded-lg font-medium text-sm transition border border-gray-200">
              Commercial
            </button>
            <button className="bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-6 py-3 rounded-lg font-medium text-sm transition border border-gray-200">
              Residential
            </button>
            <button className="bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-6 py-3 rounded-lg font-medium text-sm transition border border-gray-200">
              Waterproofing
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProjects.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openProjectModal(item)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={`${item.name} - ${item.location}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Exterior Painting
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  Pintura Profissional de Edifícios project completed in {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Navigation Arrows - Outside Modal */}
      {selectedProject && (
        <>
          {/* Left arrow for project navigation */}
          <div className="fixed left-8 md:left-12 top-1/2 -translate-y-1/2 z-50">
            <button 
              onClick={goToPreviousProject}
              className="bg-white rounded-full p-3 shadow-lg text-gray-800 hover:text-blue-600 transition"
              aria-label="Previous project"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          {/* Right arrow for project navigation */}
          <div className="fixed right-8 md:right-12 top-1/2 -translate-y-1/2 z-50">
            <button 
              onClick={goToNextProject}
              className="bg-white rounded-full p-3 shadow-lg text-gray-800 hover:text-blue-600 transition"
              aria-label="Next project"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </>
      )}
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-5xl relative">
            {/* Close button */}
            <button 
              onClick={() => closeModal()} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image carousel */}
              <div className="relative h-96 md:h-full bg-gray-100 overflow-hidden">
                {selectedProject && (
                  <div className="relative h-full">
                    <img 
                      src={getProjectImages(selectedProject)[currentImageIndex]} 
                      alt={selectedProject.name} 
                      className={`w-full h-full object-cover transition-opacity duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
                    />
                    
                    {/* Image navigation arrows */}
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <button 
                        onClick={goToPreviousImage}
                        className="bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 mx-4 text-gray-800 hover:text-blue-600 transition"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <button 
                        onClick={goToNextImage}
                        className="bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 mx-4 text-gray-800 hover:text-blue-600 transition"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                      {getProjectImages(selectedProject).map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-3 h-3 rounded-full ${currentImageIndex === idx ? 'bg-blue-600' : 'bg-white bg-opacity-50'}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Project details */}
              <div className="p-8 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">{selectedProject.name}</h2>
                <p className="text-lg text-gray-600">{selectedProject.location}</p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Descrição do Projeto</h3>
                  <p className="text-gray-600">
                    Este projeto de {selectedProject.name} localizado em {selectedProject.location} foi executado com os mais altos padrões de qualidade. 
                    Utilizamos materiais premium e técnicas avançadas para garantir um acabamento perfeito e duradouro.
                  </p>
                  
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Detalhes</h3>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li>• Área: 450m²</li>
                      <li>• Duração: 3 meses</li>
                      <li>• Materiais: Tintas premium, revestimentos especiais</li>
                      <li>• Técnicas: Texturização, efeitos decorativos</li>
                    </ul>
                  </div>
                </div>
                
                <div className="pt-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition w-full">
                    Solicitar Orçamento Similar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
