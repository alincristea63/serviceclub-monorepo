import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FC] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-brand p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-display-bold text-3xl text-navy-100 mb-2">
            Sign Up
          </h1>
          <p className="font-body-regular text-navy-75">
            Join ServiceClub today
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block font-body-medium text-navy-100 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body-regular focus:outline-none focus:ring-2 focus:ring-red-75"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block font-body-medium text-navy-100 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body-regular focus:outline-none focus:ring-2 focus:ring-red-75"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block font-body-medium text-navy-100 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg font-body-regular focus:outline-none focus:ring-2 focus:ring-red-75"
              placeholder="Create a password"
            />
          </div>

          <Link
            href="/dashboard"
            className="w-full bg-red-75 hover:bg-red-100 text-white font-body-semibold py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
          >
            Create Account
          </Link>
        </form>

        <div className="text-center mt-6">
          <p className="font-body-regular text-navy-50">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-red-75 hover:text-red-100 font-body-medium">
              Log in
            </Link>
          </p>
        </div>

        <div className="text-center mt-4">
          <Link 
            href="/" 
            className="font-body-regular text-navy-50 hover:text-navy-75 transition-colors duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 