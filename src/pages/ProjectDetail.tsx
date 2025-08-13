import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Extended project data with all required fields
const projectsData = [
  {
    id: 1,
    src: "/images/building1.jpg",
    name: "Edifício Aurora",
    address: "Rua das Flores, 123 - Aldeota, Fortaleza, CE",
    location: "Fortaleza, CE",
    typeOfService: "Pintura Externa Residencial",
    description: "Projeto completo de pintura externa do Edifício Aurora, incluindo preparação de superfície, aplicação de primer e tinta acrílica de alta qualidade. O trabalho incluiu tratamento de fissuras, impermeabilização de áreas críticas e pintura decorativa de detalhes arquitetônicos. Resultado final com acabamento premium e garantia de 5 anos."
  },
  {
    id: 2,
    src: "/images/building2.jpg",
    name: "Residencial Verde",
    address: "Av. Washington Soares, 456 - Edson Queiroz, Caucaia, CE",
    location: "Caucaia, CE",
    typeOfService: "Pintura e Impermeabilização",
    description: "Serviço completo de revitalização do Residencial Verde com foco em sustentabilidade. Aplicação de tintas ecológicas, sistema de impermeabilização avançado e tratamento anti-mofo. O projeto incluiu também a pintura de áreas comuns, playground e fachada principal com cores vibrantes que refletem a identidade do condomínio."
  },
  {
    id: 3,
    src: "/images/building3.jpg",
    name: "Torre Sul",
    address: "Rua Coronel Correia, 789 - Centro, Aquiraz, CE",
    location: "Aquiraz, CE",
    typeOfService: "Restauração e Pintura Comercial",
    description: "Projeto de restauração completa da Torre Sul, um edifício comercial histórico. Trabalho incluiu remoção de tintas antigas, tratamento de estruturas metálicas, aplicação de primer anticorrosivo e pintura com sistema de alta durabilidade. Especial atenção foi dada à preservação dos elementos arquitetônicos originais."
  },
  {
    id: 4,
    src: "/images/building4.jpg",
    name: "Condomínio Atlântico",
    address: "Av. Beira Mar, 321 - Meireles, Fortaleza, CE",
    location: "Fortaleza, CE",
    typeOfService: "Pintura Externa Premium",
    description: "Pintura externa de alto padrão para o Condomínio Atlântico, localizado na orla de Fortaleza. Utilizamos tintas especiais resistentes à maresia e radiação UV. O projeto incluiu pintura da fachada principal, torres, área de lazer e estacionamento, com acabamento texturizado e cores que harmonizam com o ambiente litorâneo."
  },
  {
    id: 5,
    src: "/images/building5.jpg",
    name: "Edifício Sol",
    address: "Rua Major Facundo, 654 - Centro, Eusébio, CE",
    location: "Eusébio, CE",
    typeOfService: "Pintura Residencial Completa",
    description: "Reforma completa da pintura do Edifício Sol, incluindo fachada, áreas comuns, garagem e cobertura. Aplicação de sistema de pintura de alta qualidade com preparação rigorosa da superfície, correção de imperfeições e aplicação de tintas premium. Projeto executado em etapas para minimizar transtornos aos moradores."
  },
  {
    id: 6,
    src: "/images/building6.jpg",
    name: "Residencial Jardim",
    address: "Rua das Palmeiras, 987 - Jereissati, Maracanaú, CE",
    location: "Maracanaú, CE",
    typeOfService: "Pintura e Paisagismo",
    description: "Projeto integrado de pintura e revitalização paisagística do Residencial Jardim. Além da pintura completa das edificações, o trabalho incluiu pintura decorativa de murais, sinalização e elementos de paisagismo. Uso de cores que harmonizam com o jardim e criam um ambiente acolhedor e moderno."
  },
  {
    id: 7,
    src: "/images/building7.jpg",
    name: "Torre Norte",
    address: "Av. Dom Luís, 147 - Aldeota, Fortaleza, CE",
    location: "Fortaleza, CE",
    typeOfService: "Pintura Corporativa",
    description: "Pintura externa da Torre Norte, um edifício corporativo de alto padrão. Aplicação de sistema de pintura profissional com cores institucionais, incluindo logotipos e sinalização corporativa. Trabalho executado em horários alternativos para não interferir nas atividades comerciais, com acabamento impecável e prazo rigorosamente cumprido."
  },
  {
    id: 8,
    src: "/images/building8.jpg",
    name: "Edifício Mar",
    address: "Rua da Praia, 258 - Cumbuco, Cumbuco, CE",
    location: "Cumbuco, CE",
    typeOfService: "Pintura Resistente à Maresia",
    description: "Projeto especializado para ambiente litorâneo no Edifício Mar. Aplicação de tintas e primers especiais resistentes à corrosão salina, com sistema de proteção avançado. O trabalho incluiu tratamento de estruturas metálicas, pintura da fachada com cores inspiradas no mar e proteção especial contra a ação do vento e sal marinho."
  },
  {
    id: 9,
    src: "/images/building9.jpg",
    name: "Residencial Lagoa",
    address: "Rua do Lago, 369 - Gereraú, Pacatuba, CE",
    location: "Pacatuba, CE",
    typeOfService: "Pintura Ecológica",
    description: "Projeto sustentável no Residencial Lagoa utilizando tintas ecológicas e técnicas ambientalmente responsáveis. Aplicação de produtos com baixo VOC, reciclagem de materiais e gestão consciente de resíduos. O resultado combina qualidade superior com responsabilidade ambiental, criando um ambiente saudável para os moradores."
  }
];

const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const project = projectsData.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Projeto não encontrado</h1>
          <button 
            onClick={() => navigate('/projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Voltar aos Projetos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar aos Projetos
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Project Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={project.src}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
                {project.typeOfService}
              </span>
              <h1 className="text-4xl font-bold text-white mb-2">{project.name}</h1>
              <p className="text-white/90 text-lg">{project.location}</p>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Detalhes do Projeto</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Tipo de Serviço</h3>
                        <p className="text-gray-600">{project.typeOfService}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Endereço</h3>
                        <p className="text-gray-600">{project.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Nome do Projeto</h3>
                        <p className="text-gray-600">{project.name}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interessado em um projeto similar?</h3>
                  <p className="text-gray-600 mb-4">Entre em contato conosco para um orçamento personalizado.</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
                    Solicitar Orçamento
                  </button>
                </div>
              </div>

              {/* Right Column - Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Descrição do Projeto</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Project Features */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Características do Projeto</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700 text-sm">Alta Qualidade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700 text-sm">Garantia Estendida</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700 text-sm">Prazo Cumprido</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700 text-sm">Materiais Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
