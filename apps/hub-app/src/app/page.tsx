import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block min-h-screen bg-[#F6F8FC] relative overflow-hidden">
        {/* Background Blur Elements */}
        <div 
          className="absolute w-[986px] h-[965px] opacity-33 bg-red-50 shadow-[50px_50px_50px] blur-[25px]"
          style={{
            left: '1613px',
            top: '744px',
            transform: 'rotate(160deg)',
            transformOrigin: 'top left'
          }}
        />
        <div 
          className="absolute w-[251px] h-[70px] bg-green-50 shadow-[21px_21px_21px] rounded-[86px] blur-[11px]"
          style={{
            left: '437px',
            top: '368px'
          }}
        />
        <div 
          className="absolute w-[264px] h-[250px] opacity-74 bg-navy-50 shadow-[50px_50px_50px] blur-[25px]"
          style={{
            left: '409px',
            top: '545px',
            transform: 'rotate(18deg)',
            transformOrigin: 'top left'
          }}
        />

        {/* Header */}
        <header className="relative z-10">
          <div className="w-full h-[111px] bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
              <div className="font-display-bold text-2xl text-navy-100">
                ServiceClub
              </div>
              <div className="flex items-center space-x-6">
                <nav className="flex space-x-8">
                  <a href="#" className="font-body-medium text-navy-75 hover:text-navy-100 transition-colors">
                    About
                  </a>
                  <a href="#" className="font-body-medium text-navy-75 hover:text-navy-100 transition-colors">
                    Services
                  </a>
                  <a href="#" className="font-body-medium text-navy-75 hover:text-navy-100 transition-colors">
                    Contact
                  </a>
                </nav>
                <div className="w-[179px] h-[63px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="font-body-medium text-gray-600">Logo</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-12 items-center min-h-[calc(100vh-111px)]">
            {/* Left Content */}
            <div className="pt-24">
              <div className="mb-8">
                <h1 className="font-body-medium text-[54.75px] leading-[70px] tracking-[0.35px] text-[#292D32] mb-4">
                  Where drivers and <br />companies{' '}
                  <span className="font-body-semibold">connect</span>
                </h1>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <Link
                  href="/dashboard"
                  className="w-[157px] h-[50px] bg-red-75 hover:bg-red-100 text-white font-body-medium text-[17.44px] rounded-[6px] flex items-center justify-center transition-colors duration-300"
                >
                  Log in
                </Link>
                <Link
                  href="/auth/signup"
                  className="w-[157px] h-[50px] bg-white text-red-75 font-body-medium text-[17.44px] rounded-[6px] border-[1.25px] border-red-75 hover:bg-red-25 flex items-center justify-center transition-colors duration-300"
                >
                  Sign up
                </Link>
              </div>
            </div>

            {/* Right Content - Image Grid */}
            <div className="relative h-[850px]">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Column 1 */}
                <div className="flex flex-col gap-4">
                  <div className="h-[367px] bg-gray-300 rounded-[25px] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-75 flex items-center justify-center">
                      <span className="text-white font-display-semibold text-xl">Academy</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-300 rounded-[25px] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-75 flex items-center justify-center">
                      <span className="text-white font-display-semibold text-xl">Jobs</span>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-4">
                  <div className="flex-1 bg-gray-300 rounded-[25px] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-neon-100 to-neon-75 flex items-center justify-center">
                      <span className="text-navy-100 font-display-semibold text-xl">Shop</span>
                    </div>
                  </div>
                  <div className="h-[367px] bg-gray-300 rounded-[25px] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-navy-100 to-navy-75 flex items-center justify-center">
                      <span className="text-white font-display-semibold text-xl">Services</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden min-h-screen bg-white relative overflow-hidden">
        {/* Background Blur Elements */}
        <div 
          className="absolute w-[450px] h-[440px] opacity-33 bg-red-50 shadow-[50px_50px_50px] blur-[25px]"
          style={{
            left: '487px',
            top: '201px',
            transform: 'rotate(116deg)',
            transformOrigin: 'top left'
          }}
        />
        <div 
          className="absolute w-[121px] h-[114px] opacity-74 bg-navy-50 shadow-[50px_50px_50px] blur-[25px]"
          style={{
            left: '212px',
            top: '696px',
            transform: 'rotate(-25deg)',
            transformOrigin: 'top left'
          }}
        />
        <div 
          className="absolute w-[168px] h-[40px] bg-green-50 shadow-[21px_21px_21px] rounded-[86px] blur-[11px]"
          style={{
            left: '19px',
            top: '661px'
          }}
        />

        {/* Header */}
        <header className="relative z-10">
          <div className="w-full h-[54px] bg-white shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06)] px-4 flex items-center justify-between">
            <div className="font-display-bold text-lg text-navy-100">
              ServiceClub
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs">☰</span>
            </div>
          </div>
        </header>

        {/* Image Grid */}
        <div className="relative px-5 pt-4">
          <div className="grid grid-cols-2 gap-3 h-[478px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <div className="h-[206px] bg-gray-300 rounded-[14px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-75 flex items-center justify-center">
                  <span className="text-white font-display-semibold text-sm">Academy</span>
                </div>
              </div>
              <div className="flex-1 bg-gray-300 rounded-[14px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-75 flex items-center justify-center">
                  <span className="text-white font-display-semibold text-sm">Jobs</span>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <div className="flex-1 bg-gray-300 rounded-[14px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neon-100 to-neon-75 flex items-center justify-center">
                  <span className="text-navy-100 font-display-semibold text-sm">Shop</span>
                </div>
              </div>
              <div className="h-[206px] bg-gray-300 rounded-[14px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-navy-100 to-navy-75 flex items-center justify-center">
                  <span className="text-white font-display-semibold text-sm">Services</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Overlay */}
          <div 
            className="absolute inset-x-0 h-[348px] pointer-events-none"
            style={{
              top: '223px',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 4%, rgba(255, 255, 255, 0.50) 45%, white 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 pt-16">
          <div className="mb-8">
            <h1 className="font-body-medium text-[32px] leading-[37px] tracking-[0.35px] text-[#292D32]">
              Where drivers and <br />companies{' '}
              <span className="font-body-semibold">connect</span>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Link
              href="/auth/signup"
              className="w-[157px] h-[50px] bg-white text-red-75 font-body-medium text-[17.44px] rounded-[6px] border-[1.25px] border-red-75 hover:bg-red-25 flex items-center justify-center transition-colors duration-300"
            >
              Sign up
            </Link>
            <Link
              href="/dashboard"
              className="w-[157px] h-[50px] bg-red-75 hover:bg-red-100 text-white font-body-medium text-[17.44px] rounded-[6px] flex items-center justify-center transition-colors duration-300"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
