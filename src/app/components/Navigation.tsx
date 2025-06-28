import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Mi Sitio Web
          </Link>
          
          <div className="space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}