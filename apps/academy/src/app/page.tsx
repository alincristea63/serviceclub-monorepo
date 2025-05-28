import Image from "next/image";

export default function AcademyHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-25 to-silver-25">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-display-bold text-5xl text-navy-100 mb-6 animate-fade-in">
            Hello Academy! 🎓
          </h1>
          <p className="font-body-regular text-xl text-navy-75 mb-8 max-w-2xl mx-auto animate-slide-up">
            Bienvenido a ServiceClub Academy - Tu plataforma de aprendizaje y desarrollo profesional
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-2xl shadow-brand p-6 transform hover:-translate-y-2 transition-all duration-300 border border-purple-25">
              <div className="text-3xl mb-4 w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-75 rounded-full flex items-center justify-center mx-auto shadow-lg">
                📚
              </div>
              <h3 className="font-display-semibold text-xl text-navy-100 mb-2">Cursos</h3>
              <p className="font-body-regular text-navy-50">Accede a una amplia variedad de cursos especializados</p>
            </div>
            <div className="bg-white rounded-2xl shadow-brand p-6 transform hover:-translate-y-2 transition-all duration-300 border border-purple-25">
              <div className="text-3xl mb-4 w-12 h-12 bg-gradient-to-r from-green-100 to-green-75 rounded-full flex items-center justify-center mx-auto shadow-lg">
                🏆
              </div>
              <h3 className="font-display-semibold text-xl text-navy-100 mb-2">Certificaciones</h3>
              <p className="font-body-regular text-navy-50">Obtén certificaciones reconocidas en la industria</p>
            </div>
            <div className="bg-white rounded-2xl shadow-brand p-6 transform hover:-translate-y-2 transition-all duration-300 border border-purple-25">
              <div className="text-3xl mb-4 w-12 h-12 bg-gradient-to-r from-red-100 to-red-75 rounded-full flex items-center justify-center mx-auto shadow-lg">
                👥
              </div>
              <h3 className="font-display-semibold text-xl text-navy-100 mb-2">Comunidad</h3>
              <p className="font-body-regular text-navy-50">Conecta con otros profesionales y expertos</p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12">
            <button className="bg-gradient-to-r from-brand-primary to-red-75 text-white px-8 py-4 rounded-2xl font-body-semibold text-lg shadow-brand-lg hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300">
              Comenzar Aprendizaje
            </button>
          </div>
          
          {/* Back to Hub */}
          <div className="mt-8">
            <a 
              href="http://localhost:3000" 
              className="inline-flex items-center font-body-regular text-navy-75 hover:text-navy-100 transition-colors duration-300"
            >
              ← Volver al Hub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
