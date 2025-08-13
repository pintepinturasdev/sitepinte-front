 

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const portfolioImages = [
  // Nomes dos arquivos de imagem de exemplo, usuário pode substituir depois
  { id: 1, src: "/images/building1.jpg", name: "Edifício Aurora", location: "Fortaleza, CE" },
  { id: 2, src: "/images/building2.jpg", name: "Residencial Verde", location: "Caucaia, CE" },
  { id: 3, src: "/images/building3.jpg", name: "Torre Sul", location: "Aquiraz, CE" },
  { id: 4, src: "/images/building4.jpg", name: "Condomínio Atlântico", location: "Fortaleza, CE" },
  { id: 5, src: "/images/building5.jpg", name: "Edifício Sol", location: "Eusébio, CE" },
  { id: 6, src: "/images/building6.jpg", name: "Residencial Jardim", location: "Maracanaú, CE" },
  { id: 7, src: "/images/building7.jpg", name: "Torre Norte", location: "Fortaleza, CE" },
  { id: 8, src: "/images/building8.jpg", name: "Edifício Mar", location: "Cumbuco, CE" },
  { id: 9, src: "/images/building9.jpg", name: "Residencial Lagoa", location: "Pacatuba, CE" },
];

// Hero images array - includes the original aerial view plus building photos
const heroImages = [
  { src: "/images/fortaleza-aerial.jpg", alt: "Vista aérea de Fortaleza mostrando edifícios pintados" },
  ...portfolioImages.map(img => ({ src: img.src, alt: `${img.name} - ${img.location}` }))
];

function App() {
  const navigate = useNavigate();
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  const [nextHeroImageIndex, setNextHeroImageIndex] = useState(1);
  const [showingNext, setShowingNext] = useState(false);

  // Alterna entre as imagens do hero a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      // Inicia a transição com fade
      setShowingNext(true);
      
      // Após completar o fade, atualiza os índices
      setTimeout(() => {
        setCurrentHeroImageIndex(nextHeroImageIndex);
        setNextHeroImageIndex((nextHeroImageIndex + 1) % heroImages.length);
        setShowingNext(false);
      }, 4000); // Corresponde à duração da transição
    }, 10000);

    return () => clearInterval(interval);
  }, [nextHeroImageIndex]);

  // Rola até a grade do portfólio
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navegação */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-22">
            <div className="flex items-center">
              <img 
                src="/images/pinte-logo.png" 
                alt="Logo da Empresa" 
                className="h-24 w-auto"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition cursor-pointer">Início</a>
                <a onClick={() => scrollToSection('portfolio')} href="#portfolio" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition cursor-pointer">Portfólio</a>
                <a onClick={() => scrollToSection('about')} href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition cursor-pointer">Sobre</a>
                <a onClick={() => scrollToSection('contact')} href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-lg font-medium transition cursor-pointer">Contato</a>
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

      {/* Seção Principal */}
      <section className="bg-gray-50 min-h-screen flex items-center pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo Esquerdo */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  ⭐ Qualidade garantida desde 1998!
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Olá, 👋<br />
                  <span className="text-gray-900">Nós Somos a</span>{" "}
                  <span className="text-blue-600">Pinte Pinturas</span><br />

                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transformando Obras no Brasil desde 1998! Realizando Serviços de Pintura Na Construção Civil, Comercial e Industrial.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Ver Portfólio
                </button>
                <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                  Fale Comigo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-600">37+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-gray-600">Obra Realizadas</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Current Image (always visible) */}
                  <img
                    src={heroImages[currentHeroImageIndex].src}
                    alt={heroImages[currentHeroImageIndex].alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Next Image (fades in during transition) */}
                  <img
                    src={heroImages[nextHeroImageIndex].src}
                    alt={heroImages[nextHeroImageIndex].alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[4000ms] ease-in-out ${
                      showingNext ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Image transition indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroImages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentHeroImageIndex 
                            ? 'bg-white' 
                            : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating Stats Cards */}
                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">99.6%</div>
                      <div className="text-xs text-gray-500">Satisfação do Cliente</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Trabalho de Qualidade</div>
                      <div className="text-xs text-gray-500">Garantido</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="pt-8 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Empreendimentos Realizados
            </h2>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-sm transition">
                Construção Civil
              </button>
              <button className="bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-6 py-3 rounded-lg font-medium text-sm transition border border-gray-200">
                Comercial
              </button>
              <button className="bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-6 py-3 rounded-lg font-medium text-sm transition border border-gray-200">
                Residencial
              </button>
              <button className="bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-6 py-3 rounded-lg font-medium text-sm transition border border-gray-200">
                Industrial
              </button>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((item, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/project/${item.id}`)}
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

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Carregar Mais Projetos
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Sobre Meu Trabalho
          </h2>
          <p className="text-lg mb-4 text-gray-700">
            Com mais de 15 anos de experiência em pintura de edifícios, eu forneço acabamentos de alta qualidade e duráveis para projetos residenciais e comerciais em todo o Ceará. Meu trabalho se concentra em atenção aos detalhes, segurança e satisfação do cliente.
          </p>
          <ul className="text-left inline-block text-gray-800 font-medium">
            <li className="mb-2 flex items-center"><span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Pintura de Edifícios</li>
            <li className="mb-2 flex items-center"><span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Restauração</li>
            <li className="mb-2 flex items-center"><span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Impermeabilização</li>
            <li className="mb-2 flex items-center"><span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Limpeza de Fachadas</li>
            <li className="mb-2 flex items-center"><span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Revestimentos Protetores</li>
            <li className="mb-2 flex items-center"><span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>Protective Coatings</li>
          </ul>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Redes Sociais */}
            <div className="space-y-4">
              <img 
                src="/images/pinte-logo.png" 
                alt="Logo da Empresa" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                The professional portfolio category includes websites or physical items that
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Behance" className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Links Rápidos</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Sobre Nós</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Serviços</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Fale Conosco</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition">Preços</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-gray-600 text-sm">(85) 99999-9999</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-gray-600 text-sm">info@paintpro.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-4 h-4 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-600 text-sm">Fortaleza, Ceará<br />Brasil</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
              <p className="text-gray-600 text-sm">
                Inscreva-se para receber novidades e atualizações sobre nossos serviços.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg text-sm font-medium transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App
