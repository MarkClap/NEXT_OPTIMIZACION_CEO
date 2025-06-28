// app/contact/page.tsx
export const metadata = {
  title: 'Contacto - Solicita tu Proyecto Web | DevWeb Pro',
  description: '¿Necesitas un sitio web optimizado? Contáctanos para desarrollar tu proyecto con las mejores técnicas de SEO.',
  keywords: ['contacto desarrollo web', 'proyecto web', 'SEO', 'servicios web'],
  openGraph: {
    title: 'Contacto - Solicita tu Proyecto Web',
    description: 'Contáctanos para desarrollar tu proyecto web optimizado',
    images: ['/images/contact-banner.png'],
    type: 'website',
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section con gradiente elegante */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 text-white py-20 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-6">
                <span className="text-4xl">💬</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hablemos de tu
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Próximo Proyecto
              </span>
            </h1>
            
            <p className="text-xl text-indigo-100 leading-relaxed max-w-3xl mx-auto mb-8">
              ¿Tienes una idea increíble? Estamos aquí para convertirla en realidad. 
              Contactanos y descubre cómo podemos llevar tu presencia digital al siguiente nivel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-indigo-200">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Respuesta en menos de 24 horas</span>
              </div>
              <div className="flex items-center space-x-2 text-indigo-200">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span>Consulta inicial gratuita</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección principal de contacto */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
            
            {/* Formulario Principal - 3 columnas */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
                {/* Decoración de fondo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                      Cuéntanos sobre tu proyecto
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Completa el formulario y te contactaremos en menos de 24 horas
                    </p>
                  </div>
                  
                  <form className="space-y-8">
                    {/* Información personal */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg placeholder-gray-400"
                          placeholder="Tu nombre"
                          required
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-3">
                          Apellido *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg placeholder-gray-400"
                          placeholder="Tu apellido"
                          required
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg placeholder-gray-400"
                          placeholder="tu@email.com"
                          required
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg placeholder-gray-400"
                          placeholder="+51 999 888 777"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    
                    {/* Información del proyecto */}
                    <div className="space-y-6">
                      <div className="relative">
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                          Empresa / Organización
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg placeholder-gray-400"
                          placeholder="Nombre de tu empresa"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="project" className="block text-sm font-semibold text-gray-700 mb-3">
                          Tipo de proyecto *
                        </label>
                        <select
                          id="project"
                          name="project"
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg appearance-none bg-white"
                          required
                        >
                          <option value="">Selecciona el tipo de proyecto</option>
                          <option value="landing">🚀 Landing Page</option>
                          <option value="ecommerce">🛒 Tienda Online / E-commerce</option>
                          <option value="webapp">💻 Aplicación Web Personalizada</option>
                          <option value="corporate">🏢 Sitio Web Corporativo</option>
                          <option value="optimization">📈 Optimización SEO</option>
                          <option value="redesign">🎨 Rediseño de sitio existente</option>
                          <option value="maintenance">🔧 Mantenimiento y soporte</option>
                          <option value="consulting">🎯 Consultoría técnica</option>
                          <option value="other">🤔 Otro (especificar en mensaje)</option>
                        </select>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        
                        {/* Icono de dropdown personalizado */}
                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-3">
                          Presupuesto estimado
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg appearance-none bg-white"
                        >
                          <option value="">Selecciona un rango de presupuesto</option>
                          <option value="under-1k">💰 Menos de $1,000</option>
                          <option value="1k-3k">💰💰 $1,000 - $3,000</option>
                          <option value="3k-5k">💰💰💰 $3,000 - $5,000</option>
                          <option value="5k-10k">💰💰💰💰 $5,000 - $10,000</option>
                          <option value="10k-plus">💰💰💰💰💰 Más de $10,000</option>
                          <option value="discuss">💬 Prefiero discutirlo</option>
                        </select>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        
                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-3">
                          Cronograma deseado
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg appearance-none bg-white"
                        >
                          <option value="">¿Cuándo necesitas el proyecto?</option>
                          <option value="asap">⚡ Lo antes posible</option>
                          <option value="1month">📅 En 1 mes</option>
                          <option value="2-3months">📅📅 En 2-3 meses</option>
                          <option value="flexible">🤷‍♂️ Flexible</option>
                          <option value="discuss">💬 A discutir</option>
                        </select>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        
                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mensaje */}
                    <div className="relative">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                        Cuéntanos sobre tu proyecto *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-lg placeholder-gray-400 resize-none"
                        placeholder="Describe tu proyecto, objetivos, funcionalidades específicas, audiencia objetivo, referencias o inspiraciones, y cualquier detalle importante que debamos conocer..."
                        required
                      ></textarea>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    {/* Términos y condiciones */}
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        className="w-6 h-6 text-blue-600 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-2 mt-1"
                        required
                      />
                      <label htmlFor="terms" className="text-gray-600 leading-relaxed">
                        Acepto los <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold underline">términos y condiciones</a> y 
                        autorizo el procesamiento de mis datos personales según la 
                        <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold underline"> política de privacidad</a>.
                        Entiendo que me contactarán para discutir mi proyecto.
                      </label>
                    </div>
                    
                    {/* Botón de envío */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-5 px-8 rounded-2xl font-bold text-xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-3">
                        <span>Enviar Proyecto</span>
                        <span className="text-2xl group-hover:animate-bounce">🚀</span>
                      </span>
                      
                      {/* Efecto de brillo */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </button>
                    
                    <p className="text-center text-gray-500 text-sm">
                      ⏱️ Responderemos tu solicitud en menos de 24 horas
                    </p>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Información de contacto - 2 columnas */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Información principal */}
              <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-xl"></div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-8">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group hover:bg-gray-50 p-4 rounded-2xl transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white text-2xl">📧</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">Email</p>
                      <a href="mailto:contacto@devwebpro.com" className="text-blue-600 hover:text-blue-800 font-medium">
                        contacto@devwebpro.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover:bg-gray-50 p-4 rounded-2xl transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white text-2xl">📱</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">WhatsApp</p>
                      <a href="tel:+51999888777" className="text-green-600 hover:text-green-800 font-medium">
                        +51 999 888 777
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover:bg-gray-50 p-4 rounded-2xl transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">Ubicación</p>
                      <p className="text-gray-600 font-medium">Lima, Perú</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover:bg-gray-50 p-4 rounded-2xl transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-white text-2xl">⏰</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg">Horarios</p>
                      <p className="text-gray-600 font-medium">Lun - Vie: 9:00 - 18:00</p>
                      <p className="text-gray-500 text-sm">GMT-5 (Lima)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Estadísticas rápidas */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-300/20 rounded-full blur-xl"></div>
                
                <h3 className="text-2xl font-bold mb-8 relative z-10">
                  ¿Por qué elegirnos?
                </h3>
                
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-indigo-200 text-sm">Proyectos Exitosos</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-indigo-200 text-sm">Clientes Satisfechos</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24h</div>
                    <div className="text-indigo-200 text-sm">Tiempo de Respuesta</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">5★</div>
                    <div className="text-indigo-200 text-sm">Calificación Promedio</div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-indigo-100 text-sm text-center">
                    💡 <strong>Consulta inicial gratuita</strong> para evaluar tu proyecto
                  </p>
                </div>
              </div>
              
              {/* FAQ rápido */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Preguntas Frecuentes
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-bold text-gray-800 mb-2">⏱️ ¿Cuánto tarda un proyecto?</p>
                    <p className="text-gray-600 text-sm">Entre 2-8 semanas dependiendo de la complejidad y funcionalidades requeridas.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-bold text-gray-800 mb-2">💰 ¿Cómo son los pagos?</p>
                    <p className="text-gray-600 text-sm">50% al iniciar, 50% al entregar. Aceptamos transferencias bancarias y PayPal.</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-bold text-gray-800 mb-2">🔧 ¿Incluye soporte post-entrega?</p>
                    <p className="text-gray-600 text-sm">Sí, incluimos 3 meses de soporte técnico y ajustes menores gratuitos.</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-bold text-gray-800 mb-2">📱 ¿Es responsive (móvil)?</p>
                    <p className="text-gray-600 text-sm">Absolutamente. Todos nuestros sitios son 100% responsive y optimizados para móviles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action alternativo */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Prefieres una videollamada?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Agenda una reunión virtual gratuita de 30 minutos para discutir tu proyecto en detalle
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/51999888777?text=Hola, me interesa solicitar una videollamada para discutir mi proyecto web" 
              target="_blank"
              className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="text-2xl mr-3">📱</span>
              WhatsApp
            </a>
            
            <a 
              href="tel:+51999888777" 
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="text-2xl mr-3">📞</span>
              Llamar: +51 999 888 777
            </a>
          </div>
          
          <p className="text-blue-200 mt-6 text-sm">
            🗓️ También puedes agendar una cita a través del formulario
          </p>
        </div>
      </section>
    </div>
  );
}