// app/blog/page.tsx
export const metadata = {
  title: 'Blog - Artículos sobre Desarrollo Web | DevWeb Pro',
  description: 'Descubre artículos sobre desarrollo web, SEO, Next.js y las últimas tendencias en tecnología.',
  keywords: ['blog desarrollo web', 'SEO', 'Next.js', 'artículos programación'],
  openGraph: {
    title: 'Blog - Desarrollo Web Avanzado',
    description: 'Los mejores artículos sobre desarrollo web y SEO',
    images: ['/images/blog-banner.png'],
    type: 'website',
  },
};

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Optimización SEO en Next.js 14",
      excerpt: "Descubre las técnicas más avanzadas para optimizar el SEO en aplicaciones Next.js y mejorar tu posicionamiento.",
      date: "28 Jun 2025",
      category: "SEO",
      readTime: "5 min",
      image: "/images/seo-post.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Meta Tags Dinámicos con React",
      excerpt: "Aprende a implementar meta tags que se adapten dinámicamente al contenido de cada página de tu aplicación.",
      date: "25 Jun 2025",
      category: "React",
      readTime: "8 min",
      image: "/images/meta-tags-post.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Sitemaps Automáticos en Next.js",
      excerpt: "Crea sitemaps dinámicos que se actualicen automáticamente para mejorar la indexación de tu sitio web.",
      date: "22 Jun 2025",
      category: "Next.js",
      readTime: "6 min",
      image: "/images/sitemap-post.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Core Web Vitals y Performance",
      excerpt: "Optimiza los Core Web Vitals de tu sitio para mejorar la experiencia de usuario y el ranking en Google.",
      date: "20 Jun 2025",
      category: "Performance",
      readTime: "10 min",
      image: "/images/performance-post.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Lazy Loading en Aplicaciones React",
      excerpt: "Implementa lazy loading efectivo para reducir el tiempo de carga inicial de tu aplicación.",
      date: "18 Jun 2025",
      category: "React",
      readTime: "7 min",
      image: "/images/lazy-loading-post.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Mejores Prácticas de Accesibilidad Web",
      excerpt: "Guía completa para hacer tu sitio web accesible para todos los usuarios, incluyendo personas con discapacidades.",
      date: "15 Jun 2025",
      category: "Accesibilidad",
      readTime: "12 min",
      image: "/images/accessibility-post.jpg",
      featured: false
    }
  ];

  const categories = ["Todos", "SEO", "React", "Next.js", "Performance", "Accesibilidad"];

  return (
    <div>
      {/* Hero Section del Blog */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Blog de Desarrollo Web
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Mantente actualizado con las últimas tendencias, técnicas y mejores prácticas 
              en desarrollo web, SEO y tecnologías modernas.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros de categorías */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de artículos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={post.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                  post.featured ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <div className={`bg-gradient-to-br from-blue-500 to-purple-600 ${post.featured ? 'h-64' : 'h-48'}`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                    {post.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                          ⭐ Destacado
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`p-6 ${post.featured ? 'p-8' : ''}`}>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>📅 {post.date}</span>
                    <span>⏱️ {post.readTime} lectura</span>
                  </div>
                  
                  <h2 className={`font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors ${
                    post.featured ? 'text-2xl' : 'text-xl'
                  }`}>
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      Leer artículo
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <span className="text-gray-400 hover:text-red-500">❤️</span>
                      </button>
                      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        <span className="text-gray-400 hover:text-blue-500">🔗</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Suscríbete a Nuestro Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Recibe los últimos artículos y tips directamente en tu email
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors font-semibold">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}