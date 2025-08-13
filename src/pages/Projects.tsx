import { useNavigate } from 'react-router-dom';

// Using the existing photos in the project
const allProjects = [
  {
    src: "/images/building1.jpg",
    name: "Edifício Aurora",
    location: "Fortaleza, CE"
  },
  {
    src: "/images/building2.jpg",
    name: "Residencial Verde",
    location: "Caucaia, CE"
  },
  {
    src: "/images/building3.jpg",
    name: "Torre Sul",
    location: "Aquiraz, CE"
  },
  {
    src: "/images/building4.jpg",
    name: "Condomínio Atlântico",
    location: "Fortaleza, CE"
  },
  {
    src: "/images/building5.jpg",
    name: "Edifício Sol",
    location: "Eusébio, CE"
  },
  {
    src: "/images/building6.jpg",
    name: "Residencial Jardim",
    location: "Maracanaú, CE"
  },
  {
    src: "/images/building7.jpg",
    name: "Torre Norte",
    location: "Fortaleza, CE"
  },
  {
    src: "/images/building8.jpg",
    name: "Edifício Mar",
    location: "Cumbuco, CE"
  },
  {
    src: "/images/building9.jpg",
    name: "Residencial Lagoa",
    location: "Pacatuba, CE"
  }
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')} 
        className="fixed top-6 left-6 bg-white text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg font-medium text-sm transition border border-gray-200 flex items-center gap-2 shadow-sm z-50"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Voltar
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((item, idx) => (
            <div
              key={idx}
              onClick={() => window.open(item.src, "_blank")}
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
    </div>
  );
};

export default Projects;
