import Link from 'next/link';

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FC] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-brand p-8 w-full max-w-2xl text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="font-display-bold text-4xl text-navy-100 mb-4">
            Academy
          </h1>
          <p className="font-body-regular text-navy-75 text-lg">
            Learn and grow your skills in the service industry
          </p>
        </div>

        <div className="bg-[#F6F8FC] rounded-lg p-6 mb-8">
          <p className="font-body-medium text-navy-100 mb-2">
            🚧 Academy Integration
          </p>
          <p className="font-body-regular text-navy-75">
            The Academy app is being integrated. This will redirect to the full Academy experience.
          </p>
        </div>

        <div className="space-y-4">
          <a 
            href="http://localhost:3001" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-100 hover:bg-green-75 text-white font-body-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            🎓 Open Academy (Dev)
          </a>
          
          <div className="space-y-2">
            <Link 
              href="/dashboard" 
              className="block bg-red-75 hover:bg-red-100 text-white font-body-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            >
              ← Back to Dashboard
            </Link>
            
            <Link 
              href="/" 
              className="block font-body-regular text-navy-50 hover:text-navy-75 transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 