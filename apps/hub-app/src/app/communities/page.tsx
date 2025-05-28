import Link from 'next/link';

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FC] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-brand p-8 w-full max-w-2xl text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">👥</div>
          <h1 className="font-display-bold text-4xl text-navy-100 mb-4">
            Community
          </h1>
          <p className="font-body-regular text-navy-75 text-lg">
            Connect with other service professionals
          </p>
        </div>

        <div className="bg-[#F6F8FC] rounded-lg p-6 mb-8">
          <p className="font-body-medium text-navy-100 mb-2">
            🚧 Coming Soon
          </p>
          <p className="font-body-regular text-navy-75">
            This vertical is under development. Soon you&apos;ll be able to connect and collaborate with other service professionals.
          </p>
        </div>

        <div className="space-y-4">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center bg-red-75 hover:bg-red-100 text-white font-body-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            ← Back to Dashboard
          </Link>
          
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center font-body-regular text-navy-50 hover:text-navy-75 transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 