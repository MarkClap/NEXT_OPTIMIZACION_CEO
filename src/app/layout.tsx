import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi App",
  description: "Aplicación con fuente optimizada",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50`}>
        {/* Header moderno con gradiente */}
        <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-lg">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">✦</span>
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  My site
                </h1>
              </div>
              
              <div className="hidden md:flex space-x-8">
                <a href="/" className="relative group">
                  <span className="hover:text-blue-200 transition-colors duration-300">Inicio</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="/blog" className="relative group">
                  <span className="hover:text-blue-200 transition-colors duration-300">Blog</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="/contact" className="relative group">
                  <span className="hover:text-blue-200 transition-colors duration-300">Contacto</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-white hover:text-blue-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>
        
        {/* Contenido principal */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer elegante */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold"></span>
                  </div>
                  <span className="text-xl font-bold">My site</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Especialistas en desarrollo web moderno y optimización SEO.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Servicios</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Desarrollo Web</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Optimización SEO</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Aplicaciones React</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Consultoría</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>📧 contacto@devwebpro.com</li>
                  <li>📱 +51 999 888 777</li>
                  <li>📍 Lima, Perú</li>
                  <li>🌐 www.devwebpro.com</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <span>📘</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors">
                    <span>🐦</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <span>📷</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <span>💼</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}