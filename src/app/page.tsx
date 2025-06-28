// app/page.tsx
export const metadata = {
  title: 'My site - Desarrollo Web Avanzado',
  description: 'Especialistas en desarrollo web moderno, optimización SEO y aplicaciones Next.js de alto rendimiento.',
  keywords: ['Next.js', 'SEO', 'optimización web', 'desarrollo web'],
  openGraph: {
    title: 'My site - Desarrollo Web Avanzado',
    description: 'Servicios profesionales de desarrollo web y SEO',
    images: ['/images/seo-image.png'],
    type: 'website',
  },
};

import Image from "next/image";
import dynamic from "next/dynamic";
import wa from "../../public/globe.svg";

const DynamicComponent = dynamic(() => import("./components/LargeComponents"), {
  loading: () => (
    <div className="animate-pulse bg-gray-200 rounded-lg h-32 flex items-center justify-center">
      <span className="text-gray-500">Cargando componente...</span>
    </div>
  ),
});

export default function Home() {
  return (
    <div>
      {/* Hero Section con gradiente y animaciones */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Desarrollo Web
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  de Siguiente Nivel
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Creamos aplicaciones web modernas, rápidas y optimizadas para SEO. 
                Especialistas en Next.js, React y las mejores prácticas de desarrollo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                  Iniciar Proyecto
                </a>
                <a href="/blog" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-center">
                  Ver Blog
                </a>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-200 text-sm">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-blue-200 text-sm">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Soporte</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src= {wa}
                  width={600}
                  height={400}
                  alt="Desarrollo web avanzado"
                  priority
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Sombra decorativa */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-25 transform scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de servicios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones completas para llevar tu presencia digital al siguiente nivel
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Desarrollo Web</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Aplicaciones web modernas con Next.js, React y las últimas tecnologías del mercado.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>✓ Next.js & React</li>
                <li>✓ Responsive Design</li>
                <li>✓ Performance Optimizado</li>
              </ul>
            </div>
            
            {/* Servicio 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Optimización SEO</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Mejoramos tu posicionamiento en Google con técnicas avanzadas de SEO.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>✓ Meta Tags Dinámicos</li>
                <li>✓ Sitemaps Automáticos</li>
                <li>✓ Core Web Vitals</li>
              </ul>
            </div>
            
            {/* Servicio 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border hover:border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Performance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Optimizamos la velocidad y rendimiento de tu aplicación web.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>✓ Lazy Loading</li>
                <li>✓ Image Optimization</li>
                <li>✓ Bundle Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Componente con lazy loading */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Tecnologías que Dominamos
          </h2>
          <DynamicComponent />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Empezar tu Proyecto?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactanos hoy y descubre cómo podemos llevar tu idea al siguiente nivel
          </p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  );
}