import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FC] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-brand p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-display-bold text-3xl text-navy-100 mb-2">
            Welcome Back
          </h1>
          <p className="font-body-regular text-navy-75">
            Log in to your ServiceClub account
          </p>
        </div>

        <form className="space-y-6">
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
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="font-body-regular text-navy-75">Remember me</span>
            </label>
            <a href="#" className="font-body-medium text-red-75 hover:text-red-100">
              Forgot password?
            </a>
          </div>

          <Link
            href="/dashboard"
            className="w-full bg-red-75 hover:bg-red-100 text-white font-body-semibold py-3 rounded-lg flex items-center justify-center transition-colors duration-300"
          >
            Log In
          </Link>
        </form>

        <div className="text-center mt-6">
          <p className="font-body-regular text-navy-50">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-red-75 hover:text-red-100 font-body-medium">
              Sign up
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