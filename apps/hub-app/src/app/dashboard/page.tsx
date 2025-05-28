import Link from 'next/link';

export default function Dashboard() {
  const verticals = [
    {
      name: 'Jobs',
      icon: '💼',
      href: '/jobs',
      borderColor: 'border-red-75',
      bgColor: 'bg-white'
    },
    {
      name: 'Academy',
      icon: '🎓',
      href: 'http://localhost:3001',
      borderColor: 'border-green-100',
      bgColor: 'bg-white'
    },
    {
      name: 'Services',
      icon: '🔧',
      href: '/services',
      borderColor: 'border-purple-100',
      bgColor: 'bg-white'
    },
    {
      name: 'Products',
      icon: '🛒',
      href: '/shop',
      borderColor: 'border-[#C938E3]',
      bgColor: 'bg-white'
    },
    {
      name: 'Community',
      icon: '👥',
      href: '/communities',
      borderColor: 'border-navy-100',
      bgColor: 'bg-white'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Blur Elements */}
      <div 
        className="absolute w-[569px] h-[472px] opacity-33 bg-red-50 shadow-[50px_50px_50px] blur-[25px]"
        style={{
          left: '612px',
          top: '640px',
          transform: 'rotate(106deg)',
          transformOrigin: 'top left'
        }}
      />
      <div 
        className="absolute w-[107px] h-[74px] opacity-50 bg-green-75 shadow-[35px_35px_35px] blur-[18px]"
        style={{
          left: '82px',
          top: '187px',
          transform: 'rotate(156deg)',
          transformOrigin: 'top left'
        }}
      />

      {/* Header */}
      <header className="relative z-10">
        <div className="w-full h-[54px] bg-white shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06)] px-4 flex items-center justify-between">
          <div className="font-display-bold text-lg text-navy-100">
            ServiceClub
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-xs">👤</span>
          </div>
        </div>
      </header>

      {/* Welcome Message */}
      <div className="relative z-10 px-12 pt-8">
        <h1 className="font-body-medium text-[32px] leading-[37px] tracking-[0.35px] text-[#292D32]">
          Hello, welcome to<br />Service Club
        </h1>
      </div>

      {/* Verticals Grid */}
      <div className="relative z-10 px-12 pt-12 pb-8">
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="flex justify-center gap-8">
            {verticals.slice(0, 2).map((vertical) => (
              <Link
                key={vertical.name}
                href={vertical.href}
                className="group flex flex-col items-center"
              >
                {/* Circle */}
                <div className="w-[120px] h-[120px] bg-white shadow-[0px_1.25px_3.75px_1.25px_rgba(60,64,67,0.15)] rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl">{vertical.icon}</span>
                </div>
                {/* Label */}
                <div className={`px-[13px] py-[6px] ${vertical.bgColor} rounded-full border-[2.19px] ${vertical.borderColor} flex items-center justify-center`}>
                  <span className="font-body-medium text-[20.72px] leading-[26.55px] tracking-[0.13px] text-[#292D32]">
                    {vertical.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-8">
            {verticals.slice(2, 4).map((vertical) => (
              <Link
                key={vertical.name}
                href={vertical.href}
                className="group flex flex-col items-center"
              >
                {/* Circle */}
                <div className="w-[120px] h-[120px] bg-white shadow-[0px_1.25px_3.75px_1.25px_rgba(60,64,67,0.15)] rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl">{vertical.icon}</span>
                </div>
                {/* Label */}
                <div className={`px-[13px] py-[6px] ${vertical.bgColor} rounded-full border-[2.19px] ${vertical.borderColor} flex items-center justify-center`}>
                  <span className="font-body-medium text-[20.72px] leading-[26.55px] tracking-[0.13px] text-[#292D32]">
                    {vertical.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex justify-center">
            {verticals.slice(4, 5).map((vertical) => (
              <Link
                key={vertical.name}
                href={vertical.href}
                className="group flex flex-col items-center"
              >
                {/* Circle */}
                <div className="w-[120px] h-[120px] bg-white shadow-[0px_1.25px_3.75px_1.25px_rgba(60,64,67,0.15)] rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl">{vertical.icon}</span>
                </div>
                {/* Label */}
                <div className={`px-[13px] py-[6px] ${vertical.bgColor} rounded-full border-[2.19px] ${vertical.borderColor} flex items-center justify-center`}>
                  <span className="font-body-medium text-[20.72px] leading-[26.55px] tracking-[0.13px] text-[#292D32]">
                    {vertical.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Landing */}
      <div className="relative z-10 px-12 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center font-body-regular text-navy-50 hover:text-navy-75 transition-colors duration-300"
        >
          ← Back to Landing
        </Link>
      </div>
    </div>
  );
} 