import { Typography } from 'ui-components';
import Link from 'next/link';

export default function TypographyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-silver-25">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display-bold text-6xl text-navy-100 mb-4">
            ServiceClub Typography
          </h1>
          <p className="font-body-regular text-xl text-navy-75 max-w-3xl mx-auto">
            Sistema tipográfico completo con Clash Display para títulos y Poppins para texto del cuerpo
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center mt-6 font-body-medium text-brand-primary hover:text-red-75 transition-colors duration-300"
          >
            ← Volver al Hub
          </Link>
        </div>

        {/* Typography Showcase */}
        <div className="bg-white rounded-3xl shadow-brand p-8 lg:p-12">
          <Typography />
        </div>

        {/* Quick Reference */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-navy p-6">
            <h3 className="font-display-semibold text-xl text-navy-100 mb-4">
              Clases CSS Disponibles
            </h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="font-body-regular text-navy-75">
                <strong>Display (Clash Display):</strong>
              </div>
              <div className="pl-4 space-y-1 text-navy-50">
                <div>.font-display-regular</div>
                <div>.font-display-medium</div>
                <div>.font-display-semibold</div>
                <div>.font-display-bold</div>
              </div>
              <div className="font-body-regular text-navy-75 pt-2">
                <strong>Body (Poppins):</strong>
              </div>
              <div className="pl-4 space-y-1 text-navy-50">
                <div>.font-body-light</div>
                <div>.font-body-regular</div>
                <div>.font-body-medium</div>
                <div>.font-body-semibold</div>
                <div>.font-body-bold</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-navy p-6">
            <h3 className="font-display-semibold text-xl text-navy-100 mb-4">
              Tailwind Font Families
            </h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="font-body-regular text-navy-75">
                <strong>Configuración Tailwind:</strong>
              </div>
              <div className="pl-4 space-y-1 text-navy-50">
                <div>font-display (Clash Display)</div>
                <div>font-sans (Poppins)</div>
                <div>font-mono (JetBrains Mono)</div>
              </div>
              <div className="font-body-regular text-navy-75 pt-2">
                <strong>Tamaños disponibles:</strong>
              </div>
              <div className="pl-4 space-y-1 text-navy-50">
                <div>text-xs hasta text-9xl</div>
                <div>Con line-height optimizado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 